import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  Route,
  Link,
  useLocation,
  useHistory,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { fetchMovieById } from "../serviceApi/serviceApi";
import s from "../components/DetailsInfo/DetailsInfo.module.css";
import Container from "../components/Container/Container";
import { ReactComponent as Undo } from "../components/images/Undo.svg";
// import Loader from "../components/Loader/Loader";
import DetailsInfo from "../components/DetailsInfo/DetailsInfo";
import Loader from "react-loader-spinner";

const Cast = lazy(() =>
  import("../components/Cast/Cast.js" /* webpackChunkName: 'Cast'*/)
);

const Reviews = lazy(() =>
  import("../components/Reviews/Reviews.js" /* webpackChunkName: 'Reviews'*/)
);

export default function MovieDetailPage() {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const history = useHistory();
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    if (movieId) {
      fetchMovieById(movieId)
        .then((data) => setMovie(data))
        .catch((err) => console.log(err));
    }
  }, [movieId]);

  const handleClick = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <Container>
      {/* <div className={s.detail}> */}
      <button type="button" onClick={handleClick} className={s.button_back}>
        <Undo width="25px" />
        <span className={s.button_label}>
          {location?.state?.label ?? "go back"}
        </span>
      </button>
      <DetailsInfo movie={movie} />

      <Container>
        <h2 className={s.additional_subhead}>Additional information</h2>
        <ul className={s.additional_list}>
          <li className={s.additional_item}>
            <Link
              to={{
                pathname: `${url}/cast`,
                state: {
                  from: location.state ? location.state?.from : "/",
                },
              }}
              className={s.additional_link}
            >
              Cast
            </Link>
          </li>
          <li className={s.additional_item}>
            <Link
              to={{
                pathname: `${url}/reviews`,
                state: {
                  from: location.state ? location.state?.from : "/",
                },
              }}
              className={s.additional_link}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </Container>
      <>
        <Suspense fallback={<Loader />}>
          <Route path="/movie/:movieId/cast" component={Cast} />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Route path="/movie/:movieId/reviews" component={Reviews} />
        </Suspense>
      </>
    </Container>
  );
}
