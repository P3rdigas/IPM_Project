import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero"
import { Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;