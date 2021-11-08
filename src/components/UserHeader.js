import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useStore } from "../store/store";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import { getUser } from "../fetchRequests";

function UserHeader(props) {
  const currentUser = useStore((state) => state.user)
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(props.username).then(resp => setUser(resp.user));
  }, [props.username]);

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand className="" as={Link} to="/">
          <Button block variant="outline-secondary">{"❮"}</Button>
        </Navbar.Brand>
        <img
          width={128}
          height={128}
          className="ml-3 big-portrait"
          src={user.pictureRaw}
          alt="Profile Pic"
        />
        <Card.Body>
          <div>
            <div>
              <Card.Title>{user.displayName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                @{user.username}
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text>{user.about}</Card.Text>
        </Card.Body>
        {user && currentUser.token && currentUser.username === user.username && <Link to={"/user/"+user.username+"/edit"}><Button variant="primary">Edit Profile</Button></Link>}
      </Navbar>
    </>
  );
}

export default UserHeader;
