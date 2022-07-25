import React from 'react'

function BookingCreate() {
  return (
    <>
        <h1>BookingCreate</h1>
        <form>
            <label htmlFor="name">
                Name
                <input type="text" name="name" />
            </label>
            <label htmlFor="email">
                Email
                <input type="text" name="email" />
            </label>
            <button>Submit</button>
        </form>
    </>
  )
}

export default BookingCreate