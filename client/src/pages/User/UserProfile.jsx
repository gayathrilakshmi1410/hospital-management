import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router'
import EditUserProfile from './EditUserProfile';
const UserProfile = () => {
    const navigate=useNavigate();
    const [isOpen,setIsopen]=useState(false);

    const handleLogout=()=>{
        navigate('/login');
        toast.success("Logged out successfully");
    }
  return (
    <>
    <div className="container mt-5">
        <div className="row">
            <h4 className="text-center">Manage Your Account & Appointment</h4>
            <div className="col-md-3">
                <img src="" alt="userpic" className='card p-2' width={200}/>
            </div>
            <div className="col-md-8 mt-3">
                <div className="user-container mb-3">
                    <h6>Name:</h6>
                    <h6>Gender:</h6>
                    <h6>DOB:</h6>
                    <h6>Email:</h6>
                    <h6>Phone:</h6>
                    <h6>Address:</h6>
                </div>
                {/* button */}
                <div className="button-container mt-5">
                    <button className='btn btn-warning' onClick={()=>setIsopen(!isOpen)}><i class="fa-solid fa-pen-to-square"></i>Edit profile</button>
                    <button className='btn btn-primary ms-3' onClick={()=>navigate('/user/appointments')}><i class="fa-solid fa-list"></i>Appointments</button>
                    <button className='btn btn-danger ms-3' onClick={handleLogout}><i class="fa-solid fa-power-off"></i>LOGOUT</button>
                </div>
            </div>
        </div>
    </div>
    {/* Edit Profile Modal */}
    {isOpen && <EditUserProfile isOpen={isOpen} onClose={()=>setIsopen(false)}/>}
    </>
  )
}

export default UserProfile
