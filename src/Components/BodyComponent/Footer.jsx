import React from 'react'
import {Box, Typography, IconButton} from '@material-ui/core';
import { useStyles } from "./BodyStyle";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link}  from "react-scroll";



export default function Footer() {
    const classes = useStyles();
    const data = new Date();
  return (
   <Box className={classes.footerContainer} id="Footer">
      <Link
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
      >
          <IconButton className={classes.iconButton}>
              <ArrowUpwardIcon className={classes.icon}/>    
          </IconButton>
      </Link>
    <Typography variant="body1" component="h4" align='center' className={classes.footerText} color='inherit'>Developed and designed with <FavoriteIcon style={{color:"red"}}/>by GreatCoder, All Right Reserved ©  {data.getFullYear()}</Typography>
    </Box>
  )
}
