import React from "react";
import logoImg from "../../public/Vector.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  let getToken = JSON.parse(localStorage.getItem("token"));

  let logOut = () => {
    localStorage.removeItem("token");
    console.log(getToken);
    if (getToken) {
      navigate("/login");
    }
  };

  return (
    <nav className="flex justify-between bg-black mx-40 mt-5">
      <div className="border flex">
        <img className="w-10 h-10" src={logoImg} alt="" />
        &nbsp; &nbsp;
        <h1 className="text-white text-[2rem]">Squid</h1>
        {/* <img className="" src={logoText} alt="" /> */}
      </div>
      <div className="flex gap-x-5 items-center">
        <Link to="/deshboard">
          <h2 className="text-gray-400 text-lg tracking-wide">Home</h2>
        </Link>
        <Link to="/login">
          <button
            onClick={logOut}
            className="h-12 px-10 tracking-wide text-white rounded-md bg-gradient-to-r from-[#FF7AC6] to-[#7A5CFF]
"
          >
            {getToken ? "Logout" : "Login"}
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
