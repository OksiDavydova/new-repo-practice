import React, { Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";

// const HomePage = lazy(() =>
//   import("./views/HomePage" /* webpackChunkName: 'Home page'*/)
// );

// const NotFoundPage = lazy(() =>
//   import("./views/NotFoundPage" /* webpackChunkName: 'Page not found'*/)
// );

// const MovieDetailPage = lazy(() =>
//   import("./views/MovieDetailPage" /* webpackChunkName: 'Movie detail page'*/)
// );

const App = () => {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <NavLink to="/"> Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/movie/*"> Movie detail Page</NavLink>
          </li>
        </ul>
      </header>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          {routes.map(({ path, id, component: Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
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

// {/* <Route exact path="/">
//   <HomePage />
// </Route>

// <Route path="/movie/:movieId">{<MovieDetailPage />}</Route>
// <Route component={NotFoundPage} /> */}
