import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function MovieDetailPage() {
  const location = useLocation();
  console.log("details page location", location);
  const params = useParams();
  console.log("param", params);

  const { poster_path, original_title } = location.state;

  return (
    <>
      <h1>Movie detail page</h1>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={original_title}
        />
      )}
    </>
  );
}

//  // <Container>
//       {/* <div className={s.detail}> */}
//       // <button type="button" onClick={handleClick} className={s.button_back}>
//       //   <Undo width="25px" />
//       //   <span className={s.button_label}>
//       //     {location?.state?.label ?? "go back"}
//       //   </span>
//       // </button>
//       {/* <DetailsInfo movie={movie} /> */}

//       {/* <Container>
//         <h2 className={s.additional_subhead}>Additional information</h2>
//         <ul className={s.additional_list}>
//           <li className={s.additional_item}>
//             <Link
//               to={{
//                 pathname: `${url}/cast`,
//                 state: {
//                   from: location.state ? location.state?.from : "/",
//                 },
//               }}
//               className={s.additional_link}
//             >
//               Cast
//             </Link>
//           </li>
//           <li className={s.additional_item}>
//             <Link
//               to={{
//                 pathname: `${url}/reviews`,
//                 state: {
//                   from: location.state ? location.state?.from : "/",
//                 },
//               }}
//               className={s.additional_link}
//             >
//               Reviews
//             </Link>
//           </li>
//         </ul>
//       </Container> */}
//       {/* <>
//         <Suspense fallback={<Loader />}>
//           <Route path="/movie/:movieId/cast" component={Cast} />
//         </Suspense>
//         <Suspense fallback={<Loader />}>
//           <Route path="/movie/:movieId/reviews" component={Reviews} />
//         </Suspense>
//       </> */}
//     </Container>
