import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, setAlert }) => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
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
  searchUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
