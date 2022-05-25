import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Jokes from './Jokes'
// import './Navbar.css'

const Navbar = ({ logOut }) => {
  let navigate = useNavigate();

  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-dark fixed-top " >
    <div className="container">

        <a className="navbar-brand" href="#">Mobile First App</a>

 <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
    </button>

         {/* <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link active">Jokes</a>

          </div> */}

        <div className="collapse navbar-collapse" id="navbarCollapse">
           <ul className="navbar-nav ml-auto">
           {/*text-right d-flex justify-content-end align-items-center" */}

            <li className="nav-item color-white"><Link to='/jokes' className="nav-link active" element={<Jokes />} style={{ fontSize: "2.2rem" }}>Jokes</Link></li>
            
         
            <li style={{ float: 'right' }}>
              <div className="btn-nav" >
                <button className="btn btn-primary btn-small navbar-btn p-2 mx-5"
                  onClick={logOut } style={{ fontSize: "1.8rem" }}> Logout</button>
              </div>
            </li>
          </ul>
        </div>
        </div>

  </nav> 

  
//     <nav className = "navbar navbar-expand-lg navbar-light bg-light" >
//       <div className="container-fluid">
//         <a href="#" className="navbar-brand">Mobile First</a>
//         <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarCollapse">
//           <div className="navbar-nav">
//             <a href="#" className="nav-item nav-link active">Jokes</a>

//           </div>
//           <div classNameName="navbar-nav ms-auto">
//             <a href="#" className="nav-item nav-link" onClick={ logOut }>Login</a>
//           </div>
//         </div>
//       </div>
// </nav >

  )
}

export default Navbar