import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { create, act } from "react-test-renderer";
import App from "../container/App";
import { rootReducer } from "../store/movies";

const store = createStore(rootReducer);

it("should snapshot test App", () => {
  let root;
  act(() => {
    root = create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  expect(root.toJSON()).toMatchSnapshot();
});
