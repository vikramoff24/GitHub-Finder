import React, { useState, useContext } from "react";
//Importing Github Context. as we manage state with Context API....we don't need to import prop types
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/alertContext";
const Search = () => {
  //intialing hooks
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const alertContext = useContext(AlertContext);

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alertContext.setAlert("Please enter Something", "light");
    } else {
      githubContext.searchUsers(text); //this text parameter is send to the function inside the github state file.
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Search Users..."
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
