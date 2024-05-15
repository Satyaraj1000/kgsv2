import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Achievements,
  Chairperson,
  Contact,
  Director,
  Home,
  OtherInstitute,
  OurLegacy,
  Tribute,
  VisionMission,
} from "./components/index.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


//Routers
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      //Home Routers
      <Route path="" element={<Home />} />
      //About Us Routers
      <Route path="/about-us/vision-and-mission" element={<VisionMission />} />
      <Route path="/about-us/our-legacy" element={<OurLegacy />} />
      <Route path="/about-us/tribute" element={<Tribute />} />
      <Route path="/about-us/achievements" element={<Achievements />} />
      <Route path="/about-us/director-of-academy" element={<Director />} />
      <Route path="/about-us/head-mastress" element={<Home />} />
      <Route path="/about-us/other-institute" element={<OtherInstitute />} />
      <Route path="/about-us/chairperson" element={<Chairperson />} />
      //Contact Us Routers
      <Route path="/contact-us" element={<Contact />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
