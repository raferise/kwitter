import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { useRef, useState } from "react";
import { useStore } from "../store/store";

function MakeAccountCard(props) {
  const { user, addMessage } = useStore((state) => state);
  const [posting, setPosting] = useState(false);
  const text = useRef();
  

  async function handlePost(event) {
    setPosting(true);
    event.preventDefault();
    if (text.current.value.length >= 2 && await addMessage(user.token, text.current.value)) {
      text.current.value = "";
    };
    setPosting(false);
  }

  function buttonSpinner(text, spin) {
    if (!spin) return <span>{text}</span>
    return <><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/> <span>{text}</span></>
  }

  return (
    <Card className="make-post mt-4">
      <Card.Body>
       <Form>
          <Form.Group>
            <Form.Control as="textarea" size="lg" rows={5} placeholder="Say something..." ref={text} disabled={posting}/>
          </Form.Group>
          <div className="align-right">
            <Button variant="primary" type="submit" onClick={handlePost} disabled={posting}>{buttonSpinner("Post", posting)}</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default MakeAccountCard