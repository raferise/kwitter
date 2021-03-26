import React, { useState } from "react";
import { loginRequest } from "../fetchRequests";

import { useStore } from "../store/store";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login(props){
  const dispatchLogin = useStore((state) => state.login);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) =>
      dispatchLogin(userData)
    );
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
    <Form className="form-setup">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Phone, Email, or Username</Form.Label>
        <Form.Control type="email" placeholder="Phone, Email, or Username" />
        <Form.Text className="text-muted">
          We'll never share your login info with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      <Button variant="primary" type="submit">
      Login
      </Button>
  </Form>
    </>
  );
};

export default Login;
