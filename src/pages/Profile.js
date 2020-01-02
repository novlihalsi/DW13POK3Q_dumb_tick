import React, { Component } from "react";
import Header from "../component/header/Header";
import Typography from "@material-ui/core/Typography";
import { Container, Grid, Paper, Avatar, Button } from "@material-ui/core";
import axios from "axios";
import NumberFormat from "react-number-format";

import Footer from "../component/Footer";

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container maxWidth="lg" style={{ marginBottom: 40 }}>
          <div style={{ marginBottom: 30, marginTop: 40 }}>
            <Typography
              variant="h4"
              style={{ color: "#EF233C", fontWeight: "bold" }}
            >
              My Profile
            </Typography>
          </div>

          <Grid container alignItems="center" style={{ padding: 50 }}>
            <Grid item xs={10} md={10}>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="h4"
                  style={{ marginRight: 80, textTransform: "capitalize" }}
                >
                  {localStorage.getItem("fullname")}
                </Typography>
                <Button variant="outlined" size="small" color="secondary">
                  Edit Profile
                </Button>
              </div>
              <div>
                <Typography>{localStorage.getItem("email")}</Typography>
              </div>
            </Grid>
            <Grid item xs={2} md={2}>
              <Avatar
                src={localStorage.getItem("image")}
                style={{ height: 150, width: 150 }}
              ></Avatar>
            </Grid>
          </Grid>
          <div style={{ marginBottom: 30, marginTop: 40 }}>
            <Typography
              variant="h4"
              style={{ color: "#EF233C", fontWeight: "bold" }}
            >
              Favorite
            </Typography>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Profile;
