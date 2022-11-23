import Home from "./pages/Home/home"
import { Routes, Route } from "react-router-dom"
import './App.css'
import LoginPage from "./pages/LoginPage/loginPage";
import RegisterPage from "./pages/Register/register";
import OverviewPage from "./pages/Overview/overview";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<RegisterPage />} />
        <Route exact path="/overview" element={<OverviewPage />} />
      </Routes>
    </>
  );
}

export default App;