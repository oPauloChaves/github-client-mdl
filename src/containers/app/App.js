import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from '../Home'
import UsersPage from '../Users'
import ReposPage from '../Repositories'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/repos">Repositories</Link></li>
          </ul>

          <hr />

          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Route exact path="/" component={HomePage}/>
                <Route path="/users" component={UsersPage}/>
                <Route path="/repos" component={ReposPage}/>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
