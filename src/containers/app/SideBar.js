import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

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
          <MenuItem onTouchTap={handleToggle}>Menu Item</MenuItem>
          <MenuItem onTouchTap={handleToggle}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}
