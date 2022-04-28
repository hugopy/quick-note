import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Avatar
} from "@mui/material";
import { MdHome } from "react-icons/md";
import { FaTrash, FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu(props) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("/home");
  const [isOpen, setOpen] = useState(false);

  function goTo(pathName) {
    navigate(pathName);
    setCurrentPage(pathName);
  }

  const pages = [
    {
      pathName: "/home",
      icon: <MdHome />,
      text: "Home",
      iconSize: "1.5em",
    },

    {
      pathName: "/profile",
      icon: <FaUser />,
      text: "Profile",
      iconSize: "1.4em",
    },

    {
      pathName: "/",
      icon: <FaTrash />,
      text: "Arquivo",
      iconSize: "1.4em",
    },
  ];
  
  return (
      <>
      <AppBar position="static">
        <Toolbar className="toolbar" style={{backgroundColor: "white"}}>
          <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }} onClick={() => {setOpen(true)}}>
              <FiMenu/>
          </IconButton>
          <div className="userInfoContainer">
            <p className="userName">Hugo</p>
            <Avatar alt="Remy Sharp" src="/images/pfp.jpg" />
          </div>
        </Toolbar>
      </AppBar>
      
      {props.children}

      <Drawer open={isOpen} onClose={() => {setOpen(false)}}>
        <List className="drawer">
          {pages.map((pages) => {
            return (
              <ListItem
                button
                onClick={() => {
                  goTo(pages.pathName);
                }}
                selected={currentPage === pages.pathName}
              >
                <IconContext.Provider
                  value={{ color: "#343434", size: pages.iconSize }}
                >
                  {pages.icon}
                </IconContext.Provider>

                <ListItemText className="listItemText">
                  <Typography>{pages.text}</Typography>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

    </>
  );
}

export default Menu;
