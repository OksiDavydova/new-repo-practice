import { lazy } from "react";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: 'Home page'*/)
);
const SearchPage = lazy(() =>
  import("./views/SearchPage" /* webpackChunkName: 'Search page'*/)
);

const MovieDetailPage = lazy(() =>
  import("./views/MovieDetailPage" /* webpackChunkName: 'Movie detail page'*/)
);

export const NotFoundPage = lazy(() =>
  import("./views/NotFoundPage" /* webpackChunkName: 'Page not found'*/)
);
export const routes = [
  {
    id: 101,
    name: "Home page",
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    id: 102,
    name: "Search page",
    exact: true,
    path: "/search",
    component: SearchPage,
  },
  {
    id: 103,
    name: "Movie detail page",
    exact: true,
    path: "/movie/:movieId",
    component: MovieDetailPage,
  },
];
