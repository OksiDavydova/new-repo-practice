import PropTypes from "prop-types";
import { useState } from "react";
import s from "./Searchbar.module.css";
import { ToastContainer, toast } from "react-toastify";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = ({ target }) => {
    const searchNormalize = target.value.toLowerCase();
    setSearchQuery(searchNormalize);
  };

  const handleSubmit = (e) => {
    // console.log(e);
    e.preventDefault();

    if (searchQuery.trim() === "") {
      reset();
      return toast.error("Enter a keyword!");
    }
    // console.log("search query", searchQuery);
    onSubmit(searchQuery);
    reset();
  };

  const reset = () => {
    setSearchQuery("");
  };

  return (
    <header className={s.searchbar}>
      <form className={s.search_form} onSubmit={handleSubmit}>
        <button type="submit" className={s.search_form_button}>
          <span className={s.button_label}>Search</span>
        </button>

        <input
          className={s.search_form_input}
          type="text"
          value={searchQuery}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </form>
      <ToastContainer theme="dark" />
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
