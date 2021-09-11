import React, { useReducer } from "react";
import UsersContext from "./usersContext";
import usersReducer from "./usersReducer";
import axios from "axios";
import { GETUSERS, LOADINGUSERS, FAILGETUSERS } from "../type";
const UsersState = (props) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(usersReducer, initialState);

  const getUsers = async () => {
    try {
      const result = await axios.get(
        `https://api.github.com/users`
      );
      dispatch({
        type: GETUSERS,
        payload: result.data,
      });
    } catch (error) {}
  };
    const searchUsers = async ({textInput}) => {
        try {
            const result = await axios.get(
              `https://api.github.com/search/users?q=${textInput}&clinet_id=${process.env.REACT_APP_GITHUB_REACT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_REACT_CLIENT_SECRET}`
            );
            dispatch({
                type: GETUSERS,
                payload: result.data
            })
        } catch (error) {
            
        }
    }

  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
              getUsers,
        searchUsers,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersState;
