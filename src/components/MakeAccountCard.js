import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function MakeAccountCard(props) {

  return (
    <Card className="make-account-suggestion mt-4">
      <Card.Body>
        <h2 className="mb-4 mt-4">Want to share what's going on in your world?</h2>
        <Link to="/signup"><Button variant="primary" size="lg">Create Account</Button></Link>
        <Card.Text className="mt-3">
          Already have one? <Link to="/login">Sign In</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MakeAccountCard