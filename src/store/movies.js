import data from "../api/CONTENTLISTINGPAGE-PAGE1.json";
import data1 from "../api/CONTENTLISTINGPAGE-PAGE2.json";
import data2 from "../api/CONTENTLISTINGPAGE-PAGE3.json";

//action types
const FETCH_ALL = "FETCH_ALL";
const SEARCH = "SEARCH";

let movies = data.page["content-items"].content;
let pageRequested = "";

//movie action
export function fetchMovies(page) {
  if (page === 1) {
    movies = data.page["content-items"].content;
    pageRequested = data.page["page-num-requested"];
  } else if (page === 2) {
    movies = data1.page["content-items"].content;
    pageRequested = data1.page["page-num-requested"];
  } else if (page === 3) {
    movies = data2.page["content-items"].content;
    pageRequested = data2.page["page-num-requested"];
  }
  return { type: FETCH_ALL, payload: { movies, pageRequested } };
}

//search action
export function search(key) {
  return { type: SEARCH, payload: key };
}

//initial state
const initialState = {
  movies: [],
  pageRequested: "",
  searchText: "",
};

//reducer
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        movies: state.movies.concat(action.payload.movies),
        pageRequested: action.payload.pageRequested,
      };

    case SEARCH:
      return {
        ...state,
        searchText: action.payload,
      };

    default:
      return state;
  }
};
