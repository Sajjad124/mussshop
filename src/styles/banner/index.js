import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.light_grey,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "400px",
  padding: "20px",
  [theme.breakpoints.down("md")]: {
    width: "250px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "350px",
    height: "130px",
  },
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: 420,
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "72px",
  //   marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));
