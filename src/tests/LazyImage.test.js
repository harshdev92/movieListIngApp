import React from "react";
import { create, act } from "react-test-renderer";
import LazyImage from "../components/LazyImage";

it("should snapshot test LazyImage", () => {
  let root;
  act(() => {
    root = create(<LazyImage />);
  });

  expect(root.toJSON()).toMatchSnapshot();
});
