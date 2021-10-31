import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../serviceApi/serviceApi";
import CastItem from "./CastItem";
import Container from "../Container/Container";
import ScrollToLoadBtn from "../ScrollToLoadBtn";

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then((data) => {
        if (data.cast === 0) {
          setErrorText(
            "We don't have any information about cast for this movie "
          );
        }
        setActors(data.cast);
        ScrollToLoadBtn();
      })
      .catch((error) => console.log(error));
  }, [movieId]);

  // console.log(actors);
  return (
    <Container>
      {errorText && <p>{errorText}</p>}
      {actors && <CastItem actors={actors} />}
    </Container>
  );
}
