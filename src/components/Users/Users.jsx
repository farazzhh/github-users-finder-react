import React from 'react'
import User from "../User/User";

const Users = ({users , user_profile}) => {
    return (
      <div className="container text-center">
        <div className="row mx-auto">
          {users &&
            users.map((user, index) => (
              <User key={index} user={user} user_profile={user_profile} />
            ))}
        </div>
      </div>
    );
}


export default Users
