
'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormModal from './FormModal';
import { useRouter } from 'next/navigation';
import { CourseData } from '@/utils/data';


const Navigation = () => {
  const CourseList = CourseData
  const router = useRouter()
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigateFunc = () => {
    router.push('/best-international-laungage-courses')
  }
  const handleEnrollClick = () => {
    setShowModal(true);
  };
  return (
    <>
      <FormModal show={showModal} handleClose={() => setShowModal(false)} />

      <div className='Header-strip-wrapper bg-soft1 '>
        <div className='container'>
          <ul className='d-flex justify-content-between align-items-center  mb-0'>
            <li><i className="fa-solid fa-location-dot"></i> Connaught  Place Delhi -110001&nbsp; <i className="fa-solid fa-phone"></i> 9953988288</li>
            <li><i className="fa-solid fa-envelope"></i> Inquiry@oracleglobaleducation.com</li>
            <li><i className="fa-solid fa-location-dot"></i> GTB Nagar 110009&nbsp; <i className="fa-solid fa-phone"></i> 9999745645</li>
          </ul>
        </div>
      </div>
      <Navbar expand="lg" className="navbar navbar-expand-sm bg-light navbar-light sticky-top" >
        <div className='container-fluid container-postition-Header'>
          <Link href='/'>
            <img className="CommonSiteLogo" src="/assets/img/OracleLeft.png" alt="" width="181px" />
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className='Header-small-scrren d-lg-flex justify-content-end'>
            <Nav className="nav-link my-2 my-lg-0 d-flex gap-xl-5 gap-lg-4">
              <Link href="/" >Home</Link>
              <Link href="/best-international-laungage-courses" className='position-relative course-drop-btn'>Course<i className="fa-solid fa-angle-down text-secondary"></i>
                <div className=' d-block course-drop-wrap'>
                  <div className='rounded-4 dropdown-bg p-3'>
                    <div className='row'>
                      {CourseList.map((courseValue) => (
                        <div className='col-lg-4 col-md-6 col-sm-6' key={courseValue.id}>
                          <NavDropdown.Item>
                            <Link className='Common-menu-items text-capitalize' href={`/${courseValue.slug}`}>
                              <i className="fa-solid fa-angles-right text-secondary"></i>&nbsp;
                              {courseValue.name}
                            </Link>
                          </NavDropdown.Item>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link> 
              <Link href="/visit-our-gallery" >Gallery</Link>
              <Link href="/blog" >Blogs</Link>
              <Link href="/visit-our-kids-section" >Kids Section</Link>
              <Link href="/contact-us-for-more-information" >Contact</Link>
            </Nav> 
         
            <div className='d-flex align-items-center gap-3'> 
              <button className="btn-hover color-2" onClick={handleEnrollClick}>Enroll Now</button>

            </div>

          </Navbar.Collapse>

        </div>
      </Navbar>

      <div className="wrapper-whats-appicon">
        <i className="fa-brands fa-whatsapp"></i>
      </div>
      <div className="wrapper-zoom-meeting">
        <a href="https://app.zoom.us/wc/join" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-bounce fa-video"></i>
        </a>
      </div>
    </>
  )
}

export default Navigation