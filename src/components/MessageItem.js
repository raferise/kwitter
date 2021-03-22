import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useStore } from "../store/store";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function MessageItem(props) {
  const currentUser = useStore((state) => state.user.username);
  // const getUser = useStore((state) => state.getUser);
  const getUser = () => ({
    username: "username",
    displayName: "Display Name",
    about: "I am a person",
    createdAt: "2021-03-22T20:03:58.891Z",
    updatedAt: "2021-03-22T20:03:58.891Z",
    pictureLocation: "placeholder.png",
    googleId: "string"});
  const [liked, setLiked] = useState(props.liked || false);
  const [user, setUser] = useState({});
  
  function handleUnlike(event) {
    setLiked(false);
  }

  function handleLike(event) {
    setLiked(true);
  }

  useEffect(() => {
    setUser(getUser(props.username));
  }, [props.username, getUser]);

  return (
    <>
    <Card className="mt-4">
      <Card.Body>
        <div className="userheader">
          <Link to={"/users/"+user.username}>
            <img width={64} height={64} className="mr-3" src={user.pictureLocation} alt="Profile Pic"/>
          </Link>
          <div>
            <Link to={"/users/"+user.username}><Card.Title>{user.displayName}</Card.Title></Link>
            <Link to={"/users/"+user.username}><Card.Subtitle className="mb-2 text-muted">@{user.username}</Card.Subtitle></Link>
          </div>
          <div>  
            {user.username === currentUser && <span><Button variant="outline-danger">Delete</Button></span>}
          </div>
        </div>
      <Card.Text className="mt-3">
        {props.message.text}
      </Card.Text>
      <div className="likebar">
        {liked ? 
          <Button variant="outline-info" onClick={handleUnlike}>Unlike</Button>
          :
          <Button variant="success" onClick={handleLike}>Like</Button>
        }
      </div>
      </Card.Body>
    </Card>
    </>
  )
}

export default MessageItem;