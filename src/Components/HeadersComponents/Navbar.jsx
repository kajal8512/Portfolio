import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Hidden, IconButton } from '@mui/material';
import { useStyles } from "./HeardersStyle";
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import {Link}  from "react-scroll";

export default function Navbar({navlinks, handleDrawerToogler}) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" >
    <Toolbar className={classes.navbar1} >
        <Typography variant="h5" component="h5" sx={{ flexGrow: 1 }}>
        {"<GreateCoder/>"}
        </Typography>
        <Hidden smDown>
        <Box >
          {navlinks.map((item, i) =>(
          <Link 
            key={i} 
            activeClass="active"
            to={`${item.Id}`}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button 
              color="inherit" 
              className={classes.navLinks}
            >
              {item.label}
            </Button>
          </Link>))}
        </Box>
        </Hidden>
        <Hidden smUp>
        <Box >
        <IconButton sx={{color:'inherit'}} onClick={handleDrawerToogler}>
          <MenuOpenRoundedIcon />
        </IconButton>
        </Box>
        </Hidden>
    </Toolbar>
    </AppBar>
  )
}