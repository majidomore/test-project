import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileComponent from "../components/ProfileComponent";

const Home = () => {
  let [profiles, setProfiles] = useState([]);
  let http = axios;

  const getProfiles = async () => {
    let res = await http.get(
      "https://623b812c2e056d1037f389c0.mockapi.io/Users"
    );

    setProfiles((profiles = res.data));
  };

  useEffect(() => {
    getProfiles();
  }, []);

  if (profiles.length !== 0) {
    return (
      <>
        {profiles.map((user, index) => {
          return (
            <React.Fragment key={index}>
              <ProfileComponent
                img={user.profile_picture}
                username={user.username}
                firstName={user.profile.firstName}
                lastName={user.profile.lastName}
                knowIps={user.knownIps}
              />
            </React.Fragment>
          );
        })}
      </>
    );
  } else return null;
};

export default Home;
