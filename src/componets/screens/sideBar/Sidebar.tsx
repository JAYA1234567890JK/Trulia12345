import React from 'react';
import { Drawer, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface SidebarProps {
    open: boolean;
    onClose: () => void;
    handleModalOpen:() =>void
  }

const Sidebar: React.FC<SidebarProps> = ({ open, onClose,handleModalOpen }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          width: 250,
          backgroundColor: '#333333',
          color: 'black',
          padding: '20px',
          zIndex: 1200, 
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', }}>
        <IconButton onClick={onClose} sx = {{color:"white"}}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx = {{color:"white",display:"flex",flexDirection:"column",gap:5,justifyContent:"center",cursor:"pointer"}}>
      <Typography onClick = {handleModalOpen}>Sign up or Login</Typography>
      <Typography>Buy</Typography>
      <Typography>Rent</Typography>
      <Typography>Mortage</Typography>
      <Typography>Loacal Info</Typography>
      <Typography>Additionaln Resources</Typography>
      </Box>




    </Drawer>
  );
};

export default Sidebar;
