import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import AppBarMobile from "./appbarMobile";
import AppBarDesktop from "./appbarDesktop";

function AppBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return <>{matches ? <AppBarMobile /> : <AppBarDesktop />}</>;
}

export default AppBar;
