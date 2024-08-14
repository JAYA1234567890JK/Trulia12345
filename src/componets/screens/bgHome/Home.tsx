import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { homeStyles } from "./homestyles";
const data = ["Buy", "Rent", "Sold"];
const Home = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>("Buy");
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Box sx={homeStyles.bgContainer}>
        <Typography sx={homeStyles.discovertext}>
          Discover a place you'll love to live
        </Typography>
        <Box sx = {homeStyles.secondContainer}
       
        >
          {data.map((item, index) => (
            <Typography
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
              key={index}
              sx={{
                p: 1.5,
                fontFamily:"Open Sans",
                borderRadius: "10px",
                cursor: "pointer",
               
                transition: "background-color 0.3s, color 0.3s",
                color:"black",
                backgroundColor: hoveredItem === item || (item === "Buy" && hoveredItem === null) ? "white" : "transparent",
                "&:hover": {
                  color: (item === "Buy" && hoveredItem === null) ? "white" : "#493F63",

                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        <Box sx={homeStyles.inputBox}>
          <Box
            component={"input"}
            sx = {homeStyles.inputSytles}
            
          />
          <Box sx = {homeStyles.searchIconContainer}
            
          >
            <SearchIcon sx={{ color: "white" }} fontSize="large" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
