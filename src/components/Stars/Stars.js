import React from "react";
import StarRatings from "react-star-ratings";

export default function Stars({ stars }) {
  return (
    <StarRatings
      rating={stars}
      starRatedColor="#3f51b5"
      numberOfStars={10}
      name="rating"
      starDimension="20px"
      starSpacing="5px"
    />
  );
}
