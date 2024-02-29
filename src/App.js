import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import View from "./Components/View";
import AdminLoginPage from "./Components/AdminLoginPage";
import Admin from "./Components/Admin";

function App() {
  return (
    <div className="App">
      <h1>MCA Faculty Information System</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/View" element={<View />} />
          <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
