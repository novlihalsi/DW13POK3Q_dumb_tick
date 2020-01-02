import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ProfilButton from "./ProfileButton";
import { Container, Grid } from "@material-ui/core";
import Login from "../../pages/Signin";
import Signup from "../../pages/Signup";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // marginBottom: "20px"
  },
  appbar: {
    backgroundColor: "#EF233C"
  },

  title: {
    flexGrow: 1,
    textDecoration: "none",
    "&:visited": { color: "white" }
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

function ButtonAppBar() {
  const classes = useStyles();
  // console.log(login);
  const login = localStorage.getItem("isLogin");

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        {/* <React.Fragment> */}
        <Container maxWidth="lg">
          <Toolbar>
            <Link to="/" className={classes.title}>
              <Typography
                variant="h4"
                className={classes.title}
                style={{ fontWeight: "bold" }}
              >
                Halsi Ticket
              </Typography>
            </Link>
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div> */}

            {/* <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            {/* <ModalLogin/> */}
            {localStorage.getItem("token") ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <div style={{ marginRight: 20 }}>
                  <Typography>{localStorage.getItem("username")}</Typography>
                </div>
                <div>
                  <ProfilButton />
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ marginRight: 20 }}>
                  <Login />
                </div>
                <div>
                  <Signup />
                </div>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {/* </React.Fragment> */}
    </div>
  );
}

export default ButtonAppBar;
