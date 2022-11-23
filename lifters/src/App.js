import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/home"
import LoginPage from "./pages/LoginPage/loginPage";
import RegisterPage from "./pages/Register/register";
import OverviewPage from "./pages/Overview/overview";
import FindGyms from "./pages/FindGyms/findGyms";

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<RegisterPage />} />
        <Route exact path="/overview" element={<OverviewPage />} />
        <Route exact path="/find_gyms" element={<FindGyms />} />
      </Routes>
    </>
  );
}

export default App;