import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useStore } from "../store/store";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getUser } from "../fetchRequests";
import LikeIndicator from "./LikeIndicator";
import SpinnerContent from "./SpinnerContent";

function MessageItem(props) {
  const currentUser = useStore((state) => state.user);
  const { removeMessage, likeMessage, unlikeMessage } = useStore((state) => state);
  const [user, setUser] = useState({});
  const [deleting, setDeleting] = useState(false);
  const [liking, setLiking] = useState(false);
  const [unliking, setUnliking] = useState(false);
  
  async function handleLike(event) {
    setLiking(true);
    await likeMessage(currentUser.token, props.message.id);
    setLiking(false);
  }

  async function handleUnlike(event) {
    setUnliking(true);
    let likeId = props.message.likes.find(like => like.username === currentUser.username).id;
    await unlikeMessage(currentUser.token, props.message.id, likeId);
    setUnliking(false);
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

  

  function getDateString(date) {
    return (
      date.toLocaleDateString([], { year:'numeric', month:'short', day:'numeric' }) +
      " at " +
      date.toLocaleTimeString([], {timeStyle: 'short'})
    )
  }

  return (
    <>
      <Card className="message-item mt-4" style={{opacity:deleting?0.5:1}}>
        <Card.Body>
          <div className="userheader pb-4">
            <Link to={"/user/"+user.username}>
              <img width={64} height={64} className="mr-3" src={user.pictureRaw} alt=""/>
            </Link>
            <div>
              <Link to={"/user/"+user.username}><Card.Title>{user.displayName}</Card.Title></Link>
              <Link to={"/user/"+user.username}><Card.Subtitle className="mb-2 text-muted">@{props.message.username}</Card.Subtitle></Link>
            </div>
            <div>
              {props.message.username === currentUser.username && <span>
                <Button variant="outline-danger" onClick={handleDelete} disabled={deleting || liking || unliking} className="ml-2">
                  <SpinnerContent spinWhen={deleting}>Delete</SpinnerContent>
                  </Button>
              </span>}
            </div>
          </div>
          <Card.Text className="mt-3">
            {props.message.text}
          </Card.Text>
          <Card.Text className="text-muted text-sm datebar">
            Posted {getDateString(new Date(props.message.createdAt))}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="likebar">
            <span className="text-muted mr-2">{props.message.likes.length} Like{props.message.likes.length === 1 ? "" : "s"}</span>
            <span>{props.message.likes.map((like, i) => <LikeIndicator key={"p"+props.message.id+"like"+like.id} like={like} />)}</span>
            <div className="align-right">
              {(props.message.likes.findIndex(like => like.username === currentUser.username) !== -1 ? 
                <Button variant="outline-info" onClick={handleUnlike} disabled={(!currentUser.token) || deleting || liking || unliking}>
                  <SpinnerContent spinWhen={unliking}>Unlike</SpinnerContent>
                  </Button>
                :
                <Button variant="success" onClick={handleLike} disabled={(!currentUser.token) || deleting || liking || unliking}>
                  <SpinnerContent spinWhen={liking}>Like</SpinnerContent>
                  </Button>
              )}
            </div>
          </Card.Footer>
      </Card>
    </>
  )
}

export default MessageItem;