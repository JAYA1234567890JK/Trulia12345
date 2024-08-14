import { Box, Typography, Tooltip } from "@mui/material";
import React from "react";
import { navbarStyles } from "./navbarStyles";

export const navItems = [
  {
    label: "Buy",
    tooltip: (
      <React.Fragment>
        <Typography sx={{ fontWeight: 'bold' }}>Omaha</Typography>
        <br />
        <Typography variant="body2" sx= {navbarStyles.items}>Homes for sale</Typography>
        <br />
        <Typography sx= {navbarStyles.items}>Open Houses</Typography>
        <br />
        <Typography variant="body2" sx= {navbarStyles.items}>New Homes</Typography>
        <br />
        <Typography variant="body2" sx= {navbarStyles.items}>Recently Sold</Typography>
      </React.Fragment>
    ),
  },
  {
    label: "Rent",
    tooltip: (
      <React.Fragment>
        <Typography sx={{ fontWeight: 'bold' }}>Omaha</Typography>
        <br />
        <Typography variant="body2" sx= {navbarStyles.items}>Homes for sale</Typography>
        <br />
        <Typography sx= {navbarStyles.items}>Open Houses</Typography>
        <br />
        <Typography variant="body2" sx= {navbarStyles.items}>New Homes</Typography>
        <br />
        <Typography variant="body2" sx= {navbarStyles.items}>Recently Sold</Typography>
      </React.Fragment>
    ), 
  },
  {
    label: "Mortgage",
    tooltip: (
      <React.Fragment>
        <Typography sx={{ fontWeight: 'bold' }}>Omaha</Typography>
        <br />
        <Typography variant="body2" sx= {navbarStyles.items}>Homes for sale</Typography>
        <br />
        <Typography sx= {navbarStyles.items}>Open Houses</Typography>
        <br />
        <Typography variant="body2" sx= {navbarStyles.items}>New Homes</Typography>
        <br />
        <Typography variant="body2" sx= {navbarStyles.items}>Recently Sold</Typography>
      </React.Fragment>
    ), 
  },
];


