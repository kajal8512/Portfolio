import { Box, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "./BodyStyle";
import {RenderSectionHeading} from "../common/commonComponent"
import Image from '../../Images/Office_img.png'

export default function AboutUs() {
    const classes = useStyles();
    return(
        <Box className={classes.section}>
            <Grid container spacing={2}>
                <Grid item sm={5} className={classes.divided}>
                    <img src={Image} alt="Office" className={classes.responsiveImg}/>
                </Grid>
                <Grid item xs={12} sm={7}>{RenderSectionHeading({smallText:"About Me",heading:"Hello I'm Kajal Yadav", description:"Experienced Backend Developer | Innovative Solutions | Driving Efficiency" })}</Grid>
           </Grid>
        </Box>
    )
}