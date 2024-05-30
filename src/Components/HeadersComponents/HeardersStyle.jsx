// import { makeStyles } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import Image from '../../Images/profile-img1.jpg';
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme)=>({
    HeardeWraper: {
      width: '100%',
      height: '92vh',
      background: `linear-gradient(to bottom right, rgba(153, 87, 96, 0.5), rgba(204, 188, 190, 0.5)), url(${Image})`,   
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    HeardeContaier:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      color:Theme.colors.base2,
      padding: '1.5rem',
      width: '80%',
      height:'100%',
      fontFamily:"roboto",
      left:'2rem',
    },
    heardeTitle:{
      fontSize: '3rem',
    },
    heardeDesc:{
      fontSize: '1.5rem !important',
    },
    // decorator
    decorator:{
      display:'flex',
      fontWeight:'bolder',
      fontFamily:"roboto",
      position:'relative',
      marginTop:'1.5rem',
      left:'-0.5rem',
      '&:before':{
        content:'""',
        width:'38px',
        height:'38px',
        backgroundColor:Theme.colors.primary,
        borderRadius:'50%',
        margin:'0.5rem',
      },
    },
    decoratorText:{
      lineHeight:'53px',
      position:'absolute',
      left:'30px',
    },

    arrow:{
      lineHeight:'53px',
      position:'absolute',
      left:'98px',
      marginTop:'2px',
      animationName:'upDown',
      animationDuration:'0.7s',
      animationIterationCount:'infinite',
    },
    // creating animation
    '@global': {
      '@keyframes upDown': {
        '0%': {
          paddingTop: '0px',
          transform: 'scale(0)',
        },
        '100%': {
          paddingTop: '10px',
          transform: 'scale(1)',
        },
      },
    },
    // Navbar
    navbar1:{
      backgroundColor:Theme.colors.base1,
      color:Theme.colors.base2,
      fontFamily:"roboto",
    },
  toolbar:{
    display:'flex',
    justifyContent:'space-between',
  },

  // drawer
  drawerContainer:{
    width:'250px',
    height:'100vh',
    backgroundColor:Theme.colors.primary1,
    color:Theme.colors.base2,
  },
  listItem:{
    color:Theme.colors.base2,
  }
}));
