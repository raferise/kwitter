import React from "react";
import UserHeader from "../components/UserHeader";
import MessageList from "../components/MessageList";

function Userpage(props) {
  return (
    <>
      <UserHeader username={props.match.params.username} />
      <MessageList username={props.match.params.username} />
    </>
  );
}

export default Userpage;
