import React, { Component } from 'react'
import { Container, Header, Icon, Dimmer, Loader } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

class Balances extends Component {
  constructor () {
    super()
    this.state = {}
    this.getBalances = this.getBalances.bind(this)
    this.getBalance = this.getBalance.bind(this)
  }
  componentDidMount () {
    this.getBalances()
  }
  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getBalances () {
    this.fetch('api/balances')
      .then(balances => {
        this.setState({balances: balances})
        balances[0] && this.getBalance(balances[0].id)
      })
  }
  getBalance (id) {
    this.fetch(`api/balances/${id}`)
      .then(balance => this.setState({balance: balance}))
  }
  render () {
    let {balances, balance} = this.state
    return balances
    ? <Container text>
        <Header as='h2' icon textAlign='center'>
        <Icon name='list layout' circular color="red"/>
        <Header.Content>
          List of balances
        </Header.Content>
      </Header>
      <Table celled selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Balance</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {balances.map((balance) => (
          <Table.Row key={balance.value_cents}>
          <Table.Cell content={balance.date}></Table.Cell>
      </Table.Row>
        ))}
    </Table.Body>
  </Table>
  </Container>
  : <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>
  }

}

export default Balances
