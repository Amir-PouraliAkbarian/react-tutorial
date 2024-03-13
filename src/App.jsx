import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/home";
import SignUp from "./pages/login";
import Login from "./pages/login";
function App() {
  return (
    <div className="bg-warning vh-100 d-flex justify-content-center align-items-center ">
      {/* <Home /> */}
      <Login />
    </div>
  );
}
export default App;
