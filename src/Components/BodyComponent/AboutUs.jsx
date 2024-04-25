import { Box, Grid, Hidden} from "@mui/material";
import React from "react";
import { useStyles } from "./BodyStyle";
import {RenderSectionHeading,CardMedia} from "../common/commonComponent"
import Image from '../../Images/Office_img.png'
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';


export default function AboutUs() {
    const classes = useStyles();
    const cardMediaData =[
        {label:"Web Development", desc:"I can develop a website for you, that will be responsive and user friendly", Icon:<LanguageRoundedIcon />},
        {label:"Web Development", desc:"I can develop a website for you, that will be responsive and user friendly", Icon:<LanguageRoundedIcon />},
        {label:"Web Development", desc:"I can develop a website for you, that will be responsive and user friendly", Icon:<LanguageRoundedIcon />},
        {label:"Web Development", desc:"I can develop a website for you, that will be responsive and user friendly", Icon:<LanguageRoundedIcon />},
    ]
    return(
        <Box className={classes.section}>
            <Grid container spacing={2}>
            {/*className={classes.divided} */}
                <Grid item sm={5}  > 
                    <Hidden smDown>
                        <Box>
                            <img src={Image} alt="Office" className={classes.responsiveImg}/>
                        </Box>
                    </Hidden>
                </Grid>
                <Grid item xs={12} sm={7}>{RenderSectionHeading({smallText:"ABOUT ME",heading:"Hello I'm Kajal Yadav", description:"A self taught developer who loves to codes something that will impact majority of the people in the good way!" })}
                <br/>
                {/* {CardMedia({label:"Web Development", desc:"I can develop a website for you, that will be responsive and user friendly", Icon:<LanguageRoundedIcon />})} */}
                <Grid container>
                {cardMediaData.map((data, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        {CardMedia ({label:data.label, desc:data.desc, Icon:data.Icon })}
                    </Grid>
                ))}
                </Grid>
                </Grid>
           </Grid>
        </Box>
    )
}