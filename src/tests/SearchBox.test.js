import React from "react";
import { create, act } from "react-test-renderer";
import SearchBox from "../components/SearchBox";

it("should snapshot test searchBox", () => {
  let root;
  act(() => {
    root = create(<SearchBox />);
  });

  expect(root.toJSON()).toMatchSnapshot();
});
