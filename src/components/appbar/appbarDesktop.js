import { Search } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { AppBarContainer, AppBarHeader, MyList } from "../../styles/appbar";
import Actions from "./actions";

function AppBarDesktop({matches}) {
  return (
    <AppBarContainer>
      <AppBarHeader>Muss Shop</AppBarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact" />
        {/* <ListItemText primary="About Us" /> */}
        <ListItemButton>
          <ListItemIcon>
            <Search />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppBarContainer>

    /*
    AppBar Container
    Header
    List
    */
  );
}

export default AppBarDesktop;
