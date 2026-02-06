import React from 'react'

const LocationMap = () => {
  return (
    <>
    <div className="location-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126197.82184425772!2d77.65977563058253!3d8.721722254908093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411625053c519%3A0xad791b361b359a4d!2sTirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1769505498379!5m2!1sen!2sin" width={'100%'} height={400} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
    </>
  )
}

export default LocationMap
