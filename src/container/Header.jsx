import React, { Component } from "react";
import { connect } from "react-redux";
import { search } from "../store/movies";
import SearchBox from "../components/SearchBox";

class Header extends Component {
  render() {
    return (
      <div
        className="bg-transparent flex px-3 justify-between fixed w-full z-40 top-0 "
        style={{
          background: `url(${process.env.PUBLIC_URL + "/slices/nav_bar.png"} )`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center">
          <img
            src={process.env.PUBLIC_URL + "/slices/Back.png"}
            alt="back_Button"
            className="w-5"
          />
          <p className="text-white px-5 text-sm ">Romantic Comedy</p>
        </div>
        <SearchBox onSearchChange={(e) => this.props.search(e.target.value)} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (key) => dispatch(search(key)),
  };
};
export default connect(null, mapDispatchToProps)(Header);
