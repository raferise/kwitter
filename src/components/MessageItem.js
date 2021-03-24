import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useStore } from "../store/store";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getUser } from "../fetchRequests";
import LikeIndicator from "./LikeIndicator";

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
              {props.message.username === currentUser.username && <span>
                <Button variant="outline-danger" onClick={handleDelete} disabled={deleting}>Delete</Button>
              </span>}
            </div>
          </div>
          <Card.Text className="mt-3">
            {props.message.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="likebar">
            <span className="text-muted mr-2">{props.message.likes.length} Like{props.message.likes.length === 1 ? "" : "s"}</span>
            <span>{props.message.likes.map((like, i) => <LikeIndicator key={"p"+props.message.id+"like"+like.id} like={like} />)}</span>
            <div className="align-right">
              {liked ? 
                <Button variant="outline-info" onClick={handleUnlike}>Unlike</Button>
                :
                <Button variant="success" onClick={handleLike}>Like</Button>
              }
            </div>
          </Card.Footer>
      </Card>
    </>
  )
}

export default MessageItem;