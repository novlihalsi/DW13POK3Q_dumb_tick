import React from "react";

import Typography from "@material-ui/core/Typography";
// import ModalLogin from '../Login';
// import Fab from '@material-ui/core/Fab';

import IconButton from "@material-ui/core/IconButton";

import AccountCircle from "@material-ui/icons/AccountCircle";

import { Link } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar } from "@material-ui/core";

function ProfilButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();

    // props.dispatch(login(false));
  };

  return (
    <div>
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button> */}

      <IconButton
        color="inherit"
        aria-controls="simple-menu"
        aria-hanspopup="true"
        onClick={handleClick}
      >
        <Avatar src={localStorage.getItem("image")} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ marginTop: 40 }}
      >
        <MenuItem>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, marginRight: 8, marginTop: 5 }}>
              <Avatar src={localStorage.getItem("image")} />
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                {localStorage.getItem("fullname")}
              </Typography>

              <Typography variant="caption">
                @{localStorage.getItem("username")}
              </Typography>
            </div>
          </div>
        </MenuItem>
        <Link
          to={"/profile/" + localStorage.getItem("id")}
          style={{ textDecoration: "none" }}
        >
          <MenuItem style={{ color: "green" }}>Profile</MenuItem>
        </Link>

        <hr />
        <Link
          to={"/ticket/" + localStorage.getItem("id")}
          style={{ textDecoration: "none" }}
        >
          <MenuItem>My Ticket</MenuItem>
        </Link>

        <Link to="/payment" style={{ textDecoration: "none" }}>
          <MenuItem>Payment</MenuItem>
        </Link>

        <Link to="/addevent" style={{ textDecoration: "none" }}>
          <MenuItem>Add Event</MenuItem>
        </Link>

        <hr />

        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default ProfilButton;
