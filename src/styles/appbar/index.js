import { Box, Typography, styled, List } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez";

// container
export const AppBarContainer = styled(Box)({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
});

//header
export const AppBarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));
export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  postion: "fixed",
  bottom: -10,
  left: 0,
  position: "absolute",
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: "1px solid ${Colors.border}",
}));
