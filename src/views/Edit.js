import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useRef, useState } from "react";
import { useStore } from "../store/store";
import Spinner from "react-bootstrap/Spinner"
import { getUser, logoutRequest } from "../fetchRequests";

function Edit(props) {
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { user, edit, deleteAccount, login }  = useStore((state) => state);

  const username = useRef();
  const displayName = useRef();
  const password = useRef();
  const about = useRef();

  async function handleSubmit(event) {
    setEditing(true);
    event.preventDefault();
    if (username.current.value && displayName.current.value && password.current.value && 
      await edit(user.token, username.current.value, displayName.current.value, password.current.value, about.current.value)
    ) {
      await login(username.current.value, password.current.value);
      setRedirect("/user/"+username.current.value);
      }
    setEditing(false);
  }

  async function handleDelete(event) {
    setDeleting(true);
    event.preventDefault();
    if (await deleteAccount(user.token, user.username)) {
      setRedirect("/");
    }
    setDeleting(false);
  }

  function buttonSpinner(text, spin) {
    if (!spin) return <span>{text}</span>
    return <><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/> <span>{text}</span></>
  }

  useEffect(() => {
    if (user.token && (!editing)) {
      username.current.value = user.username;
      displayName.current.value = user.displayName;
      about.current.value = user.about;
    } else {
      setRedirect("/");
    }
  }, [user, editing])

  if (redirect)
  return (
    <Redirect to={redirect} />
  )

  return (
    <>
     <Container fluid="md" className="mt-5">
       <div>
         <h1>Edit Your Account</h1>
         <div className="align-right">
            <Button variant="danger" type="submit" onClick={handleDelete} disabled={editing}> 
              {buttonSpinner("Delete Your Account", deleting)} 
            </Button>
          </div>
       </div>
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" ref={username} disabled  />
            <Form.Text className="text-muted">
              You can't change your unique Kwitter handle
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>New Display Name</Form.Label>
            <Form.Control type="text" placeholder="Display Name" ref={displayName} disabled={editing} />
            
          </Form.Group>

          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={password} disabled={editing} />
          </Form.Group>

          <Form.Group>
            <Form.Label>New Bio</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="About me" ref={about} disabled={editing}/>
          </Form.Group>

          <div className="align-right">
            <Button variant="primary" className="mr-2" type="submit" onClick={handleSubmit} disabled={editing}> 
              {buttonSpinner("Save", editing)} 
            </Button>
            <Button variant="secondary" type="cancel" onClick={(event) => setRedirect("/user/"+user.username)} disabled={editing}> 
              Cancel
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}


export default Edit;