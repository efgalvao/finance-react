import React, { Component } from 'react'
import { Container, Header, Icon, Dimmer, Loader } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

class Transferences extends Component {
  constructor () {
    super()
    this.state = {}
    this.getTransferences = this.getTransferences.bind(this)
    this.getTransference = this.getTransference.bind(this)
  }
  componentDidMount () {
    this.getTransferences()
  }
  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getTransferences () {
    this.fetch('api/transferences')
      .then(transferences => {
        this.setState({transferences: transferences})
        transferences[0] && this.getTransference(transferences[0].id)
      })
  }
  getTransference (id) {
    this.fetch(`api/transferences/${id}`)
      .then(transference => this.setState({transference: transference}))
  }
  render () {
    let {transferences, transference} = this.state
    return transferences
    ? <Container text>
        <Header as='h2' icon textAlign='center'>
        <Icon name='list layout' circular color="red"/>
        <Header.Content>
          List of transferences
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
        {transferences.map((transference) => (
          <Table.Row key={transference.id}>
          <Table.Cell content={transference.date}></Table.Cell>
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

export default Transferences
