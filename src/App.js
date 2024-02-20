import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetailScreen from "./screens/userDetailScreen";
import UserListingScreen from "./screens/UserListingScreen";

// const singleUser = `https://api.github.com/users/SankThomas`
// const repos = `https://api.github.com/users/sankthomas/repos?per_page=5`
// https://api.github.com/users/sankthomas/repos?page=1&per_page=10&sort=updated

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserListingScreen/>} exact />
          <Route path="/user/:username" element={<UserDetailScreen/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
