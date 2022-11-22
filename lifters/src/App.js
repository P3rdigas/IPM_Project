import Home from "./pages/Home/home"
import { Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;