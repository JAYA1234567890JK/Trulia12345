import { SxProps } from "@mui/material";
import homeImage from "../exploreHomes/assets/homeImage.webp";
import image5 from "../exploreHomes/assets/image5.webp";
import image7 from "../exploreHomes/assets/image7.webp";
import image8 from "../exploreHomes/assets/staticmap.png";
import image6 from "../exploreHomes/assets/image6.webp";
export const explorestyles = {
  card1: {
    backgroundImage: `url(${homeImage})`,
    // width:"100%",

    objectFit: "contain",
    height: "50vh",
    backgroundSize: "cover",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card2: {
    backgroundImage: `url(${image5})`,
    // width:"100%",

    objectFit: "contain",
    height: "50vh",
    backgroundSize: "cover",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card3: {
    backgroundImage: `url(${image7})`,
    // width:"100%",

    objectFit: "contain",
    height: "50vh",
    backgroundSize: "cover",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card4: {
    backgroundImage: `url(${image8})`,
    // width:"100%",

    objectFit: "contain",
    height: "50vh",
    backgroundSize: "cover",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card5: {
    backgroundImage: `url(${homeImage})`,

    objectFit: "contain",
    height: "50vh",
    backgroundSize: "cover",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card6: {
    backgroundImage: `url(${homeImage})`,

    objectFit: "contain",
    height: "50vh",
    backgroundSize: "cover",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card7: {
    backgroundImage: `url(${image6})`,

    objectFit: "contain",
    height: "50vh",
    backgroundSize: "cover",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  headingContainer: {
    mt: 5,
    mb: 6,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    letterSpacing: "1px",
    color: "black",
    fontWeight: "bold",
    fontSize: "30px",
  },
  cities: {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    fontFamily: "Open Sans",
  },
  postionContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  scroolRefConatiner: {
    display: "flex",
    overflowX: "auto",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
    gap: 2,
    p: 1,
    width: "100%",
  },
  cardText: {
    width: { lg: "500px", xs: "300px" },
    fontSize: { lg: "16px", xs: "13px" },
    textAlign: "center",
    mt: 2,
    letterSpacing: "0.5px",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  largetext: {
    color: "white",
    fontSize: "16px",
    fontFamily: "Open Sans",
  },
} satisfies Record<string, SxProps>;
