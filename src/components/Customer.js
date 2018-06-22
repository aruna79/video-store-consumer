import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Customer.css';


class Customer extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    accountCredit: PropTypes.string.isRequired,
    id: PropTypes.number,
    checkedOutMoviesCount: PropTypes.string.isRequired,
    selectedCustomerCallback: PropTypes.func.isRequired,
  }

  selectedCustomerCallback = () => {

    this.props.selectedCustomerCallback(this.props.name, this.props.id);
  }
  render () {

    return (
      <article className="customer-container">
        <div className="name">
        <h2>{this.props.name}</h2></div>
        <div className="customer-contact">
        <p><strong>Phone:</strong> {this.props.phone}</p>
        <p><strong>Account Credit:</strong> ${this.props.accountCredit}</p>
        <p><strong>Checked Out Movies Count:</strong> {this.props.checkedOutMoviesCount}</p></div>
        <div className="cust-wrapper"><button className="customer-button" onClick={this.selectedCustomerCallback} >Select This Customer</button></div>
      </article>
    );
  }
}

export default Customer;
