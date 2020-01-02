import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";

class Ticket extends Component {
  render() {
    return (
      // <CardActionArea>

      <Grid
        container
        style={{ border: "10px #EF233C solid", marginBottom: 20 }}
      >
        <Grid
          item
          container
          alignItems="center"
          style={{
            backgroundColor: "grey",
            padding: 10
          }}
        >
          <Grid item xs={8} md={10}>
            <Typography>{this.props.user}</Typography>
            <Typography>User Id</Typography>
          </Grid>
          <Grid item xs={4} md={2} style={{ textAlign: "center" }}>
            <Typography>{this.props.quantity} Person</Typography>
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
            <Typography variant="h5">{this.props.judul}</Typography>
            <Typography>{this.props.time}</Typography>
            <Typography>{this.props.address}</Typography>
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
    );
  }
}

export default Ticket;
