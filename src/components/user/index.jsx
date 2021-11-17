import React from "react";
import "./style.css";

const User = ({ user }) => {
  return (
    <>
      <div className="user">
        <div className="user-img">
          <img
            src={
              user.image ||
              "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"
            }
            alt=""
          />
        </div>
        <div className="user-content">
          <p>{user.name}</p>
          <a href={user.linkedin} target="_blank">
            See Profile
          </a>
        </div>
      </div>
    </>
  );
};

export default User;
