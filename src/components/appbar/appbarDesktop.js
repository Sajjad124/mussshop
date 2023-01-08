import { ListItemText } from "@mui/material";
import React from "react";
import { AppBarContainer, AppBarHeader, MyList } from "../../styles/appbar";

function AppBarDesktop(matches) {
  return (
    <AppBarContainer>
      <AppBarHeader>Muss Shop</AppBarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact" />
        <ListItemText primary="About Us" />
      </MyList>
    </AppBarContainer>

    /*
    AppBar Container
    Header
    List
    */
  );
}

export default AppBarDesktop;
