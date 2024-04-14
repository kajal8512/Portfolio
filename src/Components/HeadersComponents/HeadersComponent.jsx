import React from "react";
import {Box, Typography} from '@mui/material/';
// import styled from 'styled-components';
import { useStyles } from "./HeardersStyle";
import Navbar from './Navbar';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

export default function HeadersComponent() {
  const classes = useStyles();
  return (
    <Box className={classes.HeardeWraper}>
      <Navbar />
      <Box className={classes.HeardeContaier}>
        <Typography variant="h3" component="h4" className={classes.heardeTitle}>Welcome Everyone</Typography>
        <Typography variant="h5" component="h4" className={classes.heardeDesc}>I develop a Website and build Schema, Based on Your Needs... </Typography>
        <Box className={classes.decorator}>
          <Typography variant="span" className={classes.devoratorText}>About us</Typography>
          <Typography variant="span" className={classes.arrow}><ArrowDownwardRoundedIcon/></Typography>
        </Box>
      </Box>
      {/* <Box className={classes.decorator}>
        <Typography variant="span" className={classes.devoratorText}>About</Typography>
      </Box> */}
    </Box>
  );
}
