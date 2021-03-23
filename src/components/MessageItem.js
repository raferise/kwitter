import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useStore } from "../store/store";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getUser } from "../fetchRequests";

function MessageItem(props) {
  const currentUser = useStore((state) => state.user);
  const { removeMessage } = useStore((state) => state);
  const [liked, setLiked] = useState(props.liked || false);
  const [user, setUser] = useState({});
  const [deleting, setDeleting] = useState(false);
  
  async function handleUnlike(event) {
    setLiked(false);
  }

  async function handleLike(event) {
    setLiked(true);
  }

  async function handleDelete(event) {
    setDeleting(true);
    if (!await removeMessage(currentUser.token, props.message.id)) {
      setDeleting(false);
    }
  }

  useEffect(() => {
    getUser(props.message.username).then(resp => setUser(resp.user));
  }, [props.message.username]);

  return (
    <>
      <Card className="message-item mt-4" style={{opacity:deleting?0.5:1}}>
        <div style={{position:"absolute", width:"100%", height:"100%", visibility:deleting?"visible":"hidden"}}></div>
        <Card.Body>
          <div className="userheader">
            <Link to={"/users/"+user.username}>
              <img width={64} height={64} className="mr-3" src={user.pictureRaw} alt=""/>
            </Link>
            <div>
              <Link to={"/users/"+user.username}><Card.Title>{user.displayName}</Card.Title></Link>
              <Link to={"/users/"+user.username}><Card.Subtitle className="mb-2 text-muted">@{props.message.username}</Card.Subtitle></Link>
            </div>
            <div>  
              {user.username === currentUser.username && <span>
                <Button variant="outline-danger" onClick={handleDelete} disabled={deleting}>Delete</Button>
              </span>}
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