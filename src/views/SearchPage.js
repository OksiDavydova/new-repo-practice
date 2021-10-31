import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Searchbar } from "../components/SearchBar/Searchbar";
import { fetchMoviesByKeyWord } from "../serviceApi/serviceApi";
import { MovieItem } from "../components/MovieItem/MovieItem";
import { Button } from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import s from "../style/list.module.css";
import style from "../style/LoaderButton.module.css";
import ScrollToLoadBtn from "../components/ScrollToLoadBtn";

export default function SearchPage() {
  const history = useHistory();
  const location = useLocation();
  const [query, sethQuery] = useState(() => {
    const queryFromUrl = new URLSearchParams(location.search).get("query");
    return queryFromUrl ? queryFromUrl : "";
  });
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState("init");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const onSubmit = (searchQuery) => {
    sethQuery(searchQuery);
    history.push({ ...location, search: `query=${searchQuery}` });
  };

  useEffect(() => {
    if (query) {
      setStatus("pending");
      fetchMoviesByKeyWord(query, page)
        .then((data) => {
          // console.log(data);
          if (page === 1) {
            setResult(data);
          } else {
            setResult((prev) => [...prev, ...data]);
          }
          setStatus("success");
          setLoading(false);
          ScrollToLoadBtn();
        })
        .catch((err) => {
          console.log(err);
          setStatus("error");
        });
    }
  }, [query, page]);

  const onClickLoadMore = () => {
    setLoading(true);
    setPage((page) => page + 1);
  };
  // console.log(result);
  return (
    <>
      <Searchbar onSubmit={onSubmit} />

      {status === "pending" && <Loader />}
      {status === "success" && result.length > 0 && (
        <>
          <ul className={s.list_home_page}>
            {result.map(({ id, poster_path, original_title }) => (
              <Link
                to={{
                  pathname: `movie/${id}`,
                  state: {
                    from: location,
                    label: "back to search",
                  },
                }}
                key={id}
              >
                <MovieItem
                  key={id}
                  poster_path={poster_path}
                  original_title={original_title}
                />
              </Link>
            ))}
          </ul>
          <Button onClickLoadMore={onClickLoadMore}>
            {loading ? (
              <>
                <span className={style.loader}></span>
                <span>Fetch data</span>
              </>
            ) : (
              <span>Loading more</span>
            )}
          </Button>
        </>
      )}
      {status === "success" && result.length === 0 && (
        <p>
          Sorry we haven't any information for your query: '{query}',please
          enter a keyword
        </p>
      )}
      {status === "error" && <h1>Sorry!!!</h1>}
    </>
  );
}
