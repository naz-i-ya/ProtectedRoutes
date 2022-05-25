import React from 'react'
import Navbar from './Navbar'
const Dashboard = ( {logOut} ) => {
  return (
    <div className="dashboard w-100">
        <Navbar logOut={logOut} />
        <h1>Welcome to Mobile First</h1>
    </div>
  )
}

export default Dashboard