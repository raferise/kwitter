import React from "react";
import Header from "../components/Header";
import MessageItem from "../components/MessageItem";
import { useStore } from "../store/store";

import Container from "react-bootstrap/Container";

function Home(props) {
  const messages = useStore((state) => state.messages);
  const exampleMessage = {text:"VERY IMPORTANT MESSAGE: I am showing important things. I could write so much here, but I choose not to. So much time so many words so so so yes. Ok. Very cool. I hope this looks nice. How are you today? I don't actually care.",
  username:"test"};
  

  return (
  <>
    <Header />
    <Container fluid="md">
      <MessageItem message={exampleMessage}></MessageItem>
      {messages.map(msg => (
        <MessageItem message={msg}/>
      ))}
    </Container>
  </>
  );
}

export default Home;
