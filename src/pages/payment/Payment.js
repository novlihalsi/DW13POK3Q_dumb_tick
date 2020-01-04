import React, { Component } from "react";
import Header from "../../component/header/Header";
import Pendingpayment from "./Pendingpayment";
import { connect } from "react-redux";
import { getOrderPend, getOrderConfirm, getOrder } from "../../_actions/order";
import { Container, Grid, Paper } from "@material-ui/core";
import Footer from "../../component/Footer";

import Typography from "@material-ui/core/Typography";

class Payment extends Component {
  componentDidMount() {
    const id = localStorage.getItem("id");
    this.props.dispatch(getOrderPend(id));
    this.props.dispatch(getOrderConfirm(id));
    this.props.dispatch(getOrder(id));
  }
  render() {
    const { order } = this.props.ticket;
    const { putdataorder } = this.props.putorder;
    if (putdataorder.message) {
      alert("success");
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
              Payment
            </Typography>
          </div>

          {order.map(item => (
            <Paper style={{ marginBottom: 30 }}>
              <Grid container justify="center">
                <Pendingpayment
                  url={item.events.image}
                  judul={item.events.title}
                  user={item.user.fullname}
                  userid={item.user.id}
                  harga={item.events.price}
                  total={item.totalPrice}
                  quantity={item.quantity}
                  address={item.events.address}
                  time={item.events.startTime}
                  id={item.id}
                  status={item.status}
                />
              </Grid>
            </Paper>
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ticket: state.order,
    putorder: state.order
  };
};

export default connect(mapStateToProps)(Payment);
