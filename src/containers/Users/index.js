import React, { Component } from 'react'

const users = []

export default class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {users};
  }

  render() {
    return (
      <h2>Users Page</h2>
    )
  }
}
