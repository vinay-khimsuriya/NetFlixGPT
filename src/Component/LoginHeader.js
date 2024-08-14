import React, { useState } from "react";
import netflixlogo from "../Images/Netflix_Logo_PMS.png";
import { useNavigate } from "react-router-dom";

export default function LoginHeader() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <div className="w-100 h-20 md:h-20 lg:h-24 flex justify-between items-center px-4 sm:px-16 md:px-24 lg:px-28">
      <img className="ps-10 h-20" src={netflixlogo} />
      <div className="flex items-center px-2 text-md font-mono">
        <button className="bg-transparent py-1 px-2  rounded-md me-1 text-white border border-gray-400">
          🌐 English 🔻
        </button>
        <button
          className="bg-red-600 py-1 px-2 rounded-md ms-1 border border-gray-400"
          onClick={handleSignInClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
