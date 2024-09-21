'use client'
import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap";

const FormModal = ({ show, handleClose }) => { 

  return (
    <> 
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group">
              <form>
              <div>
                  <label htmlFor="" className='fs-14 ms-2' >Name</label>
                  <input type="text" className="form-control rounded-2 mb-2" name='name' placeholder=''/>
                </div>
                <div>
                  <label htmlFor="" className='fs-14 ms-2' >Email</label>
                  <input type="text" className="form-control rounded-2 mb-2" name='email' placeholder=''/>
                </div>
             
                <div>
                  <label htmlFor="" className='fs-14 ms-2' >Contact Number</label>
                  <input type="text" className="form-control rounded-2 mb-2" name='phone' placeholder=''/>
                </div>
                <div>
                  <label htmlFor="" className='fs-14 ms-2' >Courses </label>
                  {/* <input type="text" className="form-control rounded-2 mb-2" name='phone' placeholder=''/> */}
                  <select name="courses" className='form-control rounded-2 mb-2'>
                    <option value="">Select courses</option>
                    <option value={1}>French</option>
                     <option value={2}>German</option>
                     <option value={3}>Spanish</option>
                     <option value={4}>engilsh speaking</option>
                     <option value={5}>IELTS coaching</option>
                     <option value={6}>arabic</option>
                     <option value={7}>chinese</option>
                     <option value={8}>japanese</option>
                     <option value={9}>russian</option>
                     <option value={10}>hindi</option>
                     <option value={11}>OET course</option>
                     <option value={12}>korean</option>
                     <option value={13}>study in abroad</option>

                  </select>
                </div>
                 

              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <button  className='btn border-0  text-white' style={{backgroundColor:'#ef0000',padding:'10px 25px'}} > 
            Submit
          </button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default FormModal