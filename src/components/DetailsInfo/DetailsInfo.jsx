import s from "../DetailsInfo/DetailsInfo.module.css";
import defaultIMG from "../images/defaultIMG.jpg";
import Stars from "../Stars/Stars";
import Container from "../Container/Container";

export default function DetailsInfo({ movie }) {
  const {
    poster_path,
    original_title,
    title,
    vote_average,
    release_date,
    overview,
    genres,
  } = movie;
  const pathToImg = "https://image.tmdb.org/t/p/w500";

  return (
    <Container>
      <h2 className={s.subhead}>Original title: {original_title}</h2>
      <div className={s.detail_wrapper}>
        <img
          src={poster_path ? `${pathToImg}/${poster_path}` : defaultIMG}
          alt={title}
          className={s.detail_img}
        />

        <div className={s.detail_info}>
          <h3>Genres:</h3>
          <ul className={s.detail_genres}>
            {genres &&
              genres.map(({ id, name }) => (
                <li key={id} className={s.detail_genres_item}>
                  {name}
                </li>
              ))}
          </ul>
          <p>Release data: {release_date}</p>
          <span>
            Vote average: <Stars stars={vote_average} />
          </span>
          <h4>{title}</h4>
          <span>{overview}</span>
        </div>
      </div>
    </Container>
  );
}
