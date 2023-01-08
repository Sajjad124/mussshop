import { Menu, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { AppBarContainer, AppBarHeader } from "../../styles/appbar";
import Actions from "./actions";

function AppBarMobile({ matches }) {
  return (
    <AppBarContainer>
      <IconButton>
        <Menu />
      </IconButton>
      <AppBarHeader textAlign={"center"} variant="h4">
        Muss Shop
      </AppBarHeader>
      <IconButton>
        <Search />
      </IconButton>
      {/* <Actions matches={matches} /> */}
    </AppBarContainer>
  );
}

export default AppBarMobile;
