import React from "react";
import "./Profile.scss";
import Profilemain from '../../components/Profile-card/profile-main'
function Profile() {
  return (
    <div className="profile-main">
      <div className="profile-main-container">
        <section>
          <Profilemain />
        </section>
      </div>
    </div>
  );
}

export default Profile;
