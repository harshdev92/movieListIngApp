import React from "react";
import { create, act } from "react-test-renderer";
import MovieItem from "../components/MovieItem";

it("should snapshot test movieItem", () => {
  let root;
  act(() => {
    root = create(
      <MovieItem
        movie={{
          name: "The Birds",
          "poster-image": "poster1.jpg",
        }}
      />
    );
  });

  expect(root.toJSON()).toMatchSnapshot();
});
