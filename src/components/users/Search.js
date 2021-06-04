import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import GithubContext from "../../components/context/github/githubContext";

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search users'
          value={text}
          onChange={handleOnChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
