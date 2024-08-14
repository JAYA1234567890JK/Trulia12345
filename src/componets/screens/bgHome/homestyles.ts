import { SxProps } from "@mui/material";
import bgImage from "../bgHome/assets/bgImage.webp"
export const homeStyles = {
   bgContainer:{
      height:"70vh",
      backgroundImage:`url(${bgImage})`,
      backgroundRepeat:"no-repeat",
      borderRadius:"15px",
      objectFit:"contain",
      backgroundSize:"cover",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
   },
   secondContainer:{
      display: "flex",
      bgcolor: "rgba(120, 120, 120, 0.5)",
      gap: "25px",
      width: "220px",
      justifyContent: "center",
      borderRadius: "10px",
   },
   searchIconContainer:{
      bgcolor: "#E00F00",
      p: 1.1,
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
   },
   inputSytles:{
      width: {lg:"550px",sm:"350px",xs:"300px"},
      height: "55px",
      border: "none",
      borderBottomLeftRadius: "5px",
      borderTopLeftRadius: "5px",
   },
   discovertext:{
      color:"white",
      width:"450px",
      fontFamily:"Open Sans",
      fontSize:{lg:'50px',xs:"40px"},
      fontWeight:"bold",
      textAlign:"center",
      textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"
   },
   inputBox:{
    mt:2,
    display:'flex',
    alignItems:"center",
   
   }
}satisfies Record<string,SxProps>