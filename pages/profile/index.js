import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

const Profile = () => {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    const res = await fetch("http://localhost:3000/api/hello");
    const profile = await res.json();
    setProfileData(profile);
  };

  return (
    <div className={styles.container}>
      <h1>Bienvenido {profileData?.name}</h1>
    </div>
  );
};

export default Profile;
