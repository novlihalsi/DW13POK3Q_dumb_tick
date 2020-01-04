import React, { Component } from "react";
import Header from "../component/header/Header";
import Category from "../component/Category/Category";
import Event from "../component/Event";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getEvent } from "../_actions/event";
import Footer from "../component/Footer";
import { Grid, Container, Button, LinearProgress } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }
  componentDidMount() {
    this.props.dispatch(getEvent());
  }

  onChange = event => {
    this.setState({ search: event.target.value });
  };
  render() {
    const { events, geteventpending, geteventreject } = this.props.event;
    const { search } = this.state;
    const filteredEvents = events.filter(events => {
      return events.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    const todayEvents = events.filter(events => {
      const date = new Date(events.startTime);
      return (
        date.toISOString().substring(0, 10) ==
        new Date().toISOString().substring(0, 10)
      );
    });
    const upcomingEvents = events.filter(events => {
      const date = new Date(events.startTime);
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return (
        date.toISOString().substring(0, 10) ==
        tomorrow.toISOString().substring(0, 10)
      );
    });

    if (geteventpending) {
      return (
        <div>
          <Header />
          <LinearProgress />
          <Container maxWidth="lg" style={{ marginBottom: 40 }}>
            <Grid container justify="center" alignItems="center">
              <Grid item md={12}>
                <div style={{ height: 600 }} />
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </div>
      );
    } else if (geteventreject) {
      return (
        <div>
          <Header />
          <Container maxWidth="lg" style={{ marginBottom: 40 }}>
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ height: 600 }}
            >
              <div>
                <Typography>Failed To Load Content</Typography>
              </div>
              <div>
                <Button
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Try Again
                </Button>
              </div>
            </Grid>
          </Container>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <Container maxWidth="lg" style={{ marginBottom: 40 }}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <TextField
                  color="secondary"
                  id="standard-basic"
                  label="Search Events"
                  style={{ width: "100%", marginTop: 30 }}
                  onChange={this.onChange}
                />
              </Grid>
            </Grid>
            <div style={{ margin: "30px 0" }}>
              <Typography
                variant="h4"
                style={{ color: "#EF233C", fontWeight: "bold" }}
              >
                Category
              </Typography>
            </div>
            <div>
              <Category />
            </div>
            {search ? (
              <div>
                <div style={{ margin: "30px 0" }}>
                  <Typography
                    variant="h4"
                    style={{ color: "#EF233C", fontWeight: "bold" }}
                  >
                    Search
                  </Typography>
                </div>
                <Grid container spacing={3}>
                  {filteredEvents.map(item => (
                    <Event
                      id={item.id}
                      url={item.image}
                      judul={
                        item.title.length > 30
                          ? item.title.substring(0, 22) + "..."
                          : item.title
                      }
                      harga={item.price}
                      isi={item.description.substring(0, 100) + "..."}
                      user={item.user.fullname}
                      time={item.startTime}
                    />
                  ))}
                </Grid>
              </div>
            ) : (
              <div>
                <div style={{ margin: "30px 0" }}>
                  <Typography
                    variant="h4"
                    style={{ color: "#EF233C", fontWeight: "bold" }}
                  >
                    Today
                  </Typography>
                </div>
                <Grid container spacing={3}>
                  {events.map(item => (
                    <Event
                      id={item.id}
                      url={item.image}
                      judul={
                        item.title.length > 30
                          ? item.title.substring(0, 22) + "..."
                          : item.title
                      }
                      harga={item.price}
                      isi={item.description.substring(0, 100) + "..."}
                      user={item.user.fullname}
                      time={item.startTime}
                    />
                  ))}
                </Grid>
                <div style={{ margin: "30px 0" }}>
                  <Typography
                    variant="h4"
                    style={{ color: "#EF233C", fontWeight: "bold" }}
                  >
                    Up Coming Event
                  </Typography>
                </div>
                <Grid container spacing={3}>
                  {events.map(item => (
                    <Event
                      id={item.id}
                      url={item.image}
                      judul={
                        item.title.length > 30
                          ? item.title.substring(0, 30) + "..."
                          : item.title
                      }
                      harga={item.price}
                      isi={item.description.substring(0, 100) + "..."}
                      user={item.user.fullname}
                      time={item.startTime}
                    />
                  ))}
                </Grid>
              </div>
            )}
          </Container>
          <Footer />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    event: state.event
  };
};

export default connect(mapStateToProps)(Home);
