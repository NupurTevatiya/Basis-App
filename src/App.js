import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
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
