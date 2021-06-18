import React from 'react'
import  {NavLink} from 'react-router-dom'


function Navbar() {
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top justify-content-between">
     <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/cake">Redux</NavLink>
              </li>
              <li className="nav-item"> 
              <NavLink className='nav-link' exact to='/todo'>ToDo List</NavLink>
              </li>
              <li className="nav-item"> 
              <NavLink className='nav-link' exact to='/crud'>Crud</NavLink>
              </li>
              <li className="nav-item">
        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
        <NavLink className="nav-link" exact to="/analytics">Gallery</NavLink>
              </li>

    </ul>
      </div>
</nav>

        </>
    )
}

export default Navbar
