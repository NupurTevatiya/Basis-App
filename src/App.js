import React from "react";
import { Route, Routes,} from "react-router-dom";
import SignUpPage from "./pages/signup";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signup" exact element={<SignUpPage />} />
        <Route path="/profile" exact element={<ProfilePage/>} />
      </Routes>
    </div>
  );
}

export default App;
