import React, { Component } from "react";
import { Container, Header, Icon } from "semantic-ui-react";

class Home extends Component {
  render() {
    return (
      <Container text>
        <Header as="h2" icon textAlign="center">
          <Icon name="dollar sign" circular color="red" />
          <Header.Content>Home</Header.Content>
        </Header>
      </Container>
    );
  }
}

export default Home;
