import React from 'react'
import { Box, Grid, Container, Typography, Button} from "@mui/material";
import { useStyles} from "../BodyComponent/BodyStyle";
import {RenderSectionHeading} from "../common/commonComponent";
import Images1 from '../../Images/gallery.png';
import Images2 from '../../Images/TODO.png';
import Images3 from '../../Images/MongoDB.jpg';
import Images4 from '../../Images/BMI Cal.png';
import Images5 from '../../Images/netflix.png';
import Images6 from '../../Images/GitHub_repo.png';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Portfolio() {
    const classes = useStyles();
    const PortfolioImg =[
      {
        url:Images1,
        title:"Gallery",
        link:"https://friendly-nasturtium-7c3ef4.netlify.app/"
      },
      {
        url:Images2,
        title:"TODO",
        link:"https://spectacular-cuchufli-41d05c.netlify.app/"
      },
      {
        url:Images3,
        title:"MongoDB",
        link:"https://github.com/kajal8512/mongodb_project"
      },
      {
        url:Images4,
        title:"BMI Calculator",
        link:"https://lively-beijinho-e29404.netlify.app/"
      },
      {
        url:Images5,
        title:"Netflix",
        link:"https://github.com/kajal8512/Netflix_Page"
      },
      {
        url:Images6,
        title:"GitHub Repo",
        link:"https://visionary-blancmange-e8dcb2.netlify.app/"
      },
    ]
   const handleVisit = (url) => {
    window.open(url);
  }
  return (
    <Box className={classes.sectionDark} id="Portfolio">
        <Grid container className={classes.GridCenter}>
            <Grid item xs={12} sm={8}>
                {RenderSectionHeading({smallText:"PORTFOLIO",heading:"Let's See My Work", alignCenter:true})}
            </Grid>
        </Grid>
        <ScrollAnimation animateIn="fadeIn">
          <Container maxWidth="xl">
            <Grid container spacing={2}>
                {PortfolioImg.map((item, i) => (
                    <Grid item xs={6} sm={6} lg={4} key={i}>
                      <Box className={classes.imageContainer}>
                        <img src={item.url} alt={item.title} className={classes.responsiveImg}/>
                        <Box className={classes.imageOverlay}>
                          <Typography className={classes.overlayTittle}>{item.title}</Typography>
                          <Button variant="contained" onClick={()=>handleVisit(item.link)}>Visit</Button>
                        </Box>
                      </Box>
                  </Grid>
                ))}
              </Grid>
          </Container>
        </ScrollAnimation>
    </Box>
  )
}
