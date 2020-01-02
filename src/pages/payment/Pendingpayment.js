import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, TextField } from "@material-ui/core";
import axios from "axios";
import { connect } from "react-redux";
import { putOrder } from "../../_actions/order";

class Pendingpayment extends Component {
  handleConfirm = () => {
    const id = this.props.id;
    // axios
    //   .put(`http://localhost:5000/api/v1/order/${id}`, {
    //     status: "confirmed"
    //   })
    //   .then(res => {
    //     alert(res.data.message);
    //   });

    this.props.dispatch(
      putOrder(
        id,
        { status: "confirmed" },
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") }
        }
      )
    );
  };
  render() {
    const status = this.props.status;
    return (
      <Grid item container>
        <Grid
          container
          item
          xs={12}
          md={12}
          style={{ border: "10px #EF233C solid", marginBottom: 20 }}
        >
          <Grid
            item
            xs={12}
            container
            md={12}
            alignItems="center"
            style={{
              backgroundColor: "grey",
              padding: 10
            }}
          >
            <Grid item xs={8} md={10}>
              <Typography>{this.props.user}</Typography>
              <Typography>{this.props.userid}</Typography>
            </Grid>
            <Grid item xs={4} md={2} style={{ textAlign: "center" }}>
              <Typography>Rp. {this.props.harga}</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            style={{
              padding: 10
            }}
          >
            <Grid item xs={12} md={10}>
              <div>
                <Typography variant="h5">{this.props.judul}</Typography>
                <Typography>{this.props.time}</Typography>
                <Typography>tst</Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <img
                src="https://cdn.qrstuff.com/images/default_qrcode.png"
                style={{ maxWidth: 100, maxHeight: 100 }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={12}
          alignItems="center"
          style={{ padding: 10 }}
        >
          <Grid item md={10}>
            <Typography>Shopping Summary</Typography>
            <Typography>Total Price ({this.props.quantity} items)</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography>Rp. {this.props.total}</Typography>
          </Grid>
          <Grid item md={12}>
            <hr />
          </Grid>
          <Grid item md={10}>
            {status === "pending" ? (
              <div>
                <Typography>Prove of payment</Typography>
                <TextField label="Upload bukti pembayaran" />
              </div>
            ) : (
              <div></div>
            )}
          </Grid>
          <Grid item md={2}>
            {status === "confirmed" ? (
              <Typography>Waiting Approved</Typography>
            ) : (
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={this.handleConfirm}
              >
                Confirm
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Pendingpayment);

{
  /* <Card style={{ height: "420px" }}>
          <CardMedia
            style={{ height: "180px" }}
            image={this.props.url}
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
                {this.props.judul}
              </Typography>
              <Typography variant="subtitle1" color="black">
                {this.props.user}
              </Typography>

              <Typography variant="h6" color="textSecondary">
                {this.props.harga}
              </Typography>

              <Typography
                variant="subtitle2"
                color="textSecondary"
                paragraph="1px"
              >
                {this.props.address}
              </Typography>

              <Typography variant="subtitle1" color="textSecondary">
                {this.props.time}
              </Typography>
              <Button onClick={this.handleConfirm}>Confirm</Button>
            </CardContent>
          </div>
        </Card> */
}
