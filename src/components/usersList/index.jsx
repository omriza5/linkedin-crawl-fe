import React from "react";
import User from "../user/index";

import "./style.css";
const UsersList = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <User user={user} />
      ))}
    </>
  );
};

export default UsersList;
