import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Deshboard from "./Pages/Deshboard";
import ContextProvider from "./Context/userData";
import DeshboardContent from "./Pages/DeshboardContent";
import Users from "./Pages/Users";
import Setting from "./Pages/Setting";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/deshboard" element={<Deshboard />}>
              <Route index element={<DeshboardContent />} />
              <Route path="content" element={<DeshboardContent />} />
              <Route path="users" element={<Users />} />
              <Route path="setting" element={<Setting />} />
            </Route>

            {/* deshBoard Routes */}
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
