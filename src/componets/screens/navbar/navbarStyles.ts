import { SxProps } from "@mui/material";

export const navbarStyles = {
  navContainer: {
    display: "flex",
  },
  mainConatiner: {
    width: "97%",
    display: "flex",
    top: 0,
    zIndex: 1100,
    position: "fixed",
    justifyContent: "space-between",

    backgroundColor: "white",
  },
  modalFlex:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBgContainer:{
    width: 400,
    bgcolor: "background.paper",
    p: 4,
    borderRadius: 2,
    boxShadow: 24,
    position: "relative",
  },
  flexContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  postionContainer: {
    width: 400,
    bgcolor: "background.paper",
    p: 4,
    borderRadius: 2,
    boxShadow: 24,
    position: "relative",
  },
  modalConatiner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hideConatiner: {
    display: { xs: "none", md: "flex" },
    gap: "10px",
    alignItems: "center",
    
  },
  secondFlex: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  lableHeading: {
    fontSize: "15px",
    fontWeight: "bold",
    fontFamily: "Open Sans",
    color: "black",
    padding: "0.5rem",
    "&:hover": {
      color: "white",
      fontFamily: "Open Sans",
      bgcolor: "#493F63",
      borderRadius: "10px",
      padding: "0.5rem",
    },
  },
  mainHeading: {
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Open Sans",
    color: "black",
    // padding:"0.5rem",
  },
  signupBtn: {
    fontSize: "15px",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    color: "black",
    textTransform: "capitalize",
    padding: "0.5rem",
    borderColor: "#EDEDED",

    borderRadius: "10px",

    "&:hover": {
      color: "black",
      fontFamily: "Open Sans",
      bgcolor: "#EDEDED",
      borderColor: "#EDEDED",
      borderRadius: "10px",
      textTransform: "capitalize",
      padding: "0.5rem",
    },
  },
  items: {
    color: "black",
    fontFamily: "Open Sans",
    fontSize: "14px",
    // p:1.5,

    "&:hover": {
      color: "black",
      fontFamily: "Open Sans",
      // p:1.5,
      textDecoration: "underline",
      bgcolor: "#EDEDED",
    },
  },
} satisfies Record<string, SxProps>;
