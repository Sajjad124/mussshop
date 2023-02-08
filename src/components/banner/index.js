import React from "react";
import { Typography } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src="images/banner/new-bag.jpg" />
      <BannerContent>
        <Typography variant="h4">Huge Collection</Typography>
        <BannerTitle variant="h5">New Bag</BannerTitle>
        <BannerDescription variant="subtitle">
          <Typography>This is a new Bag</Typography>
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
