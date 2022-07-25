import React from 'react';
import { Routes, Route } from "react-router-dom";

import Booking from './components/pages/Booking';
import BookingCreate from './components/pages/Booking/Create';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Booking/>}></Route>
      <Route path="/create" element={<BookingCreate/>}></Route>
    </Routes>
  );
}

export default App;
