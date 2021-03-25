import React from "react";
import { useState, useEffect } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import { getUser } from "../fetchRequests";

function LikeIndicator(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(props.like.username).then(resp => setUser(resp.user));
  }, [props.like.username]);

  return (
    <OverlayTrigger delay={100} overlay={<Tooltip>@{props.like.username}</Tooltip>}>
      <Link to={"/users/"+props.like.username}>
        <img width={32} height={32} src={user.pictureRaw} alt=""/>
      </Link>
    </OverlayTrigger>
  )

}
// style={{transform:`translateX(-${28*i}px)`}}
export default LikeIndicator;