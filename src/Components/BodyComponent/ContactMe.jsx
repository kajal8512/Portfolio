import { Box, Button, Grid, Hidden} from "@mui/material";
import React from "react";
import { useStyles } from "./BodyStyle";
import {RenderSectionHeading} from "../common/commonComponent"
import RenderInputText from "../common/FormComponent"
import Image from '../../Images/contactMe.jpg'
import ScrollAnimation from 'react-animate-on-scroll';


export default function ContactMe() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        Data:{
        firstName: "",
        Email: "",
        Message: "",
        },
        errors:{
            firstName: "",
            Email: "",
            Message: "",
        }
    });
    
    
    const handleChange = (e) => {
        const {Data, errors} = state;
        e.target.value.length <= 3 ? errors[e.target.name] = "Minimum 3 characters required" : errors[e.target.name] = "";
        Data[e.target.name] = e.target.value;
        setState({Data:Data, errors:errors});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       setState({Data:{firstName:"", Email:"", Message:""}, errors:{firstName:"", Email:"", Message:""}});
        // api calls to post data 
    }
    return(
        <Box className={classes.section} id="Contact">
            <ScrollAnimation animateIn="fadeIn">
                <Grid container spacing={4}>
                {/*className={classes.divided} */}
                    <Grid item sm={4}  > 
                        <Hidden smDown>
                            <Box>
                            <img src={Image} alt="Office" className={classes.responsiveImg} style={{width:"100%", height:"450px"}}/>
                            </Box>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} sm={8}>{RenderSectionHeading({smallText:"CONTACT ME",heading:"Seems To be Intersting", description:"A self taught developer who loves to codes something that will impact majority of the people in the good way!" })}
                    <br/>
                    {/* {CardMedia({label:"Web Development", desc:"I can develop a website for you, that will be responsive and user friendly", Icon:<LanguageRoundedIcon />})} */}
                    <form onSubmit={handleSubmit}>
                    <Grid container direction="row" justify="center" alignContent="center">
                        <Grid item xs={12} sm={8} style={{marginBottom:"16px"}}>
                        {RenderInputText({name:"firstName", label:"First Name", state:state, onChange:handleChange})}
                        </Grid>
                        <Grid item xs={12} sm={8} style={{marginBottom:"16px"}}>
                        {RenderInputText({name:"Email", label:"Email", state:state, onChange:handleChange})}
                        </Grid>
                        <Grid item xs={12} sm={8} style={{marginBottom:"16px"}}>
                        {RenderInputText({name:"Message", label:"Message", state:state, onChange:handleChange, multiline:true, rows:4})}
                        </Grid>
                        <Grid item xs={12} sm={4} style={{marginBottom:"10px", marginLeft:"130px"}}>
                            <Button variant="outlined" fullWidth={true} type="submit" className={classes.submitbtn}>Submit</Button>
                        </Grid>
                    </Grid>
                    </form>
                    </Grid>
                </Grid>
           </ScrollAnimation>
        </Box>
    )
}