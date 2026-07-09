import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./Pages/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Price from "./Pages/Price";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Projects />} />
        <Route path="/price" element={<Price />} />
      </Routes>
     <Footer />
    </>
  );
}