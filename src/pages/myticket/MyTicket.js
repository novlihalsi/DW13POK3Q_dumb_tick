import React, { Component } from "react";
import Header from "../../component/header/Header";
import { connect } from "react-redux";
import { getOrderApproved } from "../../_actions/order";
import Ticket from "./Ticket";
import { Container, Grid, Paper } from "@material-ui/core";
import Footer from "../../component/Footer";

import Typography from "@material-ui/core/Typography";

class MyProfile extends Component {
  componentDidMount() {
    const id = localStorage.getItem("id");
    // console.log(id);
    this.props.dispatch(getOrderApproved(id));
  }
  render() {
    const { ticket } = this.props.ticket;
    return (
      <div>
        <Header />
        <Container maxWidth="lg" style={{ marginBottom: 40 }}>
          <div style={{ marginBottom: 30, marginTop: 40 }}>
            <Typography
              variant="h4"
              style={{ color: "#EF233C", fontWeight: "bold" }}
            >
              My Ticket
            </Typography>
          </div>
          <Paper elevation={3}>
            <Grid container style={{ paddingBottom: 30, padding: 100 }}>
              {ticket.map(item => (
                <Ticket
                  url={item.events.image}
                  judul={item.events.title}
                  user={item.user.fullname}
                  quantity={item.quantity}
                  address={item.events.address}
                  time={item.events.startTime}
                  id={item.id}
                />
              ))}
            </Grid>
          </Paper>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ticket: state.order
  };
};

export default connect(mapStateToProps)(MyProfile);
