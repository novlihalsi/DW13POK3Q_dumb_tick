import React, { Component } from "react";
import Header from "../component/header/Header";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { connect } from "react-redux";
import { getDetailEvent } from "../_actions/event";
import { postOrder } from "../_actions/order";
import {
  Button,
  Container,
  Grid,
  Paper,
  Divider,
  CircularProgress
} from "@material-ui/core";
import axios from "axios";
import NumberFormat from "react-number-format";
import EventIcon from "@material-ui/icons/Event";
import moment from "moment";
import ScheduleIcon from "@material-ui/icons/Schedule";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Footer from "../component/Footer";

class EventDetails extends Component {
  constructor() {
    super();
    this.state = {
      jumlah: 1
    };
  }
  increment = () => {
    this.setState({
      jumlah: this.state.jumlah + 1
    });
  };

  decrement = () => {
    if (this.state.jumlah > 1) {
      this.setState({
        jumlah: this.state.jumlah - 1
      });
    }
  };

  handleBuy = () => {
    const event = this.props.detailevent.detail;
    const { jumlah } = this.state;
    const eventid = event.id;
    const userid = localStorage.getItem("id");
    const totalharga = jumlah * event.price;
    // const token = localStorage.getItem("token");

    this.props.dispatch(
      postOrder(
        {
          event_id: eventid,
          user_id: userid,
          quantity: jumlah,
          totalPrice: totalharga,
          status: "pending"
        },
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") }
        }
      )
    );

