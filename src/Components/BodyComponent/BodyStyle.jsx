import { makeStyles } from "@mui/styles";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
    section:{
        backgroundColor: Theme.colors.base1,
        width: '98.5%',
        // height: '80vh',
        height:"auto",
        padding: '10px',
        color: Theme.colors.base2,
        // border: '2px solid black', // Add this line
    },
    // common
    divider:{
        display: 'block',
        width: '75px',
        height: '4px',
        backgroundColor: "#E6A4B4",
        marginTop: '10px'
    },
    sectionDescription:{
       padding: '8px 0px',
    },
    // AboutUs
    /*divided:{
        border: '2px solid black', // Add this line
        // marginTop: '10px',
    },*/
    responsiveImg:{
        width:'100%',
        height:'auto',
        marginTop: '10px',
    },
    AvatarCont:{
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: '10px'
    },
    avatarColor: {
        color: `${Theme.colors.base2} !important`,
        backgroundColor: `${Theme.colors.primary} !important`,
      },
    cardCon:{
        padding: '25px 10px',
        fontSize: '1.2rem',
        fontFamily:'-moz-initial' 
    },
}));