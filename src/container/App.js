import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";
import Header from "./Header";
import MovieItem from "../components/MovieItem";
import { fetchMovies } from "../store/movies";

class App extends Component {
  getLoadMore() {
    return Number(this.props.page) === 3 || this.props.searchText
      ? false
      : true;
  }

  getItems() {
    let filteredMovies = this.props.movies.filter((movie) => {
      return (
        movie.name
          .toUpperCase()
          .indexOf(this.props.searchText.toUpperCase()) !== -1
      );
    });
    return filteredMovies;
  }

  render() {
    return (
      <>
        <Header />
        <div style={{ backgroundColor: "#171717", marginTop: "35px" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.props.fetch}
            hasMore={this.getLoadMore()}
            loader={
              <div className="loader" style={{ textAlign: "center" }} key={0}>
                Loading ...
              </div>
            }
          >
            <div className="grid grid-cols-3 lg:grid-cols-5 sm:grid-cols-4 lg:ml-12 lg:pt-12 ml-5 py-6 pt-8">
              {this.getItems().map((movie, index) => (
                <MovieItem key={index} movie={movie} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    page: state.pageRequested,
    searchText: state.searchText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (page) => dispatch(fetchMovies(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
