import React, { Component } from "react";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./Category.css";
import { connect } from "react-redux";
import { getCategories } from "../../_actions/categories";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const MenuItem = ({ text, images }) => {
  return (
    <div
      style={{
        marginRight: "30px",
        height: 60,
        width: 250,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${images})`,
        backgroundPosition: "center",
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

export const Menu = (categories, selected) =>
  categories.map(el => {
    const { name, image, id } = el;

    return (
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={"/category/" + id}
      >
        <MenuItem text={name} key={id} selected={selected} images={image} />
      </Link>
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class Category extends Component {
  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    // itemsCount: categories.length,
    selected: "item1",
    translate: 0,
    transition: 0.3,
    wheel: true
  };

  constructor(props) {
    super(props);
    this.menu = null;
  }

  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  onUpdate = ({ translate }) => {
    this.setState({ translate });
  };

  onSelect = key => {
    this.setState({ selected: key });
  };

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
    }
  }

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };

  render() {
    const { selected } = this.state;
    const { categories } = this.props.categories;
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      translate,
      transition,
      wheel
    } = this.state;

    // const menu = this.menuItems;

    return (
      <div>
        <ScrollMenu
          // ref={el => (this.menu = el)}
          data={Menu(categories, selected)}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
          transition={+transition}
          onUpdate={this.onUpdate}
          onSelect={this.onSelect}
          selected={selected}
          translate={translate}
          alignCenter={alignCenter}
          scrollToSelected={true}
          dragging={dragging}
          clickWhenDrag={clickWhenDrag}
          wheel={wheel}
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
