import { Box, Button, Typography } from "@mui/material";
import React from "react";

const dummy = [
  {
    image:
      "https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg",
    title: "Buy a home",
    description:
      "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    buttonText: "Find More",
  },
  {
    image:
      "https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg",

    title: "Reant a home",
    description:
      "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    buttonText: "Find More",
  },
  {
    image:
      "https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg",

    title: "See neighborhoods",
    description:
      "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    buttonText: "Find More",
  },
];

const HelpSection = () => {
  return (
    <Box sx= {{mt:4}}>
      <Typography sx={{ fontSize: "30px", fontWeight: "bold",textAlign:"center" }}>
        See how Trulia can help
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        {dummy.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 200,
            }}
          >
            <Box
              component={"img"}
              src={item.image}
              sx={{ height: "100px", width: "100px" }}
            />
            <Typography
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "Open Sans",
              }}
            >
              {item.title}
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              {item.description}
            </Typography>
            <Button
              sx={{
                p: 1,
                backgroundColor: "#493F63",
                width: "200px",
                mt: 3,
                borderRadius:'10px',
                color: "white",
                "&:hover": {
                  border: "1px solid #493F63 ",
                  color:"black",
                borderRadius:'10px',

                },
              }}
            >
              {item.buttonText}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default HelpSection;
