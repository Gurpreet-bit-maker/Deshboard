import React from "react";

function TotalUsersCard({ userCounts }) {
  return (
    <>
      <div className="border bg-green-300 text-xl p-5 rounded-md h-25 text-center text-black font-bold w-50">
        <h2>Total Users</h2>
        <h2>{userCounts.length}</h2>
      </div>
    </>
  );
}

export default TotalUsersCard;
