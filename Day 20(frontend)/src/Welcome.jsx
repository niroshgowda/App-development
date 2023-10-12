import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./Redux/UserSlice";

const Welcome = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Check if user is not null before accessing its properties
  const username = user ? user.username : "Guest";
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
    <div className="logout">
      Welcome, {username}<br/>
     <button onClick={handleLogout}> Logout</button>
    </div>
    </>
  );
};

export default Welcome;