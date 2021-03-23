import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MakeAccountCard(props) {

  return (
    <Card className="make-post mt-4">
      <Card.Body>
        Say something...
        <Button variant="primary">Post</Button>
      </Card.Body>
    </Card>
  )
}

export default MakeAccountCard