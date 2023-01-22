import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src="images/banner/new-bag.jpg" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h5">New Bag</BannerTitle>
        <BannerDescription variant="subtitle">
          <Typography>This is a new Bag</Typography>
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
