import React, { Component } from 'react'
import { Card, Col, Row, Layout, Alert, message, Button } from 'antd';
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import Common from './Common';

class Lookup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.checkEmployee();
  }

  checkEmployee = () => {
  }

  getPaid = () => {
  }

  renderContent() {
    const { salary, lastPaidDate, balance } = this.state;

    return (
      <div>
        {/* <Row gutter={16}>
          <Col span={8}>
            <Card title="薪水">{salary} Ether</Card>
          </Col>
          <Col span={8}>
            <Card title="上次支付">{lastPaidDate}</Card>
          </Col>
          <Col span={8}>
            <Card title="帐号金额">{balance} Ether</Card>
          </Col>
        </Row>

        <Button
          type="primary"
          icon="bank"
          onClick={this.getPaid}
        >
          获得酬劳
        </Button> */}
        <h2>To do!!!!!</h2>
      </div>
    );
  }

  render() {
    const { account, payroll, web3 } = this.props;

    return (
      <Layout style={{ padding: '24px 24px', background: '#fff' }}>
        {/* <Common account={account} payroll={payroll} web3={web3} />
        <h2>个人信息</h2> */}
        <div className="pure-u-1-1">
          <h2>To do!!!!!</h2>
        </div>
        {/* {this.renderContent()} */}
      </Layout >
    );
  }
}

export default Lookup