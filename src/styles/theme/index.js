import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#4d073c",
  secondary: "#4d073c",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#ff5722",
  warning: "#FFC107",
  dark: "0e1b20",
  light: "#aaa",
  muted: "@abafb3",
  border: "#000FE1",
  inverse: "#2F3D4A",
  shaft: "#333",

  dim_grey: "#696969",
  dov_grey: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_grey: "rgb(230,230,230)",

  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});
export default theme;
