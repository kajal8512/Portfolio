import React from "react";
import {Box, Typography,Grid, Avatar} from '@mui/material/';
import { useStyles } from "../HeadersComponents/HeardersStyle";
import { useStyles as BodyStyle } from "../BodyComponent/BodyStyle";

export const Docorator = ({label, withIcon, Icon, styles}) => {
    const classes = useStyles();
    return(
        <Box className={classes.decorator} style={styles}>
        <Typography variant="span" className={classes.decoratorText}>{label}</Typography>
        {withIcon? (<Typography variant="span" className={classes.arrow}>{Icon}</Typography>):null}
      </Box> 
    )
}

export const Divider = ({style}) => {
  const classes = BodyStyle();
  return <span className={classes.divider} style={style}/>;
}

export const RenderSectionHeading = ({smallText, heading,description, alignCenter}) => {
    const classes = BodyStyle();
    return(
      <Box>
      {Docorator({label:smallText, withIcon:false, styles:alignCenter ?{width:"100px", margin:"10px auto"}:{}})}
      <Typography variant="h4" align={alignCenter ? "center": "left"} className={classes.sectionHeading}>{heading}</Typography>
      {Divider({style:alignCenter ? {margin:"10px auto"}:{margin:"10px 0"}})}
      <Typography variant="body1" align={alignCenter ? "center": "left"} className={classes.sectionDescription}>{description}</Typography>
      </Box>
    )
}

export const CardMedia = ({label,desc, Icon,key}) => {
const classes = BodyStyle();
return(
<Box>
  <Grid container className={classes.cardCon}  key={key}>
    <Grid item xs={3} className={classes.AvatarCont}>
      <Avatar className={classes.avatarColor}>{Icon}</Avatar>
    </Grid>
    <Grid item xs={9} className={classes.MediaText}>
      <Typography variant="body1" component='h6'>{label} </Typography>
      <Typography variant="caption" gutterBottom>{desc} </Typography>
    </Grid>
  </Grid>
  </Box>
)
}