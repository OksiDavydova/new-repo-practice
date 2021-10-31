import s from "./Cast.module.css";
import defaultImgActors from "../images/defaultImgActors.jpg";
import PropTypes from "prop-types";

export default function CastItem({ actors }) {
  const pathToImg = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <ul className={s.actors_list}>
        {actors.map(({ id, name, character, profile_path }) => (
          <li key={id} className={s.actors_item}>
            <img
              src={
                profile_path ? `${pathToImg}/${profile_path}` : defaultImgActors
              }
              alt={name}
              className={s.actors_img}
            />
            <h3>{name}</h3>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

CastItem.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profile_path: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};
