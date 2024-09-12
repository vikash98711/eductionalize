'use client'
import React, { useState } from "react";
import FormModal from "./FormModal";
import Link from "next/link";

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);
  const handleEnrollClick = () => {
    setShowModal(true);
  };
  return (
    <section className="Section-AboutUs pt-pb">
      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-6 text-start position-relative mb-md-0 mb-5">
            <div className="wrapper-aboutus-left">
              <img
                className="rounded-pill img-fluid "
                src="/assets/img/about-img.png"
              />
            </div>
          </div> */}
          <div className="col-lg-12 text-center">
            <div className="RightWapperAboutUS">
              {/* <h4> Oracle International Language Institute</h4> */}
              <h2>Delhi's Premier Language Learning Center</h2>
              <p>Unleash Your Potential: Learn Languages with Confidence
              
              <span className="fw-600 "> Best training institute for IELTS, TOEFL, PTE, German, French, Spanish, Chinese & Arabic. </span>
              ORACLE LANGUAGE INSTITUTE is Delhi's leading language learning institute, dedicated to empowering individuals with the skills and confidence to excel in a globalized world. We offer a comprehensive range of language courses, catering to all levels and learning styles.
             
                Speak Your Success: Empower Your Journey with Oracle Language Institute – the premier institute for English, IELTS, TOEFL, PTE, German, French, Spanish, Chinese & Arabic.
              </p>

            </div>

            <div className="row">

              <ul className="Home-page-ul-wrapper">
                 <div className="row">
                  <div className="col-lg-3 col-md-3 col-12">

                    <li>
                      <div className="d-flex">

                        <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Excellence in Education</p>
                      </div>
                    </li>
                  </div>
                  <div className="col-lg-3 col-md-3 col-12">
                  <li>
                    <div className="d-flex">

                      <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Wide Range of Languages</p>
                    </div>
                  </li>
                  </div>
                  <div className="col-lg-3 col-md-3 col-12">
                  <li>
                    <div className="d-flex">

                      <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Flexible Learning Options</p>
                    </div>
                  </li>
                  </div>
                  <div className="col-lg-3 col-md-3 col-12">
                  <li>
                    <div className="d-flex">

                      <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Focus on Communication</p>
                    </div>
                  </li>
                  </div>
                  <div className="col-lg-3 col-md-3 col-12">
                  <li>
                    <div className="d-flex">

                      <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Proven Success</p>
                    </div>
                  </li>
                  </div>
                  <div className="col-lg-3 col-md-3 col-12">
                  <li>
                    <div className="d-flex">

                      <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Cultural Events & Activities</p>
                    </div>
                  </li>
                  </div>
                  <div className="col-lg-3 col-md-3 col-12">
                  <li>
                    <div className="d-flex">

                      <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Career Support</p>
                    </div>
                  </li>
                  </div>
                  <div className="col-lg-3 col-md-3 col-12">
                  <li>
                    <div className="d-flex">

                      <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Lifelong Learning Community</p>
                    </div>
                  </li>
                  </div>
                </div> 
                {/* previous point imp  */}
                {/* <li>
                  <div className="d-flex">

                    <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Seamless Process of Enrolment in language courses</p>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <p className="mb-0"><i className="fa-solid fa-check-circle"></i>&nbsp;Premier Assistance to Students in all language courses</p>
                  </div>
                </li>
                <li>

                  <div className="Wrapper-RightICon_aboutUS d-flex">

                    <p className="mb-0"><i className="fa-solid fa-check-circle"></i>&nbsp;Diverse Expert Faculty in German, French, Spanish,</p>

                  </div>
                </li> 
                <li>
                  <div className="d-flex">
                    <p className="mb-0"><i className="fa-solid fa-check-circle"></i>&nbsp;Lifetime Membership after enrolling in any of the language courses </p>
                  </div>

                </li> */}
              </ul>

            </div>
            <div className="d-flex align-items-center justify-content-center mt-3 gap-3">
              <button className="btn-hover color-2 m-0" onClick={handleEnrollClick}>Enquire Now </button>
              <Link href="/about-best-international-laungage-institute-in-delhi" className="btn-hover d-flex align-items-center justify-content-center mt-0 color-2" >Read More </Link>
            </div>

          </div>
          <div className="col-sm-12">
          <img src="https://htmldemo.net/edumate-v1/edumate/assets/images/features.webp" className="img-fluid"></img>
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default AboutUs;
