import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography
        variant="h1"
        color={colors.grey[100]}
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Typography variant="h5" color="orange">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;