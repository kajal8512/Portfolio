import React from "react";
import {Box, Typography} from '@mui/material/';
// import styled from 'styled-components';
import { useStyles } from "./HeardersStyle";
import Navbar from './Navbar';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { Docorator } from "../common/commonComponent";

export default function HeadersComponent() {
  const classes = useStyles();
  return (
    <Box className={classes.HeardeWraper}>
      <Navbar />
      <Box className={classes.HeardeContaier}>
        <Typography variant="h3" component="h4" className={classes.heardeTitle}>Welcome Everyone</Typography>
        <Typography variant="h5" component="h4" className={classes.heardeDesc}>I develop a Website and build Schema, Based on Your Needs... </Typography>
        {Docorator({label:'About Me', withIcon:true, Icon:<ArrowDownwardRoundedIcon/>})}
      </Box>
    </Box>
  );
}
