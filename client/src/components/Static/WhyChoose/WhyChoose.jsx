import React from 'react'
import './WhyChoose.css'
import Image1 from '../../../assets/images/hospital/personalize.webp'
import Image2 from '../../../assets/images/hospital/empower.webp'
import Image3 from '../../../assets/images/hospital/trust.webp'
const WhyChoose = () => {
  return (
    <>
    <h1 className='text-center mt-5'>Why choose us?</h1>
    <div className='row why-container'>
        <div className='col-md-3'>
            <img src={Image1} alt="image1" width={'100%'} />
            <h2>Personalize Excellent</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi necessitatibus, similique, quas esse corporis</p>
        </div>
        <div className='col-md-3'>
            <img src={Image2} alt="image2" width={'100%'} />
            <h2>Trusted care</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi necessitatibus, similique, quas esse corporis</p>
        </div>
        <div className='col-md-3'>
            <img src={Image3} alt="image3" width={'100%'} />
            <h2>Empowering Wellness journey</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi necessitatibus, similique, quas esse corporis</p>
        </div>
    </div>
    </>
  )
}

export default WhyChoose
