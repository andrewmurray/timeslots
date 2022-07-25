import React from 'react'
import { Link } from 'react-router-dom'

function Booking() {
  return (
    <>
        <h1>Bookings</h1>
        <Link to="/create">Make a booking</Link>
    </>
  )
}

export default Booking