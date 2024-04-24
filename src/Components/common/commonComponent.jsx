import React from "react";
import {Box, Typography} from '@mui/material/';
import { useStyles } from "../HeadersComponents/HeardersStyle";
import { useStyles as BodyStyle } from "../BodyComponent/BodyStyle"

export const Docorator = ({label, withIcon, Icon, styles}) => {
    const classes = useStyles();
    return(
        <Box className={classes.decorator} style={styles}>
        <Typography variant="span" className={classes.decoratorText}>{label}</Typography>
        {withIcon? (<Typography variant="span" className={classes.arrow}>{Icon}</Typography>):null}
      </Box> 
    )
}

export const Divider = () => {
  const classes = BodyStyle();
  return(
    <span className={classes.divider}></span>
  )
}

export const RenderSectionHeading = ({smallText, heading,description, alignCenter}) => {
    const classes = BodyStyle();
    return(
      <Box>
      {Docorator({label:smallText, withIcon:false, styles:alignCenter ?{width:"100px", margin:"10px auto"}:{}})}
      <Typography variant="h4" align={alignCenter ? "center": "left"} className={classes.sectionHeading}>{heading}</Typography>
      {Divider()}
      <Typography variant="body1" align={alignCenter ? "center": "left"} className={classes.sectionDescription}>{description}</Typography>
      </Box>
    )
}