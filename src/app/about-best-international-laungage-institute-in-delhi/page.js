import React from 'react'
import CompanyLogoSlider from '../../component/CompanyLogoSlider'
import QuiryForm from '@/component/QuiryForm'
import Navigation from '@/component/Navigation'
import Footer from '@/component/Footer'
import CoomonStudentSlider from '@/component/CoomonStudentSlider'
import Link from 'next/link';
import TopBannerDetails from '@/component/TopBannerDetails'


export function generateMetadata(params) {
  return {
    title: "ABOUT US. Oracle International Language Institute is the Best coaching and training  institute for International Language",
    description: "Oracle International Language Institute teaches a wide range of language courses for global communication. It is the best international language institute in Delhi for a beginner or an advanced learner. This institute formats its programs to suit various proficiency levels. ",
    keywords: ['best language institute to learn any language', 'best foreign language institute in delhi', 'study with leading language institute in delhi', 'best language teaching institute in delhi', 'oracle global language institute in delhi'],
    alternates: {
      canonical: `https://oracleglobaleducation.com/about-best-international-laungage-institute-in-delhi`,
    },
  }
}



const Page = () => {
  return (
    <>
      <Navigation />
      {/* <CoomonStudentSlider /> */}
      <TopBannerDetails />


      <section className="about-two about-two--about pt-pb">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-two__thumb wow fadeInLeft animated"
                data-wow-delay="100ms"
                style={{
                  visibility: "visible",
                  animationDelay: "100ms",
                  animationName: "fadeInLeft"
                }}
              >
                {/* about thumb start */}
                <div
                  className="about-two__thumb__one eduact-tilt"
                  data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'
                  style={{
                    willChange: "transform",
                    transform: "perspective(300px) rotateX(0deg) rotateY(0deg)"
                  }}
                >
                  <img
                    src="/assets/img/about-2-2-about.jpg"
                    alt="eduact"
                  />
                </div>
                {/* /.about-thumb-one */}
                <div className="about-two__thumb__two">
                  <img
                    src="/assets/img/about-2-1-about.jpg"
                    alt="eduact"
                  />
                  <div className="about-two__thumb__two-icon">
                    <span className="fa-regular fa-lightbulb icon-business" />
                  </div>
                </div>
                {/* /.about-thumb-two */}
                <div className="about-two__fact">
                  <div className="about-two__fact__icon">
                    <span className="icon-trophy" />
                  </div>
                  <div className="about-two__fact__content">
                    <div className="about-two__fact__count">
                      +
                      <span className="count-box counted">
                        <span
                          className="count-text"
                          data-stop={230}
                          data-speed={1500}
                        >
                          230
                        </span>
                      </span>
                    </div>
                    {/* /.fact-one__count */}
                    <h3 className="about-two__fact__title">Awesome Awards</h3>
                    {/* /.fact-one__title */}
                  </div>
                </div>
                {/* /.fact-item */}
                <div
                  className="about-two__thumb__shape1 wow zoomIn animated"
                  data-wow-delay="300ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "300ms",
                    animationName: "zoomIn"
                  }}
                >
                  <img src="/assets/img/about-2-shape-1.png" alt="eduact" />
                </div>
                {/* /.about-shape-one */}
                <div
                  className="about-two__thumb__shape2 wow zoomIn animated"
                  data-wow-delay="400ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "400ms",
                    animationName: "zoomIn"
                  }}
                >
                  <img src="/assets/img/about-2-shape-2.png" alt="eduact" />
                </div>
                {/* /.about-shape-two */}
                <div
                  className="about-two__thumb__shape3 wow zoomIn animated"
                  data-wow-delay="400ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "400ms",
                    animationName: "zoomIn"
                  }}
                >
                  <img src="assets/img/about-2-shape-3.png" alt="eduact" />
                </div>
                {/* /.about-shape-two */}
                <div
                  className="about-two__thumb__shape4 wow zoomIn animated"
                  data-wow-delay="400ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "400ms",
                    animationName: "zoomIn"
                  }}
                >
                  <img src="/assets/img/about-2-shape-4.png" alt="eduact" />
                </div>
                {/* /.about-shape-two */}
              </div>
              {/* about thumb end */}
            </div>
            <div
              className="col-xl-6 wow fadeInRight animated"
              data-wow-delay="100ms"
              style={{
                visibility: "visible",
                animationDelay: "100ms",
                animationName: "fadeInRight"
              }}
            >
              <div className="about-two__content">
                {/* about content start*/}
                <div className="section-title">
                  <h5 className="section-title__tagline">
                    About Us
                    <svg
                      className="arrow-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 55 13"
                    >
                      <g clipPath="url(#clip0_324_36194)">
                        <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z" />
                        <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z" />
                        <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z" />
                        <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z" />
                      </g>
                    </svg>
                  </h5>
                  <h2 className="section-title__title">
                    WE CREATE LEADERS FOR TOMORROW
                  </h2>

                </div>
                {/* section-title */}
                <p className="about-two__content__text">
                  The Oracle International Language Institute brings together under one roof a wide range of international professional and vocational qualifications through its high tech, state of the art teaching centers, strategically located across the country. It offers interesting and innovative programmes blended with industrial experience and practical application that will appeal to the academic community as well as to a range of other sectors in the market place.
                </p>
                <h3 className='mb-4'>Why Choose ORACLE LANGUAGE INSTITUTE?  </h3>
                <div>
                  <h5 className="fw-bold mb-2"> Excellence in Education </h5>
                  <ul className='mb-3'>
                    <li> <i className="fa-solid fa-check text-secondary"></i>&nbsp; &nbsp;Experienced and certified instructors with proven teaching methods.                      </li>
                    <li> <i className="fa-solid fa-check text-secondary"></i>&nbsp; &nbsp;Interactive and engaging curriculum that focuses on all aspects of language acquisition (speaking, listening, reading, writing).
                    </li>
                    <li> <i className="fa-solid fa-check text-secondary"></i>&nbsp; &nbsp;Small class sizes for personalized attention and effective learning.
                    </li>
                  </ul>
                  <h5 className="fw-bold mb-2"> Wide Range of Languages </h5>
                  <ul className='mb-3'>
                    <li> <i className="fa-solid fa-check text-secondary"></i>&nbsp;&nbsp;  We offer courses in a diverse selection of languages, including French, Spanish, German, Chinese, Japanese, English (for non-native speakers), and more.
                    </li>
                  </ul>
                  <h5 className="fw-bold mb-2"> Flexible Learning Options</h5>
                  <ul className='mb-3'>
                    <li> <i className="fa-solid fa-check text-secondary"></i>&nbsp;&nbsp; Cater to busy schedules with a variety of class formats: group classes, private lessons, online courses, and intensive programs.
                    </li>
                    <li> <i className="fa-solid fa-check text-secondary"></i>&nbsp;&nbsp; Daytime, evening, and weekend classes are available.
                    </li>
                  </ul>
                  <h5 className="fw-bold mb-2"> Focus on Communication</h5>
                  <ul className='mb-3'>
                    <li> <i className="fa-solid fa-check text-secondary"></i>&nbsp; &nbsp;  Our curriculum emphasizes real-world use of language, preparing you for travel, business interactions, or academic pursuits.
                    </li>
                  </ul>
                  <h5 className="fw-bold mb-2"> Proven Success</h5>
                  <ul className='mb-4'>
                    <li> <i className="fa-solid fa-check text-secondary"></i>&nbsp; &nbsp; We boast a high success rate, with students consistently achieving their language learning goals.</li>
                    <li> <i className="fa-solid fa-check text-secondary"></i>&nbsp; &nbsp; Many of our graduates have moved on to pursue successful careers in international fields or excelled in their academic journeys.
                    </li>
                  </ul>


                </div>


                {/* /.icon-box */}
                {/* <div className="about-two__about-box">
            <div className="about-two__about-box__top">
              <div className="about-two__about-box__icon">
                <span className="fa-solid fa-eye-low-vision icon-vision" />
              </div>
              <h4 className="about-two__about-box__title">Our Vision</h4>
            </div>
            <p className="about-two__about-box__text">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks The generated Lorem Ipsum is therefore always free
              from repetition
            </p>
          </div> */}
                {/* /.icon-box */}
              </div>
              {/* about content end */}
            </div>
            <div className="col-12">

              <div className="about-two__about-box">
                <div className="about-two__about-box__top">
                  <div className="about-two__about-box__icon">
                    <span className="fa-regular fa-lightbulb icon-logical-thinking" />
                  </div>
                  <h4 className="about-two__about-box__title">Our Mission</h4>
                </div>
                <p className="about-two__about-box__text">
                  Achieve academic excellence in professional education at par with the leading national and international institutions. Focus on practical aspects of the course material so as to make learning a meaningful and interesting experience in our intellectually stimulating campus.
                  Create an environment with people having similar goals and aspirations to be visionaries. Actively encourage collaboration with industries, communities and the fellow institutions in the country and abroad. Work to inculcate high moral and ethical values amongst the students to make them responsible citizens and good human beings.
                  The Institute offers something for everyone, from high school students looking to enhance their academic profile, to experienced practitioners who are seeking to focus on developing new skills, increase their knowledge base and keep up to date with developments within their particular areas of expertise. The Oracle International Language Institute also assists those who are looking for a qualification in India that can be used as a stepping-stone or as a pathway to further Study Overseas as well as those looking to develop their skill set to enhance their career opportunities in today's competitive global market.
                </p>
              </div>

              <div>
              <h3 className='mb-4'>Beyond the Classroom:  </h3>
                  <h5 className="fw-bold mb-2"> Cultural Events & Activities</h5>
                  <ul className='mb-3'>
                    <li> <i className="fa-solid fa-check text-secondary"></i>&nbsp; &nbsp; Immerse yourself in the language and culture through workshops, movie nights, and social events.</li>
                    
                  </ul>
                  <h5 className="fw-bold mb-2"> Career Support</h5>
                  <ul className='mb-3'>
                    <li> <i className="fa-solid fa-check text-secondary"></i>&nbsp; &nbsp; We offer resources and guidance to help leverage your language skills in the job market.
                    </li> 
                  </ul>
                  <h5 className="fw-bold mb-2"> Lifelong Learning Community</h5>
                  <ul className='mb-3'>
                    <li> <i className="fa-solid fa-check text-secondary"></i>&nbsp; &nbsp; Become part of our vibrant learning community and connect with fellow language enthusiasts.</li>
                  
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <section className="fact-one pt-pb" style={{ backgroundImage: "url(/assets/img/fact-bg-1.png)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 ">
              <div className="fact-one__item text-center">
                <svg
                  viewBox="0 0 303 181"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.5"
                    y="2.00049"
                    width={300}
                    height={177}
                    rx={7}
                    stroke="#4F5DE4"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="20 20"
                  />
                </svg>
                <div className="fact-one__count">
                  <span className="count-box counted">
                    <span className="count-text" data-stop="30.3" data-speed={1500}>
                      20,000
                    </span>
                  </span>
                  +
                </div>
                <h3 className="fact-one__title">Happy Students</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fact-one__item text-center">
                <svg
                  viewBox="0 0 303 181"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.5"
                    y="2.00049"
                    width={300}
                    height={177}
                    rx={7}
                    stroke="#4F5DE4"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="20 20"
                  />
                </svg>
                <div className="fact-one__count">
                  <span className="count-box counted">
                    <span className="count-text" data-stop="40.5" data-speed={1500}>
                      25
                    </span>
                  </span>
                  +
                </div>
                <h3 className="fact-one__title">Best Awards Won</h3>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp animated"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fadeInUp"
              }}
            >
              <div className="fact-one__item text-center">
                <svg
                  viewBox="0 0 303 181"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.5"
                    y="2.00049"
                    width={300}
                    height={177}
                    rx={7}
                    stroke="#4F5DE4"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="20 20"
                  />
                </svg>
                <div className="fact-one__count">
                  <span className="count-box counted">
                    <span className="count-text" data-stop="88.9" data-speed={1500}>
                      1500+
                    </span>
                  </span>
                </div>
                <h3 className="fact-one__title">Batches Completed</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fact-one__item text-center">
                <svg
                  viewBox="0 0 303 181"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.5"
                    y="2.00049"
                    width={300}
                    height={177}
                    rx={7}
                    stroke="#4F5DE4"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="20 20"
                  />
                </svg>
                <div className="fact-one__count">
                  <span className="count-box counted">
                    <span className="count-text" data-stop="6.30" data-speed={1500}>
                      25
                    </span>
                  </span>
                  +
                </div>
                <h3 className="fact-one__title">Courses</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-one pt-pb">
        <div
          className="service-one__bg"
          style={{ backgroundImage: "url(assets/images/shapes/service-bg-1.png)" }}
        />
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp animated"

            >
              <div className="service-one__item">
                <div className="service-one__wrapper">
                  <div className="service-one__icon">
                    <span className=" fa-solid fa-book" />
                  </div>
            
                  <h3 className="service-one__title">
                    <Link href="#">International Curriculum</Link>
                  </h3>
                
                  <p className="service-one__text">
                    We adhere to global curriculum standards in all our courses – English, IELTS, German, French, Spanish, Chinese & Arabic
                  </p>
              
                  <Link className="service-one__rm" href="#">
                    Read More
                    <span className="icon-caret-right" />
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 118 129"
                    fill="none"
                  >
                    <path
                      d="M0.582052 143.759C135.395 113.682 145.584 0.974413 145.584 0.974413L173.881 89.6286C173.881 89.6286 0.582054 322.604 0.582052 143.759Z"
                      fill="#F1F2FD"
                    />
                  </svg>
                </div>
              </div>
        
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp animated"

            >
              <div className="service-one__item">
                <div className="service-one__wrapper">
                  <div className="service-one__icon">
                    <span className="fa-regular fa-lightbulb" />
                  </div>
               
                  <h3 className="service-one__title">
                    <Link href="#">Certified instructors</Link>
                  </h3>
                 
                  <p className="service-one__text">
                    The faculty members consist of trained and experienced language instructors.
                  </p>
              
                  <Link className="service-one__rm" href="#">
                    Read More
                    <span className="icon-caret-right" />
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 118 129"
                    fill="none"
                  >
                    <path
                      d="M0.582052 143.759C135.395 113.682 145.584 0.974413 145.584 0.974413L173.881 89.6286C173.881 89.6286 0.582054 322.604 0.582052 143.759Z"
                      fill="#F1F2FD"
                    />
                  </svg>
                </div>
              </div>
           
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp animated"

            >
              <div className="service-one__item">
                <div className="service-one__wrapper">
                  <div className="service-one__icon">
                    <span className="fa-solid fa-tv" />
                  </div>
               
                  <h3 className="service-one__title">
                    <Link href="#">Regularly enhance teaching competencies</Link>
                  </h3>
                
                  <p className="service-one__text">
                    We upgrade our teaching methodologies in IELTS, TOEFL, PTE and other language courses from time to time to stay relevant.
                  </p>
                
                  <Link className="service-one__rm" href="#">
                    Read More
                    <span className="icon-caret-right" />
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 118 129"
                    fill="none"
                  >
                    <path
                      d="M0.582052 143.759C135.395 113.682 145.584 0.974413 145.584 0.974413L173.881 89.6286C173.881 89.6286 0.582054 322.604 0.582052 143.759Z"
                      fill="#F1F2FD"
                    />
                  </svg>
                </div>
              </div>
           
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp animated"

            >
              <div className="service-one__item">
                <div className="service-one__wrapper">
                  <div className="service-one__icon">
                    <span className="fa-solid fa-up-down-left-right" />
                  </div>
               
                  <h3 className="service-one__title">
                    <Link href="#">Superior quality language training</Link>
                  </h3>
               
                  <p className="service-one__text">
                    We ensure continual high-quality education and training in French, Spanish and all other languages.
                  </p>
               
                  <Link className="service-one__rm" href="#">
                    Read More
                    <span className="icon-caret-right" />
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 118 129"
                    fill="none"
                  >
                    <path
                      d="M0.582052 143.759C135.395 113.682 145.584 0.974413 145.584 0.974413L173.881 89.6286C173.881 89.6286 0.582054 322.604 0.582052 143.759Z"
                      fill="#F1F2FD"
                    />
                  </svg>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </section>

      <section className="about-one pt-pb">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-one__thumb wow fadeInLeft animated"
                data-wow-delay="100ms"

              >
          
                <div
                  className="about-one__thumb__one eduact-tilt"

                >
                  <img src="assets/img/about-1-1.png" alt="eduact" />
                </div>
                <div
                  className="about-one__thumb__shape1 wow zoomIn animated"

                >
                  <img src="assets/img/about-shape-1-1.png" alt="eduact" />
                </div>
                <div
                  className="about-one__thumb__shape2 wow zoomIn animated"


                >
                  <img src="assets/img/about-shape-1-2.png" alt="eduact" />

                </div>
                <div
                  className="about-one__thumb__box wow fadeInLeft animated"

                >
                  <div className="about-one__thumb__box__icon">
                    <span className="fa-solid fa-phone" />
                  </div>
                  <h4 className="about-one__thumb__box__title">
                    Need to Know More Details?
                  </h4>
                  <p className="about-one__thumb__box__text">
                    <Link href="tel:9953988288">9953988288</Link>
                  </p>
                </div>
              </div>
            
            </div>
            <div className="col-xl-6">
              <div className="about-one__content">
             
                <div className="section-title">
                  <h5 className="section-title__tagline">
                    OUR OBJECTIVE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 133 13"
                      fill="none"
                    >
                      <path
                        d="M9.76794 0.395L0.391789 9.72833C-0.130596 10.2483 -0.130596 11.095 0.391789 11.615C0.914174 12.135 1.76472 12.135 2.28711 11.615L11.6633 2.28167C12.1856 1.76167 12.1856 0.915 11.6633 0.395C11.1342 -0.131667 10.2903 -0.131667 9.76794 0.395Z"
                        fill="#F1F2FD"
                      />
                      <path
                        d="M23.1625 0.395L13.7863 9.72833C13.2639 10.2483 13.2639 11.095 13.7863 11.615C14.3087 12.135 15.1593 12.135 15.6816 11.615L25.0578 2.28167C25.5802 1.76167 25.5802 0.915 25.0578 0.395C24.5287 -0.131667 23.6849 -0.131667 23.1625 0.395Z"
                        fill="#F1F2FD"
                      />
                      <path
                        d="M36.5569 0.395L27.1807 9.72833C26.6583 10.2483 26.6583 11.095 27.1807 11.615C27.7031 12.135 28.5537 12.135 29.076 11.615L38.4522 2.28167C38.9746 1.76167 38.9746 0.915 38.4522 0.395C37.9231 -0.131667 37.0793 -0.131667 36.5569 0.395Z"
                        fill="#F1F2FD"
                      />
                      <path
                        d="M49.9514 0.395L40.5753 9.72833C40.0529 10.2483 40.0529 11.095 40.5753 11.615C41.0976 12.135 41.9482 12.135 42.4706 11.615L51.8467 2.28167C52.3691 1.76167 52.3691 0.915 51.8467 0.395C51.3176 -0.131667 50.4738 -0.131667 49.9514 0.395Z"
                        fill="#F1F2FD"
                      />
                      <path
                        d="M63.3459 0.395L53.9698 9.72833C53.4474 10.2483 53.4474 11.095 53.9698 11.615C54.4922 12.135 55.3427 12.135 55.8651 11.615L65.2413 2.28167C65.7636 1.76167 65.7636 0.915 65.2413 0.395C64.7122 -0.131667 63.8683 -0.131667 63.3459 0.395Z"
                        fill="#F1F2FD"
                      />
                      <path
                        d="M76.7405 0.395L67.3643 9.72833C66.8419 10.2483 66.8419 11.095 67.3643 11.615C67.8867 12.135 68.7373 12.135 69.2596 11.615L78.6358 2.28167C79.1582 1.76167 79.1582 0.915 78.6358 0.395C78.1067 -0.131667 77.2629 -0.131667 76.7405 0.395Z"
                        fill="#F1F2FD"
                      />
                      <path
                        d="M90.1349 0.395L80.7587 9.72833C80.2363 10.2483 80.2363 11.095 80.7587 11.615C81.2811 12.135 82.1317 12.135 82.6541 11.615L92.0302 2.28167C92.5526 1.76167 92.5526 0.915 92.0302 0.395C91.5011 -0.131667 90.6573 -0.131667 90.1349 0.395Z"
                        fill="#F1F2FD"
                      />
                      <path
                        d="M103.529 0.395L94.1533 9.72833C93.6309 10.2483 93.6309 11.095 94.1533 11.615C94.6756 12.135 95.5262 12.135 96.0486 11.615L105.425 2.28167C105.947 1.76167 105.947 0.915 105.425 0.395C104.896 -0.131667 104.052 -0.131667 103.529 0.395Z"
                        fill="#F1F2FD"
                      />
                      <path
                        d="M116.924 0.395L107.548 9.72833C107.025 10.2483 107.025 11.095 107.548 11.615C108.07 12.135 108.921 12.135 109.443 11.615L118.819 2.28167C119.342 1.76167 119.342 0.915 118.819 0.395C118.29 -0.131667 117.446 -0.131667 116.924 0.395Z"
                        fill="#F1F2FD"
                      />
                      <path
                        d="M130.318 0.395L120.942 9.72833C120.42 10.2483 120.42 11.095 120.942 11.615C121.465 12.135 122.315 12.135 122.838 11.615L132.214 2.28167C132.736 1.76167 132.736 0.915 132.214 0.395C131.685 -0.131667 130.841 -0.131667 130.318 0.395Z"
                        fill="#F1F2FD"
                      />
                    </svg>
                  </h5>
                  <h2 className="section-title__title text-capitalize mb-2">
                  Join the ORACLE LANGUAGE INSTITUTE Family
                  </h2>
                  <p>ORACLE LANGUAGE INSTITUTE is more than just a language learning center; it's a springboard for personal growth, career advancement, and cultural exploration. Whether you're a business professional, a student, a traveller, or someone seeking a new challenge, we have the perfect program to help you achieve your language learning goals.
                  </p>
                
                </div>
               
                <p className="about-one__content__text">
                  To enhance the employability of students by developing the following skills:
                </p>
                <div className="about-one__box">
                  <div className="about-one__box__wrapper">

                    <h4 className="about-one__box__title">Flexible Classes</h4>
                    <div className='container'>
                      <div className="row mt-4">
                        <div className="col-lg-6 mb-3">
                          <div className="Wrapper-RightICon_aboutUS d-flex">
                            <i className="fa-solid fa-check" /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <h6>Resume Writing</h6>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="Wrapper-RightICon_aboutUS d-flex ProvideBestSupport">
                            <i className="fa-solid fa-check" /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <h6> Effective Meetings</h6>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="Wrapper-RightICon_aboutUS d-flex">
                            <i className="fa-solid fa-check" /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <h6> Interview Skills</h6>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="Wrapper-RightICon_aboutUS d-flex">
                            <i className="fa-solid fa-check" /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <h6>
                              Listening Skills
                            </h6>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="Wrapper-RightICon_aboutUS d-flex">
                            <i className="fa-solid fa-check" /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <h6>
                              Group Discussion Skills
                            </h6>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="Wrapper-RightICon_aboutUS d-flex">
                            <i className="fa-solid fa-check" /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <h6>
                              Questioning Skills
                            </h6>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="Wrapper-RightICon_aboutUS d-flex">
                            <i className="fa-solid fa-check" /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <h6>
                              Effective Communication
                            </h6>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="Wrapper-RightICon_aboutUS d-flex">
                            <i className="fa-solid fa-check" /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <h6>
                              Team Building
                            </h6>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="Wrapper-RightICon_aboutUS d-flex">
                            <i className="fa-solid fa-check" /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <h6>
                              Presentation Skills
                            </h6>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="Wrapper-RightICon_aboutUS d-flex">
                            <i className="fa-solid fa-check" /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <h6>
                              Art of Negotiation
                            </h6>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="Wrapper-RightICon_aboutUS d-flex">
                            <i className="fa-solid fa-check" /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <h6>
                              Public Speaking
                            </h6>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
               
                <Link className="eduact-btn" href='#'>
                  <span className="eduact-btn__curve" />
                  Discover More <i className="fa-solid fa-arrow-right"></i>
                  <i className="icon-arrow" />
                </Link>
              
              </div>
            
            </div>
          </div>
        </div>
      </section>
      <QuiryForm />
      <CompanyLogoSlider />

      <Footer />

    </>
  )
}

export default Page
