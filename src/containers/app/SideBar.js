import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
  render() {
    const { open, handleToggle } = this.props
    return (
      <div>
        <Drawer
          docked={false}
          open={open}
          onRequestChange={(open) => handleToggle() }
        >
          <AppBar
            title="Github Client"
            onLeftIconButtonTouchTap={(evt) => handleToggle() }
            onTitleTouchTap={(evt) => handleToggle() }
          />
          <MenuItem onTouchTap={handleToggle}><Link to="/users">Users</Link></MenuItem>
          <MenuItem onTouchTap={handleToggle}>Repositories</MenuItem>
        </Drawer>
      </div>
    )
  }
}
