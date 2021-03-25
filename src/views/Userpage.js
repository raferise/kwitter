import React from "react";
import { Link } from "react-router-dom";

function Userpage(props) {
  return (
    <>
      <h1>Userpage Placeholder</h1>
      <Link to={props.location.pathname+"/edit"}>{props.match.params.username}</Link>
    </>
  );
}

export default Userpage;