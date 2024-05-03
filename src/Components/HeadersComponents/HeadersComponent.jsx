import React from "react";
import {Box, Typography} from '@mui/material/';
// import styled from 'styled-components';
import { useStyles } from "./HeardersStyle";
import Navbar from './Navbar';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { Docorator } from "../common/commonComponent";
import DrawerComponent from './DrawerComponent';
import {ReactTyped} from 'react-typed';

export default function HeadersComponent() {
  const classes = useStyles();
  const [initialState, setInitialState] = React.useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  }
  const navlinks = [
    { label: "About",Id:"About" },
    { label: "Portfolio", Id:"Portfolio" },
    { label: "Contact",Id:"Contact"},
  ];
  return (
    <Box className={classes.HeardeWraper} id="header">
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler}/>
      <DrawerComponent initialState={initialState} navlinks={navlinks} handleDrawerToogler={handleDrawerToogler}/>
      <Box className={classes.HeardeContaier}>
        <Typography variant="h3" component="h4" className={classes.heardeTitle}>
          <span className={classes.heardeTitle}>I'm </span>
        <ReactTyped
        strings={["Backend Developer,","Frontend Developer,","Node js Developer,"]}
        typeSpeed={40}
        backSpeed={50}
        loop
        />
        </Typography>
        <Typography variant="h5" component="h4" className={classes.heardeDesc}>I develop a Website and build Rest API, Based on Your Needs... </Typography>
        {Docorator({label:'About Me', withIcon:true, Icon:<ArrowDownwardRoundedIcon/>})}
      </Box>
    </Box>
  );
}
