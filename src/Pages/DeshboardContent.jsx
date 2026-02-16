import React, { useState, useEffect, useContext } from "react";
import TotalUsersCard from "./TotalUsersCard";

import { UserContextVarible } from "../Context/userData";
function DeshboardContent() {
  let { userData } = useContext(UserContextVarible);
  console.log(userData);
  const uniqueCompanyCount = new Set(userData.map((user) => user.company.name))
    .size;
  let cities = new Set(userData.map((u) => u.address.city)).size;

  // useEffect(() => {
  //   let fetchUserData = async () => {
  //     try {
  //       let userData = await axios.get(
  //         "https://jsonplaceholder.typicode.com/users",
  //       );
  //       setdata(userData.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchUserData();
  // }, []);

  return (
    <div>
      <h1 className="text-2xl ">DeshBoard</h1>
      <div className="flex gap-x-5 mt-5">
        <TotalUsersCard userCounts={userData} />
        <div className="border bg-green-300 text-xl p-5 rounded-md h-25 text-center text-black font-bold w-50">
          <h2>Total Companies</h2>
          <h2>{uniqueCompanyCount}</h2>
        </div>
        <div className="border bg-green-300 text-xl p-5 rounded-md h-25 text-center text-black font-bold w-50">
          <h2>Total Cities</h2>
          <h2>{cities}</h2>
        </div>
      </div>
      {/* users */}
      <div className="grid grid-cols-2 gap-6">
        {userData.map((user) => (
          <div
            key={user.id}
            className="bg-[#020617] border border-gray-800 rounded-xl p-5 hover:border-purple-500 transition"
          >
            <img
              className="bg-red-300 h-10 w-10 p-2 rounded-2xl"
              src="/Squid.png"
              alt="logo img"
            />

            <h2 className="text-lg font-semibold text-white">{user.name}</h2>
            <p className="text-sm text-gray-400">@{user.username}</p>

            <div className="mt-3 space-y-1 text-sm text-gray-300">
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.website}</p>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              {user.company.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeshboardContent;
