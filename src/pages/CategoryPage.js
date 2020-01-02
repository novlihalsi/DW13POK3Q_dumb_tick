import React, { Component } from "react";
import Header from "../component/header/Header";
import Event from "../component/Event";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getCategoriesevent } from "../_actions/categories";
import { Grid, Container } from "@material-ui/core";

class CategoryPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getCategoriesevent(id));
  }
  render() {
    const { showevent } = this.props.show;
    const event = showevent.event;
    // console.log(event);

    return (
      <div>
        <Header />
        <Container maxWidth="lg" style={{ marginBottom: 40 }}>
          <div style={{ marginBottom: 30, marginTop: 40 }}>
            <Typography
              variant="h4"
              style={{
                color: "#EF233C",
                fontWeight: "bold",
                textTransform: "uppercase"
              }}
            >
              {showevent.name}
            </Typography>
          </div>
          {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
          <Grid container spacing={3}>
            {event &&
              event.map(item => (
                <Event
                  id={item.id}
                  url={item.image}
                  judul={item.title}
                  harga={item.price}
                  isi={item.description.substring(0, 60)}
                  user={item.user.fullname}
                  time={item.startTime}
                />
              ))}
          </Grid>
          {/* </div> */}
        </Container>
      </div>
    );
  }
}

const mapsStateToProps = state => {
  return {
    show: state.categories
  };
};

export default connect(mapsStateToProps)(CategoryPage);
