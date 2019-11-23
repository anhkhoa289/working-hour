import React, {useState} from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import {
  useTheme,
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Mail as MailIcon,
  MoveToInbox as InboxIcon,
  Home as HomeIcon,
  Event as EventIcon,
  BugReport as BugReportIcon
} from '@material-ui/icons'


const routeGroup = [
  [
    { name: 'Home', to: '/', icon: <HomeIcon /> },
  ],
  [
    { name: 'Calendar', to: '/calendar', icon: <EventIcon /> },
  ],
  [
    { name: 'Debug', to: '/debug', icon: <BugReportIcon /> },
  ],
]

const SideBar = ({
  classes,
  handleDrawerClose,
  open
}) => {
  const theme = useTheme()

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      {routeGroup.map((group, key) =>
        <List key={key}>
          {key !== 0 && <Divider />}

          {group.map(({name, to, icon}) =>
            <Link href={to} key={name}>
              <ListItem button>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          )}
          
        </List>
      )}
    </Drawer>
  )
}

export default SideBar
