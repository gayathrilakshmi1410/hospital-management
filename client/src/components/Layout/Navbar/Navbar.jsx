import React from 'react'
import Topbar from './Topbar'
import NavMenu from './NavMenu'
import { NavLink } from 'react-router'
import Logo from '../../../assets/doctor.jpg'
const Navbar = () => {
  return (
   <>
   <div className="navbar-container sticky-top">
    <div className="row">
        <div className="col-md-3">
            <NavLink to="/">
                <img src={Logo} alt="logo" className="brand-logo"/>
            </NavLink>
        </div>
        <div className="col-md-9">
            {/*tobar menu */}
           <div>
                 <Topbar/>
            </div>
            {/* Main menu */}
           <div>
                 <NavMenu/>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Navbar
