import React from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useRef, useState } from "react";
import { useStore } from "../store/store";
import SpinnerContent from "../components/SpinnerContent";
import Header from "../components/Header";

function Signup(props) {
  const [loggingIn, setLoggingIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const {login}  = useStore((state) => state);

  const username = useRef();
  const password = useRef();

  async function handleSubmit(event) {
    setLoggingIn(true);
    event.preventDefault();
    if (
      username.current.value && password.current.value &&
      await login(username.current.value, password.current.value)
    ) {
      setLoggedIn(true);
    }
    setLoggingIn(false);
  }

  if (loggedIn)
  return (
    <Redirect to="/" />
  )

  return (
    <>
      <Header />
      <Container fluid="md" className="mt-5">
        <h1>Welcome to Kwitter!</h1>
        <Form className="mt-5">
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" ref={username} disabled={loggingIn}  />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={password} disabled={loggingIn} />
          </Form.Group>
          
          <Button variant="primary" type="submit" onClick={handleSubmit} disabled={loggingIn}> 
            <SpinnerContent spinWhen={loggingIn}>Sign In</SpinnerContent>
          </Button>
        </Form>
      </Container>
    </>
  );
}


export default Signup;