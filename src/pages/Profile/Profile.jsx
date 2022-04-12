import React from "react";
import { useAuth } from "../../contexts";
import "./Profile.css";

export const Profile = () => {
  const { logoutHandler, user } = useAuth();
  return (
    <div className="profile-container">
      {user && (
        <>
          <div className="profile-heading-container">
            <h3 className="profile-heading">My Account</h3>
          </div>
          <div className="details-container">
            <div className="image-container">
              <img
                src="https://res.cloudinary.com/ajain8479/image/upload/v1649665775/undraw_male_avatar_323b_itgtgi.svg"
                alt="user-image"
              />
            </div>
            <div className="user-details-container">
              <div className="username">
                <span>Name :</span> {user.firstName + " " + user.lastName}
              </div>
              <div className="email">
                <span>Email :</span> {user.email}
              </div>
              <button onClick={logoutHandler} className="btn-logout">
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
