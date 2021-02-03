import React, { useState } from "react";
import Alert from "../Alert/Alert";

const Search = ({ searchData }) => {
  const [search, setSearch] = useState("");
  const [showAlert, setAlert] = useState(false);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
    const clickHandler = () => {
        if (search === "") {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000);
          return
      }
    searchData(search);
  };
  return (
    <div className="container card mt-2 py-2">
      <p className="card-header">Search GitHub User</p>

      <input
        type="text"
        placeholder="Enter Username Github"
        onChange={changeHandler}
        value={search}
        className="my-2"
      />
      <button className="btn bg-info" onClick={clickHandler}>
        Find
      </button>
      {showAlert ? <Alert /> : null}
    </div>
  );
};

export default Search;
