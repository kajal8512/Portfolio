import { Box, Grid, Hidden} from "@mui/material";
import React from "react";
import { useStyles } from "./BodyStyle";
import {RenderSectionHeading,CardMedia} from "../common/commonComponent"
import Image from '../../Images/Office_img.png'
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ScrollAnimation from 'react-animate-on-scroll';
import ApiIcon from '@mui/icons-material/Api';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import KeyOffIcon from '@mui/icons-material/KeyOff';





export default function AboutUs() {
    const classes = useStyles();
    const cardMediaData =[
        {label:"Backend Developer", desc:"I've devised a robust schema to implement a new feature on the website, ensuring its seamless integration and functionality.", Icon:<ApiIcon />},
        {label:"Web Developer", desc:"I am building engaging user interfaces and dynamic web applications. With my expertise, I can elevate your website's design, functionality.", Icon:<KeyOffIcon />},
        {label:"Node js Developer", desc:"I can help enhance your website's performance, bolster security measures, implement new features, bugs, and provide ongoing technical support.", Icon:<LanguageRoundedIcon />},
        {label:"QA Developer", desc:"As a QA Developer, I meticulously ensure the functionality and integrity of every line of code before it's merged into the main project.", Icon:<AutoGraphIcon />},
    ]
    return(
        <Box className={classes.section} id="About">
            <ScrollAnimation animateIn="fadeIn">
                <Grid container spacing={2}>
                    <Grid item sm={5}  > 
                        <Hidden smDown>
                            <Box>
                                <img src={Image} alt="Office" className={classes.responsiveImg2}/>
                            </Box>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} sm={7}>{RenderSectionHeading({smallText:"ABOUT ME",heading:"Hello I'm Kajal Yadav", description:"I'm a self-taught developer dedicated to creating positive impacts through coding solutions that benefit many." })}
                    <br/>
                    <Grid container>
                    {cardMediaData.map((data, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            {CardMedia ({label:data.label, desc:data.desc, Icon:data.Icon })}
                        </Grid>
                    ))}
                    </Grid>
                    </Grid>
            </Grid>
            </ScrollAnimation>
        </Box>
    )
}