    // console.log(this.props.dataorder);
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.dispatch(getDetailEvent(id));
  }
  render() {
    const { detail } = this.props.detailevent;
    const harga = this.state.jumlah * detail.price;
    const start = moment(detail.startTime).format("DD MMM YYYY");
    const end = moment(detail.endTime).format("DD MMM YYYY");
    const { isloading, error, dataorder } = this.props.dataorder;
    const user_id = localStorage.getItem("id");

    if (error) {
      alert("gagal");
    }
    if (dataorder.message) {
      alert(dataorder.message);
      window.location.reload();
    }

    return (
      <div>
        <Header />
        <Container maxWidth="lg" style={{ marginBottom: 40 }}>
          <div style={{ marginBottom: 30, marginTop: 40 }}>
            <Typography
              variant="h4"
              style={{ color: "#EF233C", fontWeight: "bold" }}
            >
              Event Details
            </Typography>
          </div>
          <Paper elevation={3}>
            <Grid container style={{ paddingBottom: 30 }}>
              <Grid item xs={12} md={12}>
                <CardMedia
                  style={{ height: "500px", position: "relative" }}
                  image={detail.image}
                  title="Live from space album cover"
                />
              </Grid>
              <Grid
                container
                item
                md={12}
                style={{ marginTop: 30, marginLeft: 30 }}
              >
                <Grid item xs={8} md={10}>
                  <Typography variant="h4" style={{ fontWeight: "bold" }}>
                    {detail.title}
                  </Typography>
                </Grid>
                <Grid item xs={4} md={2}>
                  <Typography
                    style={{
                      color: "#EF233C",
                      fontWeight: "bold",
                      fontSize: 30
                    }}
                  >
                    <NumberFormat
                      value={harga}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp "}
                      renderText={value => value}
                    />
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                item
                md={12}
                style={{ marginTop: 30, marginLeft: 30 }}
              >
                <Grid item xs={6} md={8}>
                  <Typography
                    variant="h5"
                    style={{ color: "#EF233C", textTransform: "uppercase" }}
                  >
                    {detail.category && detail.category.name}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} justify="flex-end">
                  {localStorage.getItem("token") ? (
                    detail.user_id != user_id ? (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-end"
                        }}
                      >
                        <Button onClick={this.decrement} size="small">
                          -
                        </Button>
                        <Typography
                          variant="subtitle1"
                          style={{
                            fontSize: 25,
                            color: "#EF233C",
                            fontWeight: "bold"
                          }}
                        >
                          {this.state.jumlah}
                        </Typography>
                        <Button onClick={this.increment} size="small">
                          +
                        </Button>
                        {isloading ? (
                          <CircularProgress
                            style={{
                              marginRight: 30
                            }}
                          />
                        ) : (
                          <Button
                            variant="contained"
                            size="medium"
                            onClick={this.handleBuy}
                            style={{
                              backgroundColor: "#EF233C",
                              marginRight: 30,
                              color: "white"
                            }}
                          >
                            Buy
                          </Button>
                        )}
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-end"
                        }}
                      >
                        <Typography
                          style={{
                            marginRight: 30,
                            color: "#EF233C"
                          }}
                        >
                          Your Ticket
                        </Typography>
                      </div>
                    )
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end"
                      }}
                    >
                      <Typography
                        style={{
                          marginRight: 30,
                          color: "#EF233C"
                        }}
                      >
                        Silahkan login untuk membeli tiket
                      </Typography>
                    </div>
                  )}
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} style={{ margin: "0 30px" }}>
                <hr />
              </Grid>
              <Grid xs={12} md={4}>
                <div style={{ marginLeft: 30 }}>
                  <Typography style={{ fontWeight: "bold", fontSize: 22 }}>
                    Hosted By
                  </Typography>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 30
                    }}
                  >
                    <img
                      src={detail.user && detail.user.image}
                      style={{ height: 100, width: 100, marginRight: 20 }}
                    />
                    <Typography
                      color="textSecondary"
                      style={{ fontWeight: "bold" }}
                    >
                      {detail.user && detail.user.fullname}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid xs={12} md={4}>
                <Typography style={{ fontWeight: "bold", fontSize: 22 }}>
                  Date & Time
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30
                  }}
                >
                  <EventIcon />
                  <Typography style={{ marginLeft: 10 }}>
                    {start} - {end}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30
                  }}
                >
                  <ScheduleIcon />
                  <Typography style={{ marginLeft: 10 }}>
                    09:00 - 17:00 WIB
                  </Typography>
                </div>
              </Grid>
              <Grid xs={12} md={4}>
                <Typography style={{ fontWeight: "bold", fontSize: 22 }}>
                  Contact Person
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30
                  }}
                >
                  <PermIdentityIcon />
                  <Typography style={{ marginLeft: 10 }}>
                    {detail.user && detail.user.fullname}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30
                  }}
                >
                  <PhoneIcon />
                  <Typography style={{ marginLeft: 10 }}>
                    082374739302
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30
                  }}
                >
                  <MailOutlineIcon />
                  <Typography style={{ marginLeft: 10 }}>
                    {detail.user && detail.user.email}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Grid container style={{ padding: 20 }}>
            <Grid item xs={12} md={5}>
              <div style={{ textAlign: "center" }}>
                <Typography
                  variant="h5"
                  style={{ fontWeight: "bold", marginBottom: 20 }}
                >
                  Event Description
                </Typography>
              </div>
              <Typography>{detail.description}</Typography>
            </Grid>
            <Grid item md={2}>
              <Divider orientation="vertical" style={{ margin: "auto" }} />
            </Grid>
            <Grid item xs={12} md={5}>
              <div>
                <div style={{ textAlign: "center" }}>
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "bold", marginBottom: 20 }}
                  >
                    Location
                  </Typography>
                </div>

                <Typography>
                  <LocationOnIcon />
                  {detail.address}
                </Typography>

                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center"
                  }}
                >
                  <iframe
                    src={detail.urlMaps}
                    width="400"
                    height="300"
                    frameborder="0"
                    style={{ border: 0, margin: "30px 0 auto" }}
                    allowfullscreen="true"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailevent: state.event,
    dataorder: state.order
  };
};

export default connect(mapStateToProps)(EventDetails);

{
  /* <div style={{ margin: "0 90px" }}>
          <div style={{ marginBottom: 30 }}>
            <Typography variant="h4">Event Details</Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card style={{ height: "1000px" }}>
              <CardMedia
                style={{ height: "550px" }}
                image={detail.image}
                title="Live from space album cover"
              />
              <div>
                <CardContent>
                  <Typography
                    component="h5"
                    variant="h5"
                    paragraph="1"
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    {detail.title}
                  </Typography>

                  <Typography variant="h6" color="textSecondary">
                    <NumberFormat
                      value={harga}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp"}
                      renderText={value => value}
                    />
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    paragraph="1px"
                  >
                    {detail.description}
                  </Typography>
                  <Typography variant="subtitle1" color="black">
                    {detail.fullname}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {detail.time}
                  </Typography>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Button onClick={this.decrement}>-</Button>
                    <Typography>{this.state.jumlah}</Typography>
                    <Button onClick={this.increment}>+</Button>

                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.handleBuy}
                    >
                      Buy
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div> */
}
