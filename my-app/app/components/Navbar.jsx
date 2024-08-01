//

"use client";
import { Avatar } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Person2Icon from "@mui/icons-material/Person2";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Navbar() {
  const [open, setOpen] = useState(false);
  const listRef = useRef(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (listRef.current && !listRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="websiteNameContainer">
          <FormatListBulletedIcon />
          <h3>SimplyPantry</h3>
        </div>
        <div>
          <List
            ref={listRef}
            sx={{
              width: 160,
              maxWidth: 240,
              bgcolor: "transparent",
              position: "relative",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClick} sx={{ padding: "0px 16px" }}>
              <Avatar sx={{ width: "20px", height: "20px" }}></Avatar>
              <ListItemText
                primary="UserName"
                sx={{ color: "white", paddingLeft: "8px" }}
              />
              {open ? (
                <ExpandLess sx={{ color: "white", fontSize: 16 }} />
              ) : (
                <ExpandMore sx={{ color: "white", fontSize: 16 }} />
              )}
            </ListItemButton>
            <Collapse
              in={open}
              timeout="auto"
              unmountOnExit
              sx={{ position: "absolute", top: "100%", left: 0, right: 0 }}
            >
              <List component="div" disablePadding>
                <ListItemButton sx={{ padding: "0px 16px" }}>
                  <ListItemIcon>
                    <Person2Icon sx={{ color: "white", fontSize: 16 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Profile"
                    sx={{ color: "white", fontSize: 12 }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ padding: "0px 16px" }}>
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: "white", fontSize: 16 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Logout"
                    sx={{ color: "white", fontSize: 12 }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </div>
      </header>
      <div className="navListContainer">
        <Link href="/">Pantry List</Link>
        <Link href="/grocery">Grocery List</Link>
      </div>
    </div>
  );
}

export default Navbar;
