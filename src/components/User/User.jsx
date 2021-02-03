import React from "react";
import styles from "./user.module.scss";
import { Link } from "react-router-dom";
import { UserProfile } from "../../Pages/userprofile/UserProfile";

const User = ({ user }) => {
  return (
    <div className="col-3 mt-3 user-section">
      <div className="card">
        <div className="card-body m-1">
          <img
            src={user.avatar_url}
            alt={user.login}
            className={styles.img_avatar}
          />
          <h4>{user.login}</h4>
          <Link
            to={{ pathname: `/users/${user.login}` }}
            className="btn btn-sml bg-success"
          >
          Read More...</Link>
        </div>
      </div>
    </div>
  );
};

export default User;
