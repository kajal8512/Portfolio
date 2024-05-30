// import { makeStyles } from "@material-ui/core/styles";
import { makeStyles } from '@mui/styles';
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
    sectionDark:{
        backgroundColor: Theme.colors.primary1,
        width: '98.5%',
        // height: '80vh',
        height:"auto",
        padding: '10px',
        color: Theme.colors.base2,
        // border: '2px solid black', // Add this line
    },
    GridCenter:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '2px solid black', // Add this line
    },
    // common
    divider:{
        display: 'block',
        width: '75px',
        height: '4px',
        backgroundColor: "#E6A4B4",
        // marginTop: '10px'
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
        marginTop: '20px',
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

    imageContainer:{
        position: 'relative',
        '&:hover $imageOverlay' : {
            opacity: '1',
        },
        // border: '2px solid black', // Add this line
    },
    imageOverlay:{
        position: 'absolute',
        width:'100%',
        height: '100%',
        top: '0',
        left: '0',
        backgroundColor: Theme.colors.primary,
        color: Theme.colors.base2,
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0',
        transition: '0.7s ease',
    },
    overlayTittle:{
        fontSize: '13rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.5rem',
        },
    },

    submitbtn:{
        color: `${Theme.colors.base2} !important`,
        backgroundColor: `${Theme.colors.primary} !important`,
        '&:hover': {
            backgroundColor: `${Theme.colors.primary1} !important`,
        },
    },
   footerContainer:{
        backgroundColor: Theme.colors.primary1,
        color: Theme.colors.base2,
        padding: "10px 0px",
        position: 'relative', 
    },
    iconButton:{
        position: 'absolute !important', 
        right: '20px',
        top: '-24px',
        color:  `${Theme.colors.base2} !important`,
        backgroundColor:`${Theme.colors.primary} !important`,
    }
}));