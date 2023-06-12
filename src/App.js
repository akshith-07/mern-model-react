import React from "react";
import {BrowserRouter as Route, Routes, Router, BrowserRouter } from "react-router-dom";
import homeComponent from "./Components/homeComponent";
import aboutComponent from "./Components/aboutComponent";
import navigationComponent from "./Components/navigationComponent";
import bookingComponent from "./Components/bookingComponent";
import contactComponent from "./Components/contactComponent";
import contact from "./Components/contactComponent"

function App() {
  return (
    <div className="App">
      <navigationComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<homeComponent />}></Route>
          <Route path="about" element={<aboutComponent />}></Route>
          <Route path="contact" element={<contactComponent />}></Route>
          <Route path="booking" element={<bookingComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
