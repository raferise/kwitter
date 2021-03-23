import React from "react";
import { useStore } from "../store/store";

function StoreTester(props) {
  const { user, login, logout, alerts, removeAlert, messages, loadMoreMessages } = useStore((state) => state);
  return (
    <>
      <p>
        <button onClick={event => login("test","test")}>Log in to account test:test</button>
        <button onClick={event => login("bad","bad")}>Log in to account bad:bad</button>
        <button onClick={event => logout()}>logout</button>
      </p>
      <p>
        Alerts:
      </p>
      <ul>
        {alerts.map(a => <li><b>{a.header}</b> {a.body} <button onClick={e => removeAlert(a.id)}>x</button></li>)}
      </ul>
      <p>
        Messages: <button onClick={event => loadMoreMessages(user.token ? user.username : undefined)}>Load 10 more for logged in user</button>
      </p>
      <ul>
        {messages.map(m => <li>{m.username}: {m.text}</li>)}
      </ul>
    </>
  );
}

function TestHub(props) {
  return (
    <>
      <StoreTester />
    </>
  )
}

export default TestHub;