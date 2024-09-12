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
                  <label htmlFor="" className='fs-14 ms-2' >Email</label>
                  <input type="text" className="form-control rounded-2 mb-2" name='email' placeholder=''/>
                </div>
                <div>
                  <label htmlFor="" className='fs-14 ms-2' >Password</label>
                  <input type="text" className="form-control rounded-2 mb-2" name='password' placeholder=''/>
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
                    <option value="">course one</option>
                  </select>
                </div>
                 

              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button  className='btn border-0 bg-secondary text-white' > 
            Submit
          </button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default FormModal