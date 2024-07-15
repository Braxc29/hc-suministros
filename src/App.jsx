import { Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/statics/NavBarComponent";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Footer from "./components/statics/Footer";

export default function App() {
  
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Productos" element={<Productos />} />
      </Routes>
      <Footer />
    </>
  );
}
