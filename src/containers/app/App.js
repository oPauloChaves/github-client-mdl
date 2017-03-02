import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {deepPurple500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import SideBar from './SideBar'
import HomePage from '../Home'
import UsersPage from '../Users'
import ReposPage from '../Repositories'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
    accent1Color: deepPurple500,
  },
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <div>
            <SideBar
              open={this.state.open}
              handleToggle={this.handleToggle}
            />

            <AppBar
              title={<Link to="/">Github Client</Link>}
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={(open) => this.handleToggle() }
            />

            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-8">
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/users" component={UsersPage}/>
                  <Route path="/repos" component={ReposPage}/>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
