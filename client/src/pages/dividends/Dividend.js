import React, { Component } from 'react'
import { Container, Header, Icon, Dimmer, Loader } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

class Dividends extends Component {
  constructor () {
    super()
    this.state = {}
    this.getDividends = this.getDividends.bind(this)
    this.getDividend = this.getDividend.bind(this)
  }
  componentDidMount () {
    this.getDividends()
  }
  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getDividends () {
    this.fetch('api/dividends')
      .then(dividends => {
        this.setState({dividends: dividends})
        dividends[0] && this.getDividend(dividends[0].id)
      })
  }
  getDividend (id) {
    this.fetch(`api/dividends/${id}`)
      .then(dividend => this.setState({dividend: dividend}))
  }
  render () {
    let {dividends, dividend} = this.state
    return dividends
    ? <Container text>
        <Header as='h2' icon textAlign='center'>
        <Icon name='list layout' circular color="red"/>
        <Header.Content>
          List of dividends
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
        {dividends.map((dividend) => (
          <Table.Row key={dividend.id}>
          <Table.Cell content={dividend.date}></Table.Cell>
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

export default Dividends
