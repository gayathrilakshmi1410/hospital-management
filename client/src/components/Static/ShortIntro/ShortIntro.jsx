import React from 'react'
import './ShortIntro.css'
import HosImage from '../../../assets/images/hospital/hos.webp';
const ShortIntro = () => {
  return (
<> 
    <div className="intro-container">
        <div className="row">
            <div className="col-md-6 img-container">
                <img src={HosImage} alt="hosimage" className="hos-image"/>
            </div>
            <div className="col-md-5 info-container">
                <h1>Techinfo YT</h1>
                <h6>A Super Specility Hospital</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quia ipsum qui autem quidem reprehenderit quaerat vero nostrum, doloribus</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quia ipsum qui autem quidem reprehenderit quaerat vero nostrum, doloribus</p>
                <button className='btn btn-primary'>Book A Appointment</button>
            </div>
        </div>
    </div>
</> 
  ) 
}

export default ShortIntro
