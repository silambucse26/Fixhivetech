import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import ServiceBooking from "./Page/ServiceList/ServiceList";
import About from "./Page/About/About";
import Services from "./Page/ServiceList/ServiceList";
import Contact from "./Page/Contact/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;