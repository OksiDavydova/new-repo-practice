import React from "react";
// import { Link } from "react-router-dom";
import s from "./MovieItem.module.css";

export function MovieItem({ id, poster_path, original_title }) {
  return (
    <li key={id} className={s.item}>
      <img
        className={s.item_image}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title}
      />

      <p className={s.item_title}>{original_title}</p>
    </li>
  );
}
