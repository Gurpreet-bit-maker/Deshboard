import React, { useContext, useEffect, useState } from "react";
import { UserContextVarible } from "../Context/userData";
function Users() {
  let { userData } = useContext(UserContextVarible);
  let [userDataCopy, setUserDataCopy] = useState([]);

  useEffect(() => {
    let a = userData.sort((a, b) => a.name.localeCompare(b.name));
    setUserDataCopy(a);
  }, [userData]); // 👈 dependency
  console.log(userDataCopy);

  //   searching
  let searching = (e) => {
    const value = e.target.value.toLowerCase();

    let filtered = userData.filter((element) =>
      element.name.toLowerCase().includes(value),
    );

    setUserDataCopy(filtered); // 👈 UI update
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={searching}
        className="w-70 px-3 py-2 rounded-md border border-gray-300 
  bg-white !text-black placeholder:text-gray-500 outline-none"
      />

      {/* users list */}
      <div className="grid grid-cols-2 gap-6 mt-5">
        {userDataCopy.map((user) => (
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

            {/* <div className="mt-4 text-xs text-gray-500">
              {user.company.name}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
