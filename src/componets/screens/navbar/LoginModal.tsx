import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { navbarStyles } from "./navbarStyles";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}
const LoginModal: React.FC<ModalProps> = ({ open, onClose }) => {
  return (
    <Box>
      <Modal open={open} onClose={onClose} sx={navbarStyles.modalFlex}>
        <Box sx={navbarStyles.modalBgContainer}>
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Sign Up
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
export default LoginModal;
