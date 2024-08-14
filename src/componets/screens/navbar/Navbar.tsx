import {
  Box,
  Typography,
  Tooltip,
  Button,
  Modal,
  IconButton,
  TextField,
} from "@mui/material";
import { navItems } from "./StaticData";
import { navbarStyles } from "./navbarStyles";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../sideBar/Sidebar";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const handleSidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
   
    setEmailError("");
  };

  const handleSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
      setEmail("")
      console.log("Form submitted with email:", email);
    }
  };
  return (
    <Box>
      <Box sx={navbarStyles.mainConatiner}>
        <Box sx={navbarStyles.flexContainer}>
          <Typography sx={navbarStyles.mainHeading}>Trulia</Typography>
          {navItems.map((item, index) => (
            <Tooltip
              PopperProps={{
                sx: {
                  "& .MuiTooltip-tooltip": {
                    backgroundColor: "white",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    color: "black",
                    fontSize: "0.875rem",
                  },
                },
              }}
              key={index}
              title={item.tooltip}
            >
              <Typography sx={navbarStyles.lableHeading}>
                {item.label}
              </Typography>
            </Tooltip>
          ))}
        </Box>
        <Box sx={navbarStyles.secondFlex}>
          <Box sx={navbarStyles.hideConatiner}>
            <Typography sx={navbarStyles.lableHeading}>Saved Homes</Typography>

            <Typography sx={navbarStyles.lableHeading}>
              Saved Searches
            </Typography>

            <Button
              variant="outlined"
              onClick={handleModalOpen}
              sx={navbarStyles.signupBtn}
            >
              Sign Up or Login in
            </Button>
          </Box>
          <MenuIcon onClick={handleSidebarOpen} sx={{ cursor: "pointer" }} />
        </Box>
        <Sidebar
          open={isSidebarOpen}
          onClose={handleSidebarClose}
          handleModalOpen={handleModalOpen}
        />
        <Modal open={isModalOpen} sx={navbarStyles.modalConatiner}>
          <Box sx={navbarStyles.postionContainer}>
            <IconButton
              onClick={handleModalClose}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
              Sign Up or Login in
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
              error={!!emailError}  // Shows error state if email is invalid
              helperText={emailError}
              sx={{ mb: 2 }}
            />

            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
              Submit
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                mt: 3,
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  height: "0.5px",
                  backgroundColor: "text.secondary",
                  marginRight: 1,
                }}
              />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                OR
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  height: "0.5px",
                  backgroundColor: "text.secondary",
                  marginLeft: 1,
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Button
                variant="contained"
                fullWidth
                startIcon={<FacebookIcon />}
              >
                Continue With FaceBook
              </Button>
              <Button variant="outlined" fullWidth startIcon={<GoogleIcon />}>
                Sign With Google
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Navbar;
