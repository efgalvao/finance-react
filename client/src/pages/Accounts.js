import React, { Component } from 'react'
import { Container, Header, Icon, Dimmer, Loader } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'
import { format } from 'date-fns'

class Accounts extends Component {
  constructor () {
    super()
    this.state = {}
    this.getAccounts = this.getAccounts.bind(this)
    this.getAccount = this.getAccount.bind(this)
  }
  componentDidMount () {
    this.getAccounts()
  }
  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getAccounts () {
    this.fetch('api/accounts')
      .then(accounts => {
        this.setState({accounts: accounts})
        accounts[0] && this.getAccount(accounts[0].id)
      })
  }
  getAccount (id) {
    this.fetch(`api/accounts/${id}`)
      .then(account => this.setState({account: account}))
  }
  render () {
    let {accounts, account} = this.state
    return accounts
    ? <Container text>
        <Header as='h2' icon textAlign='center'>
        <Icon name='bookmark' circular color="red"/>
        <Header.Content>
          List of Accounts
        </Header.Content>
      </Header>
      <Table celled selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Savings?</Table.HeaderCell>
        <Table.HeaderCell>Balance</Table.HeaderCell>
        <Table.HeaderCell>Last update</Table.HeaderCell>
        <Table.HeaderCell align='right'>Ações</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {accounts.map((account) => (
          <Table.Row key={account.id}>
          <Table.Cell content={account.name}></Table.Cell>
        <Table.Cell content={account.savings.toString()}></Table.Cell>
        <Table.Cell content={account.balance_cents}></Table.Cell>
        <Table.Cell content={format(new Date(account.updated_at), 'dd/MM/yyyy HH:mm')}></Table.Cell>
      </Table.Row>
        ))}
    </Table.Body>
  </Table>
  </Container>
  : <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>
  }
    // <Container text>
    //   <Dimmer active inverted>
    //     <Loader content='Loading' />
    //   </Dimmer>
    // </Container>
}

export default Accounts
