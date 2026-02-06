import React from 'react'

const MessageForm = () => {
  return (
    <>
    <div className="mform">
        <h1>Send us message</h1>
        <input type="text" placeholder="enter Your Name" required={true} />
        <input type="email" placeholder="enter Your Email" required={true} />
        <textarea placeholder='enter your message' name="message" rows={5} ></textarea>
        <button className='btn'>Send Message</button>
    </div>
    </>
  )
}

export default MessageForm
