import React from 'react'
import { Box, Grid, Container, Typography, Button} from "@mui/material";
import { useStyles} from "../BodyComponent/BodyStyle";
import {RenderSectionHeading} from "../common/commonComponent";
import Images1 from '../../Images/sc1.png';
import Images2 from '../../Images/sc2.png';
import Images3 from '../../Images/sc3.png';
import Images4 from '../../Images/sc4.png';
import Images5 from '../../Images/sc5.png';
import Images6 from '../../Images/sc6.png';

export default function Portfolio() {
    const classes = useStyles();
    const PortfolioImg =[
      {
        url:Images1,
        title:"Portfolio",
        link:""
      },
      {
        url:Images2,
        title:"Portfolio",
        link:""
      },
      {
        url:Images3,
        title:"Portfolio",
        link:""
      },
      {
        url:Images4,
        title:"Portfolio",
        link:""
      },
      {
        url:Images5,
        title:"Portfolio",
        link:""
      },
      {
        url:Images6,
        title:"Portfolio",
        link:""
      },
    ]
  return (
    <Box className={classes.sectionDark} id="Portfolio">
        <Grid container className={classes.GridCenter}>
            <Grid item xs={12} sm={8}>
                {RenderSectionHeading({smallText:"PORTFOLIO",heading:"Let's See My Work", alignCenter:true})}
            </Grid>
        </Grid>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
              {PortfolioImg.map((item, i) => (
                  <Grid item xs={6} sm={6} lg={4} key={i}>
                    <Box className={classes.imageContainer}>
                      <img src={item.url} alt={item.title} className={classes.responsiveImg}/>
                      <Box className={classes.imageOverlay}>
                        <Typography className={classes.overlayTittle}>{item.title}</Typography>
                        <Button variant="contained">Visit</Button>
                      </Box>
                    </Box>
                </Grid>
              ))}
            </Grid>
       </Container>
    </Box>
  )
}
