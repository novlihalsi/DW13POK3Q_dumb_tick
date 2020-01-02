import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// import axios from "axios";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { connect } from "react-redux";
import { getCategories } from "../_actions/categories";
// import API from "../services/Api";

const MenuItem = ({ text, images }) => {
  return (
    // <Button
    //   size="large"
    //   style={{ marginLeft: "10px", marginRight: "10px", fontSize: 40 }}
    // >
    //   {text}
    // </Button>
    <div
      style={{
        marginRight: "30px",
        height: 60,
        width: 250,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${images})`,
        borderRadius: 10
      }}
    >
      <Typography
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textTransform: "uppercase"
        }}
      >
        {text}
      </Typography>
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (categories, selected) =>
  categories.map(el => {
    const { name, id, image } = el;

    return (
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={"/category/" + id}
      >
        <MenuItem text={name} key={id} selected={selected} images={image} />
        {/* {console.log(image)} */}
      </Link>
    );
  });

const ArrowLeft = (
  <Button>
    <ChevronLeftIcon />
  </Button>
);
const ArrowRight = (
  <Button>
    <ChevronRightIcon />
  </Button>
);

const selected = "";

class Category extends Component {
  state = {
    selected
  };

  componentDidMount() {
    // API.getCategory().then(res => {
    this.props.dispatch(getCategories());
    // });
  }
  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    const { categories } = this.props.categories;

    return (
      <div>
        <ScrollMenu
          data={Menu(categories, selected)}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Category);
