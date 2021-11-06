import { lazy } from "react";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: 'Home page'*/)
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

    path: "/*",
    component: HomePage,
  },
  {
    id: 103,
    name: "Movie detail page",

    path: "/movie/*",
    component: MovieDetailPage,
  },
  {
    id: 104,
    name: "Not found page",

    path: "/notFound",
    component: NotFoundPage,
  },
];
