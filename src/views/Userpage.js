import React from "react";
import { Link } from "react-router-dom";

function Userpage(props) {
  return (
    <>
      <h1>Userpage Placeholder{props.match.params.username}</h1>
    </>
  );
}

export default Userpage;