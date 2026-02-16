import React, { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
function Deshboard() {
  useEffect(() => {
    let getToken = JSON.parse(localStorage.getItem("token"));
    if (getToken === null) {
      navigate("/homepage");
    }
  }, []);
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
    <div className="flex h-screen bg-[#0f172a] text-white">
      {/* SIDEBAR */}
      <div className="w-64 bg-[#020617] border-r border-gray-800 p-5">
        <h1 className="text-2xl font-semibold mb-8">Squid</h1>

        <nav className="space-y-2">
          <Link to="content">
            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer">
              Dashboard
            </div>
          </Link>

          <Link to="users">
            <div className="px-4 py-2 rounded-lg hover:bg-[#0f172a] cursor-pointer text-gray-300">
              Users
            </div>
          </Link>
          <Link to="setting">
            <div className="px-4 py-2 rounded-lg hover:bg-[#0f172a] cursor-pointer text-gray-300">
              Settings
            </div>
          </Link>

          <Link to="/login">
            <button
              onClick={logOut}
              className="px-4 py-2 rounded-lg hover:bg-[#0f172a] cursor-pointer text-gray-300"
            >
              {getToken ? "Logout" : "Login"}
            </button>
          </Link>
        </nav>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Deshboard;
