import React from "react";
import { Link } from "react-router-dom";

function Edit(props) {
  return (
    <>
      <h1>Edit Placeholder{props.match.params.username}</h1>
    </>
  );
}

export default Edit;