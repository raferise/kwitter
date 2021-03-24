import React from "react";
import { useStore } from "../store/store";
import { useEffect } from "react";
import MessageItem from "../components/MessageItem";
import MakeAccountCard from "../components/MakeAccountCard";
import MakePostCard from "../components/MakePostCard";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from "react-bootstrap/Card";


function MessageList(props) {
  const { user, messages, loadMoreMessages, clearMessages, hasMore } = useStore(state => state);

  function handleScroll(event) {
    loadMoreMessages(props.username);
  }

  function handleRefresh(event) {
    clearMessages();
    loadMoreMessages(props.username);
  }

  useEffect(() => {
    loadMoreMessages(props.username);
  }, [loadMoreMessages, props.username]);
  
  return (
    <InfiniteScroll
      dataLength={messages.length} //This is important field to render the next data
      next={handleScroll}
      hasMore={hasMore}
      loader={<Container fluid="md">
                <Card className="mt-4 mb-4 center pt-4 pb-4">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </Card>
              </Container>}
      endMessage={<Container fluid="md center">
                    <Button variant="outline-secondary" disabled={true} className="mt-4 mb-4">You have reached the end</Button>
                </Container>}
      refreshFunction={handleRefresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <Container fluid="md center">
          <Button variant="outline-secondary" disabled={true} className="mt-4 mb-4">&#8595; Pull down to refresh</Button>
        </Container>
      }
      releaseToRefreshContent={
        <Container fluid="md center">
          <Button variant="outline-secondary" disabled={true} className="mt-4 mb-4">&#8593; Release to refresh</Button>
        </Container>
    }>
        <Container fluid="md">
          {props.username ? 
            (user.token && props.username === user.username) ? <MakePostCard /> : "" //logged in on own user page
            :
            (user.token) ? <MakePostCard /> : <MakeAccountCard /> //logged in on homepage
          }
          {messages.map(msg => (
            <MessageItem key={msg.username+msg.createdAt} message={msg}/>
          ))}
          
          
        </Container>
    </InfiniteScroll>
  )
}

export default MessageList