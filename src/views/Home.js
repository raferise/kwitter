import React from "react";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import TestHub from "../views/TestHub";



function Home(props) {
  return (
  <>
    <Header />
    <MessageList />
    <TestHub />
  </>
  );
}

export default Home;
