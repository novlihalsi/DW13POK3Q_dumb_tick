import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Grid, CardActions } from "@material-ui/core";
import moment from "moment";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NumberFormat from "react-number-format";

class Event extends Component {
  constructor() {
    super();
    this.state = {
      fave: false
    };
  }

  handleFave = () => {
    this.setState({
      fave: true
    });
  };
  render() {
    return (
      // <CardActionArea>
      // <div style={{ flex: 1, marginRight: "30px" }}>

      <Grid item xs={12} md={4}>
        <Card style={{ height: "400px" }}>
          <CardMedia
            style={{ height: "180px", position: "relative" }}
            image={this.props.url}
            title="Live from space album cover"
          >
            {/* <div> */}
            <Typography
              variant="h6"
              style={{
                position: "absolute",
                backgroundColor: "#E7E5DF",
                margin: 10,
                top: "0px",
                right: "0px",
                padding: 5,
                color: "#EF233C"
              }}
            >
              <NumberFormat
                value={this.props.harga}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp "}
                renderText={value => value}
              />
            </Typography>
          </CardMedia>
          <CardActions disableSpacing>
            <Link
              to={"/eventdetails/" + this.props.id}
              style={{
                textDecoration: "none"
              }}
            >
              <Typography
                variant="h6"
                // paragraph="1"
                style={{ fontWeight: "bold", color: "black" }}
              >
                {this.props.judul}
              </Typography>
            </Link>
            <IconButton
              onClick={this.handleFave}
              style={{ marginLeft: "auto" }}
            >
              {this.state.fave ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </CardActions>
          <CardContent>
            <Typography
              variant="subtitle1"
              paragraph="1px"
              style={{ color: "#EF233C", fontWeight: "bold", fontSize: 20 }}
            >
              {moment(this.props.time).format("DD MMM YYYY")}
            </Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              // paragraph="1px"
            >
              {this.props.isi}
            </Typography>
            {/* <Typography variant="subtitle1" color="black">
              {this.props.user}
            </Typography> */}
          </CardContent>
          {/* </div> */}
        </Card>
      </Grid>
      // </div>
    );
  }
}

export default Event;
