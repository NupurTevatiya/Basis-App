import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignInPage from "./Pages/signin";
import SignUpPage from "./Pages/signup";
import HomePage from "./Pages/home";
import ProfilePage from "./Pages/profile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signin" exact element={<SignInPage />} />
        <Route path="/signup" exact element={<SignUpPage />} />
        <Route path="/" element={<Navigate replace to="/signin" />} />
        <Route path="/profile" exact element={<ProfilePage/>} />
      </Routes>
    </div>
  );
}

export default App;
