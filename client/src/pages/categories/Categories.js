import React, { Component } from 'react'
import { Container, Header, Icon, Dimmer, Loader } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

class Categories extends Component {
  constructor () {
    super()
    this.state = {}
    this.getCategories = this.getCategories.bind(this)
    this.getCategory = this.getCategory.bind(this)
  }
  componentDidMount () {
    this.getCategories()
  }
  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getCategories () {
    this.fetch('api/categories')
      .then(categories => {
        this.setState({categories: categories})
        categories[0] && this.getCategory(categories[0].id)
      })
  }
  getCategory (id) {
    this.fetch(`api/categories/${id}`)
      .then(category => this.setState({category: category}))
  }
  render () {
    let {categories, category} = this.state
    return categories
    ? <Container text>
        <Header as='h2' icon textAlign='center'>
        <Icon name='list layout' circular color="red"/>
        <Header.Content>
          List of categories
        </Header.Content>
      </Header>
      <Table celled selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Ações</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {categories.map((category) => (
          <Table.Row key={category.id}>
          <Table.Cell content={category.name}></Table.Cell>
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

export default Categories
