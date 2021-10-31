import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";
import { Footer } from "./components/Footer/Footer";
const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: 'Home page'*/)
);
const SearchPage = lazy(() =>
  import("./views/SearchPage" /* webpackChunkName: 'Search page'*/)
);
const NotFoundPage = lazy(() =>
  import("./views/NotFoundPage" /* webpackChunkName: 'Page not found'*/)
);

const MovieDetailPage = lazy(() =>
  import("./views/MovieDetailPage" /* webpackChunkName: 'Movie detail page'*/)
);

const App = () => {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route path="/movie/:movieId">{<MovieDetailPage />}</Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

// {/*
// {routes.map(({ exact, path, component, id }) => {
//   return (
//     <Route exact={exact} path={path} component={component} key={id} />
//   );
// })} */}
