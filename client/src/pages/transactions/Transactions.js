import React, { Component } from 'react'
import { Container, Header, Icon, Dimmer, Loader } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

class transactions extends Component {
  constructor () {
    super()
    this.state = {}
    this.getTransactions = this.getTransactions.bind(this)
    this.getTransaction = this.getTransaction.bind(this)
  }
  componentDidMount () {
    this.getTransactions()
  }
  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getTransactions () {
    this.fetch('api/transactions')
      .then(transactions => {
        this.setState({transactions: transactions})
        transactions[0] && this.getTransaction(transactions[0].id)
      })
  }
  getTransaction (id) {
    this.fetch(`api/transactions/${id}`)
      .then(transaction => this.setState({transaction: transaction}))
  }
  render () {
    let {transactions, transaction} = this.state
    return transactions
    ? <Container text>
        <Header as='h2' icon textAlign='center'>
        <Icon name='list layout' circular color="red"/>
        <Header.Content>
          List of transactions
        </Header.Content>
      </Header>
      <Table celled selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Value</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Account</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {transactions.map((transaction) => (
          <Table.Row key={transaction.id}>
          <Table.Cell content={transaction.date}></Table.Cell>
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

export default transactions
