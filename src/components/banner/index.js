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
        <BannerTitle variant="h2">New Bag</BannerTitle>
        {/* <BannerDescription variant="subtitle">
          <Typography>
            sakjgfajshgfkhasgfjhasgfkjgaslkjgfasjkfhss
            jsdkjfvjdskjdsfjvdjfkfhjshbdvfsvfdjfvbfdfsakjgfajshgfkhasgfjhasgfkj
          </Typography>
        </BannerDescription> */}
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
