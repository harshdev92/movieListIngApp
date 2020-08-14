import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { create, act } from "react-test-renderer";
import Header from "../container/Header";
import { rootReducer } from "../store/movies";

const store = createStore(rootReducer);

it("should snapshot test Header", () => {
  let root;
  act(() => {
    root = create(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  expect(root.toJSON()).toMatchSnapshot();
});
