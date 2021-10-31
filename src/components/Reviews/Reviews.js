import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../serviceApi/serviceApi";
import ReviewsList from "./ReviewsList";
import ScrollToLoadBtn from "../ScrollToLoadBtn";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then((data) => {
        if (data.results.length === 0) {
          setErrorText("We don't have any reviews for this movie");
          return;
        }
        setReviews(data.results);
        ScrollToLoadBtn();
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <>
      {errorText && (
        <p style={{ marginTop: "-30px", height: "50px" }}>{errorText}</p>
      )}
      {reviews && <ReviewsList reviews={reviews} />}
    </>
  );
}
