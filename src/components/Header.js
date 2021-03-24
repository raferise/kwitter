import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { useStore } from "../store/store";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";

function Header(props) {
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);

  
  function handleSignOut() {
    logout();
  }

  return (
  <>
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand className="mr-auto" as={Link} to="/">Kwitter Feed</Navbar.Brand>
      {user.token ? 
      <Dropdown className="invisible-dropdown">
        <Dropdown.Toggle variant="none">
          <div className="userheader">
            <div>
              <Card.Title>{user.displayName || "Display Name"}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">@{user.username}</Card.Subtitle>
            </div>
            <img width={64} height={64} className="ml-3" src={user.pictureRaw} alt="Profile Pic"/>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to={"/users/"+user.username}>Profile</Dropdown.Item>
          <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      : 
      <Link to="/login"><Button variant="outline-primary">Sign In</Button></Link>
    }
    </Navbar>
  </>
  )
}

export default Header;