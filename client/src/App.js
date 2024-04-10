import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Verifying from "./pages/Verifying";
import Home from "./pages/Home";
import Layout from "./route/Layout";
import HotelDetails from "./pages/HotelDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify" element={<Verifying />} />
        <Route element={<Layout />}>
          <Route path="/hotel" element={<Home />} />
          <Route path="/hotel_details/:id" element={<HotelDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
