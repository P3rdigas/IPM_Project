import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/home"
import LoginPage from "./pages/LoginPage/loginPage";
import RegisterPage from "./pages/Register/register";
import OverviewPage from "./pages/Overview/overview";
import FindGyms from "./pages/FindGyms/findGyms";
import InjuriesPage from "./pages/InjuriesPage/injuriesPage"
import RegisterWorkoutPage from "./pages/RegisterWorkout/registerWorkoutPage"

import './App.css'
import GeneratedWorkoutsPage from "./pages/GeneratedWorkouts/generatedWorkoutsPage";
import CustomizeWorkoutPage from "./pages/CostumizeWorkout/customizeWorkoutPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<RegisterPage />} />
        <Route exact path="/overview" element={<OverviewPage />} />
        <Route exact path="/find_gyms" element={<FindGyms />} />
        <Route exact path="/generate_workout" element={<GeneratedWorkoutsPage />} />
        <Route exact path="/injuries" element={<InjuriesPage />} />
        <Route exact path="/customize_workout" element={<CustomizeWorkoutPage />} />
        <Route exact path="/register_workout" element={<RegisterWorkoutPage />} />
      </Routes>
    </>
  );
}

export default App;