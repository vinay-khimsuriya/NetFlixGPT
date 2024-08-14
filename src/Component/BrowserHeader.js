import React, { useEffect } from "react";
import logo from "../Images/Netflix_Logo_PMS.png";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUSer } from "../ReduxStore/userInfo";
import { useDispatch } from "react-redux";

export default function BrowserHeader() {
  const navigate = useNavigate();

  const dispetch = useDispatch();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/Login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispetch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispetch(removeUSer());
        navigate("/login");
      }
    });
  }, []);

  return (
    <div className="w-full h-16 flex justify-between px-16 bg-gray-400 items-center bg-opacity-40 fixed top-0 z-20">
      <div className="">
        <img className="w-28" src={logo}></img>
      </div>
      <div className=" text-2xl font-mono font-semibold cursor-pointer text-blue-600 hover:text-red-600 hover:opacity-90">
        <p className="" onClick={handleSignOut}>
          {" "}
          Logout
        </p>
      </div>
    </div>
  );
}
