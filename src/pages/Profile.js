import React, { Component } from "react";
import Header from "../component/header/Header";
import Typography from "@material-ui/core/Typography";
import {
  Container,
  Grid,
  Paper,
  Avatar,
  Button,
  TextField
} from "@material-ui/core";
import { connect } from "react-redux";
import { getFavorite } from "../_actions/favorite";
import Footer from "../component/Footer";
import Event from "../component/Event";
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      user: {
        fullname: "",
        email: "",
        password: "",
        image: ""
      }
    };
  }

  onClickEdit = () => {
    this.setState({ edit: true });
  };

  handleFormChange = event => {
    let usernew = { ...this.state.user };
    usernew[event.target.name] = event.target.value;
    this.setState({
      user: usernew
    });
  };

  onClickCancel = () => {
    this.setState({ edit: false });
  };

  onClickSave = () => {
    const id = localStorage.getItem("id");
    const { fullname, email, password, image } = this.state.user;
    axios
      .put(
        `http://localhost:5000/api/v1/user/${id}`,
        {
          fullname: fullname,
          email: email,
          password: password,
          image: image
        },
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") }
        }
      )
      .then(res => {
        alert(res.data.message);
        this.setState({ edit: false });
      })
      .catch(err => {
        alert(err);
      });
  };

  componentDidMount() {
    const id = localStorage.getItem("id");
    this.props.dispatch(getFavorite(id));
    axios
      .get(`http://localhost:5000/api/v1/user/${id}`, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then(res => {
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        alert(err);
      });
  }
  render() {
    const { favorite } = this.props.favorite;
    // console.log(this.state.user);

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
          {this.state.edit ? (
            <Grid container alignItems="center" style={{ padding: 50 }}>
              <Grid item xs={10} md={10}>
                <div style={{ display: "flex" }}>
                  <TextField
                    label="fullname"
                    name="fullname"
                    style={{ marginRight: 80 }}
                    value={this.state.user.fullname}
                    onChange={this.handleFormChange}
                  />
                  <Button
                    onClick={this.onClickSave}
                    variant="outlined"
                    size="small"
                    color="secondary"
                  >
                    Save
                  </Button>
                  <Button
                    onClick={this.onClickCancel}
                    variant="outlined"
                    size="small"
                    color="secondary"
                  >
                    Cancel
                  </Button>
                </div>
                <div>
                  <TextField
                    label="email"
                    name="email"
                    value={this.state.user.email}
                    onChange={this.handleFormChange}
                  />
                  <div>
                    <TextField
                      label="password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleFormChange}
                    />
                  </div>
                </div>
                <div>
                  <TextField
                    label="image"
                    name="image"
                    value={this.state.user.image}
                    onChange={this.handleFormChange}
                  />
                </div>
              </Grid>
              <Grid item xs={2} md={2}>
                <Avatar
                  src={localStorage.getItem("image")}
                  style={{ height: 150, width: 150 }}
                ></Avatar>
              </Grid>
            </Grid>
          ) : (
            <Grid container alignItems="center" style={{ padding: 50 }}>
              <Grid item xs={10} md={10}>
                <div style={{ display: "flex" }}>
                  <Typography
                    variant="h4"
                    style={{ marginRight: 80, textTransform: "capitalize" }}
                  >
                    {localStorage.getItem("fullname")}
                  </Typography>
                  <Button
                    onClick={this.onClickEdit}
                    variant="outlined"
                    size="small"
                    color="secondary"
                  >
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
          )}

          <div style={{ marginBottom: 30, marginTop: 40 }}>
            <Typography
              variant="h4"
              style={{ color: "#EF233C", fontWeight: "bold" }}
            >
              Favorite
            </Typography>
          </div>
          <Grid container spacing={3}>
            {favorite.map(item => (
              <Event
                id={item.events.id}
                url={item.events.image}
                judul={
                  item.events.title.length > 30
                    ? item.events.title.substring(0, 22) + "..."
                    : item.events.title
                }
                harga={item.events.price}
                isi={item.events.description.substring(0, 100) + "..."}
                // user={item.user.fullname}
                time={item.events.startTime}
              />
            ))}
          </Grid>
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
