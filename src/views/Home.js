import React from "react";
import Header from "../components/Header";
import MessageItem from "../components/MessageItem";
import MakeAccountCard from "../components/MakeAccountCard";
import MakePostCard from "../components/MakePostCard";
import { useStore } from "../store/store";
import TestHub from "../views/TestHub";
import Container from "react-bootstrap/Container";


function Home(props) {
  const { messages, user } = useStore((state) => state);
  return (
  <>
    <Header />
    <Container fluid="md">
      {user.token ? <MakePostCard /> : <MakeAccountCard />}
      {messages.map(msg => (
        <MessageItem key={msg.username+msg.createdAt} message={msg}/>
      ))}
    </Container>
    <TestHub />
  </>
  );
}

export default Home;
