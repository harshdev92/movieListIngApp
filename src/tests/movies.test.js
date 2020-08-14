import { createStore } from "redux";
import { rootReducer } from "../store/movies";
import { fetchMovies, search } from "../store/movies";

describe("store", () => {
  it("should handle fetchmovie action", () => {
    const store = createStore(rootReducer);
    const x = store.dispatch(fetchMovies(1));
    expect(store.getState().movies).toHaveLength(20);
  });
  it("should handle search action", () => {
    const store = createStore(rootReducer);
    const x = store.dispatch(search("a"));
    expect(store.getState().searchText).toHaveLength(1);
  });
});
