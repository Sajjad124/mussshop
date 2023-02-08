import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme/index";

export const BannerContainer = styled(Box)(({ theme }) => ({
  background: Colors.secondary,
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  [theme.breakpoints.down("sm")]: {},
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  [theme.breakpoints.down("md")]: { width: "100%" },
  [theme.breakpoints.down("sm")]: { width: "100%" },
}));

export const BannerContent = styled(Box)(() => ({
  alignSelf: "center",
  margin: "auto",
  padding: "2rem",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {},
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("md")]: {},
}));
