import React, { Component } from 'react'
import { Container, Header, Icon, Dimmer, Loader } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

class Prices extends Component {
  constructor () {
    super()
    this.state = {}
    this.getPrices = this.getPrices.bind(this)
    this.getPrice = this.getPrice.bind(this)
  }
  componentDidMount () {
    this.getPrices()
  }
  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getPrices () {
    this.fetch('api/prices')
      .then(prices => {
        this.setState({prices: prices})
        prices[0] && this.getPrice(prices[0].id)
      })
  }
  getPrice (id) {
    this.fetch(`api/prices/${id}`)
      .then(price => this.setState({price: price}))
  }
  render () {
    let {prices, price} = this.state
    return prices
    ? <Container text>
        <Header as='h2' icon textAlign='center'>
        <Icon name='list layout' circular color="red"/>
        <Header.Content>
          List of prices
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
        {prices.map((price) => (
          <Table.Row key={price.id}>
          <Table.Cell content={price.date}></Table.Cell>
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

export default Prices
