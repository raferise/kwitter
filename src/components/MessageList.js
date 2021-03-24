import React from "react";
import { useStore } from "../store/store";
import { useEffect } from "react";
import MessageItem from "../components/MessageItem";
import MakeAccountCard from "../components/MakeAccountCard";
import MakePostCard from "../components/MakePostCard";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function MessageList(props) {
  const { user, messages, loadMoreMessages } = useStore(state => state);

  useEffect(() => {
    loadMoreMessages(props.username);
  }, [loadMoreMessages, props.username]);
  
  return (
    <Container fluid="md">
      {props.username ? 
        (user.token && props.username === user.username) ? <MakePostCard /> : "" //logged in on own user page
        :
        (user.token) ? <MakePostCard /> : <MakeAccountCard /> //logged in on homepage
      }
      {messages.map(msg => (
        <MessageItem key={msg.username+msg.createdAt} message={msg}/>
      ))}
      <Button block className="mt-4" onClick={(event) => loadMoreMessages(props.username)}>Load More Messages</Button>
    </Container>
  )
}

export default MessageList