import React, { Component } from 'react'
import { Container, Header, Icon, Dimmer, Loader } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

class Shares extends Component {
  constructor () {
    super()
    this.state = {}
    this.getShares = this.getShares.bind(this)
    this.getShare = this.getShare.bind(this)
  }
  componentDidMount () {
    this.getShares()
  }
  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getShares () {
    this.fetch('api/shares')
      .then(shares => {
        this.setState({shares: shares})
        shares[0] && this.getShare(shares[0].id)
      })
  }
  getShare (id) {
    this.fetch(`api/shares/${id}`)
      .then(share => this.setState({share: share}))
  }
  render () {
    let {shares, share} = this.state
    return shares
    ? <Container text>
        <Header as='h2' icon textAlign='center'>
        <Icon name='list layout' circular color="red"/>
        <Header.Content>
          List of shares
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
        {shares.map((share) => (
          <Table.Row key={share.id}>
          <Table.Cell content={share.date}></Table.Cell>
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

export default Shares
