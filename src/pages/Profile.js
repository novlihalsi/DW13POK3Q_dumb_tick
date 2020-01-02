import React, { Component } from "react";
import Header from "../component/header/Header";
import Typography from "@material-ui/core/Typography";
import { Container, Grid, Paper, Avatar, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { getFavorite } from "../_actions/favorite";
import Footer from "../component/Footer";

class Profile extends Component {
  componentDidMount() {
    const id = localStorage.getItem("id");
    this.props.dispatch(getFavorite(id));
  }
  render() {
    const { favorite } = this.props.favorite;

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

const mapStateToProps = state => {
  return {
    favorite: state.favorite
  };
};

export default connect(mapStateToProps)(Profile);
