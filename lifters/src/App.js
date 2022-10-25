import IntroNavbar from "./Components/IntroNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <Router>
        <IntroNavbar />
        <Routes>
          <Route path="/" exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;