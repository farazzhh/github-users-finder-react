import axios from "axios";
import React, { useEffect, useState } from "react";
import Reposetory from "../../components/reposetory/Reposetory";
import{Link} from 'react-router-dom'
import styles from "./userPage.module.scss";
const UserPage = (props) => {
  const [repos, setRepos] = useState([]);
  const [userProfile_data, setUserProfile_data] = useState([]);
  const { login } = props.match.params;

  useEffect(() => {
    async function userProfileData() {
      const userData = await axios.get(`https://api.github.com/users/${login}`);
      setUserProfile_data(userData.data);
    }
    async function repos_data() {
      const reposData = await axios.get(
        `https://api.github.com/users/${login}/repos`
      );
      console.log(reposData.data);
      setRepos(reposData.data);
    }

    userProfileData();
    repos_data();
    console.log(repos);
  }, []);
    return (
  <>
          <Link to='/'className="btn btn-info mb-2 d-inline" >Back</Link>
      <div className="container my-3">
      <div className="card">
        <div className="card-header row w-100 m-0 p-1">
          <div className="col-3 p-3">
            <img
              src={userProfile_data.avatar_url}
              alt="userProfile img"
              className={styles.user_profile_image}
            />
          </div>
          <div className="col-9 card-title">
            <div className={styles.userProfile_detail}>
              <div className={styles.profile_detail}>
                <div className="profile_detail_content mb-4">
                  <h1 className={styles.userName}>{login}</h1>
                </div>
              </div>
              <div className="row m-0">
                <div className="col-6 p-0">
                  {" "}
                  <span>
                    Name :{" "}
                    <h6 className="d-inline font-weight-bold">
                      {userProfile_data.name}
                    </h6>
                  </span>
                  <br />
                  <span>
                    Location :{" "}
                    <span className="font-weight-bold">
                      {userProfile_data.location}
                    </span>
                  </span>
                  <br />
                  <a href={userProfile_data.html_url}>Go to user`s Website</a>
                  <br />
                </div>
                <div className="col-6 p-0">
                  <span>
                    Hireable:{" "}
                    {userProfile_data.hireable
                      ? "yeah i'm ready to start"
                      : "Sorry ... i'm busy"}
                  </span>
                  <br />
                  <span> Followers : {userProfile_data.followers}</span>
                  <br />
                  <span> Followings : {userProfile_data.following}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className={styles.user_profile_repsos}>
            <h3 className="text-capitalize mb-4">{login}'s   Reposetory : </h3>
            {repos.map((repo, index) => (
              <Reposetory repo={repo} key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserPage;
