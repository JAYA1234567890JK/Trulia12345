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
import { explorestyles } from "./exploreStyles";

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
        left: 400,
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
      <Box sx={explorestyles.headingContainer}>
        <Typography sx={explorestyles.heading}>
          Explore homes on Trulia
        </Typography>
        <Typography sx={explorestyles.cardText}>
          Take a deep dive and browse homes for sale, original neighborhood
          photos, resident reviews and local insights to find what is right for
          you
        </Typography>
      </Box>
      <Box sx={explorestyles.postionContainer}>
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
        <Box ref={scrollRef} sx={explorestyles.scroolRefConatiner}>
          <Card sx={{ minWidth: 250, height: 310 }}>
            <Box sx={explorestyles.card1}>
              <Typography variant="h6" sx={explorestyles.cities}>
                Atlanta,GA
              </Typography>
            </Box>
          </Card>
          <Box  sx = {explorestyles.flexContainer}>
            <Card
              sx={{ minWidth: 250, height: 150, backgroundColor: "#C3C2FF" }}
            >
              <CardContent>
                <Typography variant="h6" sx={explorestyles.largetext}>
                  Trulia User San Francisco Resident I just moved to the
                  neighborhood 2 years ago and love it! It's a great mix of
                  families, seniors and.....
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 250, height: 150 }}>
              <Box sx={explorestyles.card2}>
                <Typography variant="h6" sx={explorestyles.cities}>
                  Austian,TX
                </Typography>
              </Box>
            </Card>
          </Box>
          <Box sx={explorestyles.flexContainer}>
            <Card sx={{ minWidth: 250, height: 150 }}>
              <Box sx={explorestyles.card3}>
                <Typography variant="h6" sx={explorestyles.cities}>
                  Scottsde,AZ
                </Typography>
              </Box>
            </Card>
            <Card sx={{ minWidth: 250, height: 150 }}>
              <Box sx={explorestyles.card4}>
                <Typography variant="h6" sx={explorestyles.cities}>
                  Okaland,CA
                </Typography>
              </Box>
            </Card>
          </Box>
          <Card sx={{ minWidth: 250, height: 310 }}>
            <Box sx={explorestyles.card5}>
              <Typography variant="h6" sx={explorestyles.cities}>
                Sandy SPring,CA
              </Typography>
            </Box>
          </Card>
          <Box sx={explorestyles.flexContainer}>
            <Card sx={{ minWidth: 250, height: 150 }}>
              <Box sx={explorestyles.card1}>
                <Typography variant="h6" sx={explorestyles.cities}>
                  Okaland,CA
                </Typography>
              </Box>
            </Card>
            <Card
              sx={{ minWidth: 250, height: 150, backgroundColor: "#63AB3F" }}
            >
              <CardContent>
                <Typography variant="h6" sx={explorestyles.largetext}>
                  Trulia User San Francisco Resident I just moved to the
                  neighborhood 2 years ago and love it! It's a great mix of
                  families, seniors and.....
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={explorestyles.flexContainer}>
            <Card sx={{ minWidth: 250, height: 150 }}>
              <Box sx={explorestyles.card6}>
                <Typography variant="h6" sx={explorestyles.cities}>
                  Sandy SPring,CA
                </Typography>
              </Box>
            </Card>
            <Card sx={{ minWidth: 250, height: 150 }}>
              <Box sx={explorestyles.card7}>
                <Typography variant="h6" sx={explorestyles.cities}>
                  Sandy SPring,CA
                </Typography>
              </Box>
            </Card>
          </Box>
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
