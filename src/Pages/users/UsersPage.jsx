import React from 'react'
import Search from '../../components/Search/Search'
import Users from '../../components/Users/Users'
import Spinner from '../../components/Spinner/Spinner'
const UsersPage = ({ searchData , showSpinner ,users,user_profile }) => {
  return (
    <div>
      <Search searchData={searchData} />
      {showSpinner ? <Spinner /> : <Users users={users} user_profile={user_profile} />}
    </div>
  );
};

export default UsersPage
       