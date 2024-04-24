import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Hidden, IconButton } from '@mui/material';
import { useStyles } from "./HeardersStyle";
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';



export default function Navbar() {
  const classes = useStyles();
  const navLinks = [
    { label: "About",id:"About", path: "/about" },
    { label: "Portfolio", id:"Portfolio", path: "/portfolio" },
    { label: "Contact",id:"Contact", path: "/contact" },
  ];
  return (
    <AppBar position="fixed" >
    <Toolbar className={classes.navbar1} >
        <Typography variant="h5" component="h5" sx={{ flexGrow: 1 }}>
        {"<GreateCoder/>"}
        </Typography>
        <Hidden smDown>
        <Box >
          {navLinks.map((link, i) => <Button key={link.id} color="inherit" className={classes.navLinks}>{link.label}</Button>)}
        </Box>
        </Hidden>
        <Hidden smUp>
        <Box >
        <IconButton sx={{color:'inherit'}} onClick={()=>console.log("manu clicked")}>
          <MenuOpenRoundedIcon />
        </IconButton>
        </Box>
        </Hidden>
    </Toolbar>
    </AppBar>
  )
}
