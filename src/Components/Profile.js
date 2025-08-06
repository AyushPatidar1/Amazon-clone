import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./profile.css";
import Default from "../imgs/default.png";
import USER from "../imgs/user.png";
import contact from "../imgs/contact.png";
import LowerNav from "./LowerNav";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  document.title = "Profile section"

  // Static user data for demo
  const userData = {
    displayName: "Guest User",
    email: "guest@amazon.com"
  };

  return (
    <>
      <Navbar />
      <div className="profile-section">
        <div className="account-section animate">
          <div className="top-section">
            <p className="welcome-mssg">
              Welcome, {userData.displayName}
            </p>
          </div>
          <div className="account-section2">
            <div className="left-account-section">
              <img src={Default} className="profile-img" />
              <p className="profile-name">
                {userData.displayName}
              </p>
              <p className="profile-email">{userData.email}</p>
              <button
                onClick={() => {
                  navigate("/home"); 
                }}
                className="signout-btn"
              >
                Go to Home
              </button>
            </div>
            <div className="right-account-section">
              <p className="personal-info-head">Personal Information</p>
              <p className="personal-info-desc">
                Manage your personal information, including your contact
                details.
              </p>
              <div className="personal-user-data">
                <div className="personal-name">
                  <div className="name-section">
                    <p className="name-data">Name</p>
                    <img src={USER} className="user-photo" />
                  </div>
                  <p className="users-name">
                    {userData.displayName}
                  </p>
                </div>
                <div className="personal-mail">
                  <div className="mail-section">
                    <p className="mail-data">Contact</p>
                    <img src={contact} className="mail-photo" />
                  </div>
                  <p className="users-mail">{userData.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerNav">
        <LowerNav />
      </div>
      <Footer />
    </>
  );
}

export default Profile;
