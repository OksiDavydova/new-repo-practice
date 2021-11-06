import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { fetchMoviesByTrending } from "../serviceApi/serviceApi";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  
  const handleClick = () => {
    navigate("/movie/*", { state: { props: "success" } });
  };

  const location = useLocation();
  console.log("home page location", location);

  useEffect(() => {
    fetchMoviesByTrending()
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Home page</h1>
      <button type="button" onClick={handleClick}>
        Button
      </button>
      <ul>
        {movies.map(({ id, poster_path, original_title }) => (
          <li key={id}>
            <Link
              to={`movie/${id}`}
              state={{
                poster_path,
                original_title,
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={original_title}
              />
              <p>{original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// import Loader from "../components/Loader/Loader";
// import { fetchMoviesByTrending } from "../serviceApi/serviceApi";
// import { MovieItem } from "../components/MovieItem/MovieItem";
// import { Button } from "../components/Button/Button";
// import s from "../style/list.module.css";
// import style from "../style/LoaderButton.module.css";
// import { Link, useLocation } from "react-router-dom";
// import ScrollToLoadBtn from "../components/ScrollToLoadBtn";

// const [movies, setMovies] = useState([]);
// const [loading, setLoading] = useState(false);
// const [page, setPage] = useState(1);
// const [status, setStatus] = useState("init");
// const location = useLocation();

// useEffect(() => {
//   setStatus("pending");
//   fetchMoviesByTrending(page)
//     .then((data) => {
//       if (page === 1) {
//         setMovies(data);
//       } else {
//         setMovies((prev) => [...prev, ...data]);
//       }
//       setStatus("success");
//       setLoading(false);
//       ScrollToLoadBtn();
//     })
//     .catch((err) => {
//       console.log(err);
//       setStatus("error");
//     });
// }, [page]);

// const onClickLoadMore = () => {
//   setLoading(true);
//   setPage((page) => page + 1);
// };
// // console.log(movies);

// if (status === "init") {
//   return <h1>Hello! Are you want to find something...</h1>;
// }
// if (status === "pending") {
//   return <Loader />;
// }
// if (status === "success") {
//   return (
//     <>
//       <h1 className={s.title}>Trending today</h1>

//       <ul className={s.list_home_page}>
//         {movies.map(({ id, poster_path, original_title }) => (
//           <Link
//             to={{
//               pathname: `movie/${id}`,
//               state: {
//                 from: location,
//                 label: "back to home",
//               },
//             }}
//             // onClick={() => onClick(id)}
//             key={id}
//           >
//             <MovieItem
//               key={id}
//               poster_path={poster_path}
//               original_title={original_title}
//             />
//           </Link>
//         ))}
//       </ul>
//       <Button onClickLoadMore={onClickLoadMore}>
//         {loading ? (
//           <>
//             <span className={style.loader}></span>
//             <span>Fetch data</span>
//           </>
//         ) : (
//           <span>Loading more</span>
//         )}
//       </Button>
//     </>
//   );
// }
// if (status === "error") {
//   return <h1>Sorry!!!</h1>;
// }
