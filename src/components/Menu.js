import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/store";
import { logoutRequest } from "../fetchRequests";

function Menu(props) {
  const user = useStore((state) => state.user);
  const dispatchLogout = useStore((state) => state.logout);

  const handleLogout = (e) => {
    logoutRequest(user.token).then(()=>dispatchLogout());
  };

  return (
    <div id="menu">
      <h1>Kwitter</h1>
      <div id="menu-links">
        <Link to="/messages">Messages</Link>
        {user.token && <button onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  );
};

export default Menu;
