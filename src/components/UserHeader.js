import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useStore } from "../store/store";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import { getUser } from "../fetchRequests";

function UserHeader(props) {
  const [user, setUser] = useState({});
  const logout = useStore((state) => state.logout);

  useEffect(() => {
    getUser(props.username).then((user) => setUser(user));
  }, [getUser, props.username]);

  console.log(user);

  function handleSignOut() {
    logout();
  }

  return (
    <>
      {JSON.stringify(props.username)}
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand className="mr-auto" as={Link} to="/">
          Kwitter Feed
        </Navbar.Brand>
        <Card style={{ width: "35rem" }}>
          <Card.Body>
            <Card.Title>About</Card.Title>
            <Card.Text>{user.about}</Card.Text>
          </Card.Body>
        </Card>
        <Dropdown className="invisible-dropdown">
          <Dropdown.Toggle variant="none">
            <div className="userheader">
              <div>
                <Card.Title>{user.displayName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  @{user.username}
                </Card.Subtitle>
              </div>
              <img
                width={64}
                height={64}
                className="ml-3"
                src={user.pictureRaw}
                alt="Profile Pic"
              />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to={"/user/" + user.username}>
              Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </>
  );
}

export default UserHeader;
