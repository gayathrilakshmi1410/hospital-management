import React from 'react'
import "./User.css"
const EditUserProfile = ({isOpen, onClose}) => {
    if(!isOpen) return null

    return (
    <>
    <div className=" editModal modal d-block" tabIndex={-1}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Edit User profile</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose} />
      </div>
      <div className="modal-body">
        <div className="mod-details d-flex flex-column">
            <img src="https://imgs.search.brave.com/ae6zJEWDuPdvJxfN1s9AFM6ISlJjMyZ0r0LVHaXkqUs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjcv/MzY5LzI2MC9zbWFs/bC9hLXRoaXMtaXMt/c2ltcGxlLWJsYWNr/LWFuZC13aGl0ZS1p/Y29uLW9mLXBlcnNv/bi1pbnNpZGUtY2ly/Y2xlLW9mdGVuLXVz/ZWQtdG8tcmVwcmVz/ZW50LXVzZXItcHJv/ZmlsZS1vci1hY2Nv/dW50LXBuZy5wbmc" alt="userpic" height={80} width={100}/>
            <input type="file" />
            <input type="text" placeholder='Name'/>
            <div className="d-flex flex-row">
                <select className='m-1'>
                    <option value={'male'}>Male</option>
                    <option value={'female'}>Female</option>
                    <option value={'other'}>Other</option>
                </select>
                <input type='date' placeholder='dob'/>
            </div>
            <input type='text' placeholder='phone'/>
            <input type='text' placeholder='address'/>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default EditUserProfile
