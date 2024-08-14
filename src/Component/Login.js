import React, { useEffect, useReducer, useRef, useState } from "react";
import background from "../Images/loginbackground.jpg";
import netflixlogo from "../Images/Netflix_Logo_PMS.png";
import { useNavigate } from "react-router-dom";
import { checkValidateLoginData } from "../Utils/Validate";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUSer } from "../ReduxStore/userInfo";

export default function Login() {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const dispetch = useDispatch();
  // const userData = useSelector((store) => store.user);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispetch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        dispetch(removeUSer());
      }
    });
  }, []);

  const handleNavigate = () => {
    navigate("/");
  };

  const handleSignIn = () => {
    const message = checkValidateLoginData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    // console.log(message);

    if (message === null) {
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("success");
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode + " " + errorMessage);
          console.log("Faild", error);
        });
    }
  };

  return (
    <div>
      <section className="relative w-full h-full flex items-center justify-center ">
        <div
          className="w-full h-screen flex items-center justify-center"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),url( ${background} )`,
            backgroundSize: "cover",
            backgroundPosition: "cover",
          }}
        >
          <div className="w-3/4 sm:w-3/5 md:w-3/5 lg:w-3/6 xl:w-2/6 text-white flex justify-center text-center bg-black bg-opacity-60 py-5000 rounded-md">
            <div className="w-4/6 text-start my-16">
              <h1 className="font-extrabold text-4xl mb-2">Sign In</h1>
              <div>
                <form
                  className="w-full"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    ref={email}
                    className="w-full placeholder-opacity-50 bg-transparent border border-gray-400 mx-auto py-3 text-start my-2 rounded-md ps-3"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    ref={password}
                    className="w-full placeholder-opacity-50 bg-transparent border border-gray-400 mx-auto py-3 text-start my-2 rounded-md ps-3"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <p className="text-red-600 text-lg font-mono font-bold">
                    {errorMessage === "null" ? "" : errorMessage}
                  </p>
                  <button
                    className="bg-red-700 hover:bg-red-900 hover:text-slate-300 w-full my-2 py-2 rounded-md"
                    onClick={handleSignIn}
                  >
                    Sign In
                  </button>
                  <p className="text-center my-1 opacity-60">OR</p>
                  <button className="w-full hover:bg-gray-800 hover:text-slate-300 my-2 py-2 rounded-md bg-gray-600 bg-opacity-70">
                    Use a sign-in code
                  </button>
                </form>
                <div className="flex justify-center">
                  <p className="text-center py-2 hover:text-blue-600 hover:font-bold hover:underline">
                    Forgot Password
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    className="size-4"
                    type="checkbox"
                    value="Remember me"
                    name="Remember me"
                    placeholder="Rem"
                  />
                  <label className="ms-2">Remember me</label>
                </div>
                <div className="flex my-2 items-center text-lg">
                  <span className="">New to Netflix?</span>
                  <p
                    className="cursor-pointer ms-3 text-blue-800 font-mono font-extrabold px-3 py-1 bg-slate-100 hover:bg-slate-300 hover:text-blue-600 rounded-sm"
                    onClick={handleNavigate}
                  >
                    Sign Up
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-3 -left-10">
          <img className="ps-10 h-12" src={netflixlogo} />
        </div>
      </section>
    </div>
  );
}
