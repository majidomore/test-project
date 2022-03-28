import React from "react";

const ProfileComponent = ({ img, firstName, lastName, username, knowIps }) => {
  return (
    <>
      <div className="profile">
        <div className="profile__img">
          <img src={img} alt="" />
        </div>
        <div className="profile__details">
          <div className="profile__details_name">
            <span>Name:</span>
            <p>
              {firstName} {lastName}
            </p>
          </div>
          <div className="profile__details_username">
            <span>Username:</span>
            <p>{username}</p>
          </div>
          <div className="profile__details_knownIps">
            <span>Known IPs:</span>
            <div className="profile__details_knownIps_ips">
              {knowIps.map((ip, index) => {
                return (
                  <React.Fragment key={index}>
                    <p>{ip}</p>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
