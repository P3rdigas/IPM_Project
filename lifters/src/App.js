import Home from "./pages/Home/home"
import { Routes, Route } from "react-router-dom"
import './App.css'
import LoginPage from "./pages/LoginPage/loginPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;