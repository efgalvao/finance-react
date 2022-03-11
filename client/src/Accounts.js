import React, { Component } from 'react'
import { Container, Header, Icon, Dimmer, Loader, Divider, List } from 'semantic-ui-react'

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
      <List color='teal'>
        {Object.keys(accounts).map((key) => {
          return <List.Item active={account && account.id === accounts[key].id} key={key} onClick={() => this.getAccount(accounts[key].id)}>
            {accounts[key].name}
          </List.Item>
        })}
      </List>
      <Divider hidden />
      {account &&
        <Container>
          <Header as='h2'>{account.name}</Header>
          {account.name && <p>{account.name}</p>}
          {account.updated_at && <p>{account.updated_at}</p>}
          {account.balance_cents && <p>{account.balance_cents}</p>}
        </Container>
      }
    </Container>
    : <Container text>
      <Dimmer active inverted>
        <Loader content='Loading' />
      </Dimmer>
    </Container>
}
}

export default Accounts
