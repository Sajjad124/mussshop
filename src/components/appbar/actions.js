import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";
import {
  MyList,
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
} from "../../styles/appbar";

const Actions = ({ matches }) => {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
            <ShoppingCart />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
            <Favorite />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
            <Person />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
};

export default Actions;
