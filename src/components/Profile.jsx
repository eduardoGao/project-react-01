import React from 'react';
import '../styles/components/Profile.scss';


const Profile = ({ profile }) => {
  return (
    <>
      <section className="container">
        <div className="Profile">
          <h2>Profile</h2>
          <p>{profile}</p>

        </div>

      </section>
    </>
  );
};

export default Profile;
