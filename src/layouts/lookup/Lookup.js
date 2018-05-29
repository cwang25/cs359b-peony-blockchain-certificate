import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import { Card, Col, Row, Layout, Alert, message, Button } from 'antd';
import PropTypes from 'prop-types'
// import logo from '../../peonyLogo.png'
// if we ever change to a non-white background
import logo from '../../peony_logo_white_background.png'
import EditableCell from '../../components/EditableCell'

import './css/style.css';
// import styles from 'css/style.css';
// import "css/style.css"

class Lookup extends Component {
  constructor(props, context) {
    super(props)
    this.contracts = context.drizzle.contracts;
  }

  // componentDidMount() {
  //   this.checkEmployee();
  // }

  // checkEmployee = () => {
  // }

  // getPaid = () => {
  // }

  renderContent() {
    return (
      <div>
        <h2>To do!!!!!</h2>
      </div>
    );
  }

  render() {
    return (

/*
      <Layout style={{ padding: '24px 24px', background: '#fff' }}>
        {<Common account={account} payroll={payroll} web3={web3} />
        <h2>personal msg</h2>}
        <div className="pure-u-1-1">
          <h2>To do!!!!!</h2>
        </div>
        
      </Layout >
 */
    // <link href="css/style.css" rel="stylesheet"/>
    <div className="pure-u-1-1 header">
      <img src={logo} alt="peony-logo" width="200px"/>
      <h1>Peony</h1>
      <div>
        <p>Total Active Certificate Powered By Peony: <ContractData contract="PeonyCertificate" method="totalSupply"/></p>
      </div>
      <br/><br/>
      <EditableCell />
            
    </div>
  

    );
  }
}

Lookup.contextTypes = {
  drizzle: PropTypes.object
}

export default Lookup