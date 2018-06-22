import React, { Component } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import Customer from './Customer.js';
import './CustomerCollection.css';

const URL = "http://localhost:3000/customers"

class CustomerCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
    }
  }

  componentDidMount = () => {
    axios.get(URL)
    .then((response) => {
      this.setState({
        customers: response.data,
        customerSummary: `${response.data.length} Customers loaded`
      })
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  renderCustomerList = () => {
    const customerList = this.state.customers.map((customer) => {
      return (
        <Customer
          key={customer.id}
          id={customer.id}
          name={customer.name}
          phone={customer.phone}
          accountCredit={customer.account_credit}
          checkedOutMoviesCount={customer.movies_checked_out_count}
          selectedCustomerCallback={this.props.selectedCustomerCallback}
        />
      );
    });
    return customerList;
  }

  render() {
    return (
      <section>
        {this.state.error &&<div className="error">{this.state.error}</div>}
        <section className="results-bar">{this.state.customerSummary}</section>
          <div className="custList">{this.renderCustomerList()}</div>
      </section>
    );
  }
}


CustomerCollection.propTypes = {
  selectedCustomerCallback: PropTypes.func.isRequired,
}


export default CustomerCollection;
