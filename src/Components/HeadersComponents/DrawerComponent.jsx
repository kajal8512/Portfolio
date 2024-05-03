import React from 'react'
import {Drawer, Box, ListItem, List, ListItemText} from '@mui/material';
import {useStyles}  from "./HeardersStyle";

export default function DrawerComponent({initialState,navlinks,handleDrawerToogler}) {
    const classes = useStyles();
  return (
    <Drawer anchor="left" 
      open={initialState} 
      onClose={handleDrawerToogler} 
      className={classes.drawer}>
      <Box className={classes.drawerContainer}>
        <List style={{padding:"30px"}}>
          {navlinks.map((item, i) => (
            <ListItem key={i} className={classes.listItem}>
            <ListItemText>{item.label}</ListItemText>
            </ListItem>
            ))}
        </List>
      </Box>
    </Drawer>
  )
}
