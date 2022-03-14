import React, { Component } from 'react'
import { Container, Header, Icon, Dimmer, Loader } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

class Stocks extends Component {
  constructor () {
    super()
    this.state = {}
    this.getStocks = this.getStocks.bind(this)
    this.getStock = this.getStock.bind(this)
  }
  componentDidMount () {
    this.getStocks()
  }
  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getStocks () {
    this.fetch('api/stocks')
      .then(stocks => {
        this.setState({stocks: stocks})
        stocks[0] && this.getStock(stocks[0].id)
      })
  }
  getStock (id) {
    this.fetch(`api/stocks/${id}`)
      .then(stock => this.setState({stock: stock}))
  }
  render () {
    let {stocks, stock} = this.state
    return stocks
    ? <Container text>
        <Header as='h2' icon textAlign='center'>
        <Icon name='list layout' circular color="red"/>
        <Header.Content>
          List of stocks
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
        {stocks.map((stock) => (
          <Table.Row key={stock.id}>
          <Table.Cell content={stock.date}></Table.Cell>
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

export default Stocks
