import React, { Component } from "react";
import Header from "../component/header/Header";
import Typography from "@material-ui/core/Typography";
import { Container, Grid, Paper, Button, TextField } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import { getCategories } from "../_actions/categories";
import { postEvent } from "../_actions/event";

class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      category: null,
      events: {
        title: "",
        start: null,
        end: null,
        price: null,
        description: "",
        address: "",
        urlmaps: "",
        image: ""
      }
    };
  }

  handleClick = () => {
    const category = this.state.category;
    const {
      title,
      start,
      end,
      price,
      description,
      address,
      urlmaps,
      image
    } = this.state.events;
    this.props.dispatch(
      postEvent(
        {
          title: title,
          category_id: category,
          startTime: start,
          endTime: end,
          price: price,
          description: description,
          address: address,
          urlMaps: urlmaps,
          image: image,
          user_id: localStorage.getItem("id")
        },
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") }
        }
      )
    );
  };

  handleChangeCategory = event => {
    this.setState({ category: event.target.value });
  };

  handleChange = event => {
    let eventsnew = { ...this.state.events };
    eventsnew[event.target.name] = event.target.value;
    this.setState({
      events: eventsnew
    });
  };

  componentDidMount() {
    this.props.dispatch(getCategories());
  }
  render() {
    const { categories } = this.props.category;
    return (
      <div>
        <Header />
        <Container maxWidth="lg" style={{ marginBottom: 40 }}>
          <div style={{ marginBottom: 30, marginTop: 40 }}>
            <Typography
              variant="h4"
              style={{ color: "#EF233C", fontWeight: "bold" }}
            >
              Add Event
            </Typography>
          </div>
          <Paper>
            <Grid container style={{ padding: 100 }}>
              <Grid item xs={12} md={12}>
                <TextField
                  color="secondary"
                  name="title"
                  label="Title Event"
                  style={{ width: "100%" }}
                  onChange={this.handleChange}
                />
                <FormControl style={{ width: "100%" }}>
                  <InputLabel>Category</InputLabel>
                  <Select
                    native
                    value={this.state.category}
                    onChange={this.handleChangeCategory}
                  >
                    <option value="" />
                    {categories.map(item => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  color="secondary"
                  name="start"
                  type="datetime-local"
                  defaultValue="2019-01-01T00:00"
                  label="Start Date"
                  style={{ width: "100%", marginTop: 10 }}
                  onChange={this.handleChange}
                />

                <TextField
                  color="secondary"
                  name="end"
                  type="datetime-local"
                  defaultValue="2019-01-01T00:00"
                  label="End Date"
                  style={{ width: "100%", marginTop: 10 }}
                  onChange={this.handleChange}
                />
                <TextField
                  color="secondary"
                  name="price"
                  label="Price"
                  style={{ width: "100%" }}
                  onChange={this.handleChange}
                />
                <TextField
                  color="secondary"
                  name="description"
                  label="Description"
                  multiline
                  style={{ width: "100%" }}
                  onChange={this.handleChange}
                />
                <TextField
                  color="secondary"
                  name="address"
                  label="address"
                  style={{ width: "100%" }}
                  onChange={this.handleChange}
                />
                <TextField
                  color="secondary"
                  name="urlmaps"
                  label="urlMaps"
                  style={{ width: "100%" }}
                  onChange={this.handleChange}
                />
                <TextField
                  color="secondary"
                  name="image"
                  label="image"
                  style={{ width: "100%" }}
                  onChange={this.handleChange}
                />

                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 30
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleClick}
                  >
                    Publish
                  </Button>
                </Grid>
              </Grid>
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
    category: state.categories,
    event: state.event
  };
};

export default connect(mapStateToProps)(AddEvent);
