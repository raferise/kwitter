import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { useStore } from "../store/store";

function MakeAccountCard(props) {
  const { user, addMessage } = useStore((state) => state);
  const text = useRef();
  

  function handlePost(event) {
    event.preventDefault();
    if (text.current.value.length >= 2 && addMessage(user.token, text.current.value)) {
      text.current.value = "";
    };
  }

  return (
    <Card className="make-post mt-4">
      <Card.Body>
       <Form>
          <Form.Group>
            <Form.Control as="textarea" size="lg" rows={5} placeholder="Say something..." ref={text}/>
          </Form.Group>
        <Button variant="primary" type="submit" onClick={handlePost}>Post</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default MakeAccountCard