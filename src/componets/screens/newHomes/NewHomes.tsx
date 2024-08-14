import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image1 from "../../screens/newHomes/assets/imge1.webp";
import image2 from "../../screens/newHomes/assets/image2.webp";
import image3 from "../../screens/newHomes/assets/image3.webp";
import image4 from "../../screens/newHomes/assets/image4.webp";
import { newHomeStyles } from "./newHomeStyles";
const cardData = [
  {
    title: "NEW -18 HRS AGO",
    content: "$549,888",
    text: "2323 103 rd,Okaland CA 94603",
    bgImage: image1,
  },
  {
    title: "NEW -18 HRS AGO",
    content: "$549,888",
    text: "2323 103 rd,Okaland CA 94603",
    bgImage: image2,
  },
  {
    title: "NEW -18 HRS AGO",
    content: "$549,888",
    text: "2323 103 rd,Okaland CA 94603",
    bgImage: image3,
  },
  {
    title: "NEW -18 HRS AGO",
    content: "$549,888",
    text: "2323 103 rd,Okaland CA 94603",
    bgImage: image4,
  },
  {
    title: "NEW -18 HRS AGO",
    content: "$549,888",
    text: "2323 103 rd,Okaland CA 94603",
    bgImage: image1,
  },
  {
    title: "NEW -18 HRS AGO",
    content: "$549,888",
    text: "2323 103 rd,Okaland CA 94603",
    bgImage: image3,
  },
];

const ScrollableCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;

      setShowLeftArrow(scrollLeft > 0);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      checkScrollPosition();
      scrollRef.current.addEventListener("scroll", checkScrollPosition);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <>
      <Box sx={{ textAlign: "center", mt: 4, mb: 5, letterSpacing: "0.5" }}>
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          Newly listed homes in Oakland
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
        {showLeftArrow && (
          <IconButton
            onClick={scrollLeft}
            sx={{ position: "absolute", left: 0, zIndex: 1 }}
          >
            <Avatar sx={{ backgroundColor: "white" }}>
              <ArrowBackIosIcon sx={{ color: "black" }} />
            </Avatar>
          </IconButton>
        )}
        <Box ref={scrollRef} sx={newHomeStyles.refContainer}>
          {cardData.map((item, index) => (
            <Card key={index} sx={newHomeStyles.cardContainer}>
              <Box
                sx={{
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 150,

                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontSize: "12px" }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Box sx={{ mt: 2, p: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "black", fontWeight: "bold", fontSize: "16px" }}
                >
                  {item.content}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "black", fontSize: "10px" }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
        <IconButton
          onClick={scrollRight}
          sx={{ position: "absolute", right: 0, zIndex: 1 }}
        >
          <Avatar sx={{ backgroundColor: "white" }}>
            <ArrowForwardIosIcon sx={{ color: "black" }} />
          </Avatar>
        </IconButton>
      </Box>
    </>
  );
};

export default ScrollableCards;
