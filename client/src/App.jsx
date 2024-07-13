import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import ShowEvent from "./pages/showEvent";
import CreateEvent from "./pages/createEvent";
import EditEvent from "./pages/editEvent";
import DeleteEvent from "./pages/deleteEvent";

function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/events/details/:id" element={<ShowEvent />} />
        <Route path="/events/create" element={<CreateEvent />} />
        <Route path="/events/edit/:id" element={<EditEvent />} />
        <Route path="/events/delete/:id" element={<DeleteEvent />} />
      </Routes> 
    </>
  )
}

export default App
