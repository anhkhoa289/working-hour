import React, {useState} from 'react'
import clsx from 'clsx'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core'
import {
  Menu as MenuIcon
} from '@material-ui/icons'


const Bar = ({
  classes,
  handleDrawerOpen,
  open,
  barTitle
}) => {

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, { [classes.appBarShift]: open })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, { [classes.hide]: open })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {barTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Bar
