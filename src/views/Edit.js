import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useRef, useState } from "react";
import { useStore } from "../store/store";
import SpinnerContent from "../components/SpinnerContent";
import Modal from "react-bootstrap/Modal";
import Header from "../components/Header";

function Edit(props) {
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
    if (user.token) {
      username.current.value = user.username;
      displayName.current.value = user.displayName;
      about.current.value = user.about;
    } else {
      setRedirect("/");
    }
  }, [user])

  if (redirect)
  return (
    <Redirect to={redirect} />
  )

  return (
    <>
      <Header />
      <Container fluid="md" className="mt-5">
        <div className="flex-hcenter">
         <h1 className="inline-header">Edit Your Account</h1>
         <div className="align-right">
             <span>
              <Button variant="danger" onClick={(event) => setShowModal(true)} disabled={editing || deleting}> 
                <SpinnerContent spinWhen={deleting}>Delete Account</SpinnerContent>
              </Button>
            </span>
          </div>
        </div>
        <Form className="mt-5">
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" ref={username} readOnly  />
            <Form.Text className="text-muted">
              You can't change your unique Kwitter handle
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>New Display Name</Form.Label>
            <Form.Control type="text" placeholder="Display Name" ref={displayName} disabled={editing || deleting} />
            
          </Form.Group>

          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={password} disabled={editing || deleting} />
          </Form.Group>

          <Form.Group>
            <Form.Label>New Bio</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="About me" ref={about} disabled={editing || deleting}/>
          </Form.Group>

          <div className="align-right">
            <Button variant="primary" className="mr-2" type="submit" onClick={handleSubmit} disabled={editing || deleting}> 
              <SpinnerContent spinWhen={editing}>Save</SpinnerContent>
            </Button>
            <Button variant="secondary" type="cancel" onClick={(event) => setRedirect("/user/"+user.username)} disabled={editing || deleting}> 
              Cancel
            </Button>
          </div>
        </Form>
      </Container>
      <Modal show={showModal} onHide={(event) => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Delete your account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>This will delete your account, all your messages, and all your likes.<br />This action cannot be undone.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={(event) => setShowModal(false)}>Cancel</Button>
          <Button variant="danger" type="submit" onClick={(event) => {setShowModal(false); handleDelete(event)}}>Permanently Delete My Account</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Edit;