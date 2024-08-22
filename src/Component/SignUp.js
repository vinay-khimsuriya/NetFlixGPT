import React, { useRef, useState } from "react";
import { checkValiduteSignUpData } from "../Utils/Validate";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Utils/FirebaseConfig";

export default function SignUp() {
  const email = useRef();
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = () => {
    const message = checkValiduteSignUpData(
      email.current.value,
      password.current.value
    );

    if (email === "") {
      setErrorMessage("please enter email");
    }
    console.log(message);
    setErrorMessage(message);

    if (message === null) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log("success");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });
    }
  };

  // New User Registered to end

  return (
    <div className="w-100 text-white mt-20 ">
      <h1 className="font-extrabold my-4 text-3xl lg:text-4xl">
        Unlimited movies, TV shows and more
      </h1>
      <p className="text-xl lg:text-2xl my-4">
        Watch anywhere. Cancel anytime.
      </p>
      <p className="text-xl lg:text-2xl my-5">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="w-full sm:w-3/4 md:w-2/4 border border-red-300 p-5 rounded mx-auto flex flex-col">
        <input
          // onChange={handleSignUp}
          type="email"
          ref={email}
          className="p-3 my-1 w-full md:p-4 me-1 bg-transparent border border-gray-400 placeholder-opacity-100 rounded-sm "
          placeholder="Email address"
        />
        <input
          // onChange={handleSignUp}
          type="password"
          ref={password}
          className="p-3 my-1 md:p-4 me-1 bg-transparent border border-gray-400 placeholder-opacity-100 rounded-sm w-full"
          placeholder="Password"
        />
        <button
          className="p-2 my-2 w-3/4 self-center px-8 md:p-4 md:px-12  border rounded-md bg-red-600"
          onClick={handleSignUp}
        >
          Sign Up <span className="ms-4"> ↔️</span>
        </button>
      </div>
      <p className=" text-red-600 text-center my-3 font-bold text-pretty text-lg">
        {errorMessage === "null" ? "" : errorMessage}
      </p>
    </div>
  );
}
