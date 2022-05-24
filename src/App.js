import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Private } from "./Components/ReduxState/Private";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
