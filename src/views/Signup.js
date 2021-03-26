import React from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useRef, useState } from "react";
import { useStore } from "../store/store";
import SpinnerContent from "../components/SpinnerContent"
import Header from "../components/Header";

function Signup(props) {
  const [creating, setCreating] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const {login, signup}  = useStore((state) => state);

  const username = useRef();
  const displayname = useRef();
  const password = useRef();

  async function handleSubmit(event) {
    setCreating(true);
    event.preventDefault();
    if (
      username.current.value && displayname.current.value && password.current.value &&
      await signup(username.current.value, displayname.current.value, password.current.value) &&
      await login(username.current.value, password.current.value)
    ) {
      setLoggedIn(true);
    }
    setCreating(false);
  }

  if (loggedIn)
  return (
    <Redirect to="/" />
  )

  return (
    <>
      <Header />
     <Container fluid="md" className="mt-5">
        <h1>Signup for Kwitter!</h1>
        <Form className="mt-5">
          <Form.Group>
            <Form.Label>Create Username</Form.Label>
            <Form.Control type="text" placeholder="Username" ref={username} disabled={creating}  />
            <Form.Text className="text-muted">
              This will be your unique Kwitter handle.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Display Name</Form.Label>
            <Form.Control type="text" placeholder="Display Name" ref={displayname} disabled={creating} />
            
          </Form.Group>

          <Form.Group>
            <Form.Label>Create Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={password} disabled={creating} />
          </Form.Group>
          
          <Button variant="primary" type="submit" onClick={handleSubmit} disabled={creating}> 
            <SpinnerContent spinWhen={creating}>Create Account</SpinnerContent>
          </Button>
        </Form>
      </Container>
    </>
  );
}


export default Signup;