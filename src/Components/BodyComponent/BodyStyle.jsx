import { makeStyles } from "@mui/styles";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
    section:{
        backgroundColor: Theme.colors.base1,
        width: '98.5%',
        height: '80vh',
        padding: '10px',
        color: Theme.colors.base2,
        // border: '2px solid black', // Add this line
    },
    // common
    divider:{
        width: '65px',
        height: '4px',
        backgroundColor: Theme.colors.primary   ,
        // margin: '10px 0'
    },
    // AboutUs
    /*divided:{
        border: '2px solid black', // Add this line
        // marginTop: '10px',
    },*/
    responsiveImg:{
        width:'100%',
        height:'500px',
        marginTop: '10px',
    }
}));