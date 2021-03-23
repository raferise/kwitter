import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <h1>Pages</h1>
      <ul>
        <li><Link to="/login" >Login</Link></li>
        <li><Link to="/signup" >Signup</Link></li>
        <li><Link to="/user/:username" >Userpage</Link></li>
        <li><Link to="/user/:username/edit" >Edit</Link></li>
        <li><Link to="/debug" >TestHub</Link></li>
      </ul>
    </>
  );
}

export default Home;
