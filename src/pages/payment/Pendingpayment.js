import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, TextField } from "@material-ui/core";
import { putOrder } from "../../_actions/order";

class Pendingpayment extends Component {
  handleConfirm = () => {
    const id = this.props.id;

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
            {(status === "pending" && (
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={this.handleConfirm}
              >
                Confirm
              </Button>
            )) ||
              (status === "confirmed" && (
                <Typography style={{ color: "orange", fontWeight: "bold" }}>
                  Waiting for Approved
                </Typography>
              )) ||
              (status === "approved" && (
                <Typography style={{ color: "green", fontWeight: "bold" }}>
                  Approved
                </Typography>
              ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Pendingpayment;
