import React, { Component } from 'react'

const repos = []

export default class RepositoriesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {repos};
  }

  render() {
    return (
      <h2>Repositories Page</h2>
    )
  }
}
