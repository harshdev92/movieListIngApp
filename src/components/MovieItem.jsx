import React from "react";
import LazyImage from "./LazyImage.jsx";

function MovieItem({ movie }) {
  let srcImage = movie["poster-image"].includes("posterthatismissing")
    ? `/slices/placeholder_for_missing_posters.png`
    : `/slices/${movie["poster-image"]}`;

  let name =
    movie.name.length > 15 ? movie.name.slice(0, 10) + "..." : movie.name;
  return (
    <div className="lg:mb-16 pr-5 mb-4">
      <LazyImage src={process.env.PUBLIC_URL + srcImage} />
      <p className="text-gray-500 lg:text-sm text-xs lg:my-2 ">{name} </p>
    </div>
  );
}

export default MovieItem;
