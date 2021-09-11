import React, {useEffect, useContext } from 'react'
import UsersContext from '../../context/users/usersContext';
import User from "../User/User";

const Users = ({ user_profile}) => {
  const usersContext = useContext(UsersContext)
  const { users,getUsers } = usersContext;

  useEffect(() => {
    getUsers()
  }, [])
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
