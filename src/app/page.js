import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/component/Navigation";
import Link from "next/link";
import LearningJourney from "@/component/LearningJourney";
import Courses from "@/component/Courses";
import CourseReview from "@/component/CourseReview";
import AboutUs from "@/component/AboutUs";
import Footer from "@/component/Footer";
import Newsletter from "@/component/Newsletter";
import Blog from "@/component/Blog";
import Cta from "@/component/Cta";
import Testimonial from "@/component/Testimonial";
import BlogVideoNotice from "@/component/BlogVideoNotice";
import OurService from "@/component/OurService";
import HappyStudentStrip from "@/component/HappyStudentStrip";
import CareerCounsellingStrip from "@/component/CareerCounsellingStrip";
import QuiryForm from "@/component/QuiryForm";
import CompanyLogoSlider from "@/component/CompanyLogoSlider";
import Faq from "@/component/Faq";


export function generateMetadata(params) {
  return {
    title: "Join The Best International Language Institute for Foreign Languages course | Oracle Global Education",
    description: "If you have a passion for learning foreign and regional languages then this is the best institute to learn international languages. Oracle is the best coaching, learning teaching institute in Delhi. It covers all the courses of international languages ",
    keywords: ['best international language institute in Delhi', 'best foreign language institute in Delhi', 'best leading language institute in Delhi', 'best language teaching institute in Delhi', 'study with best global language institute oracle'],
    alternates: {
      canonical: `https://www.oracleglobaleducation.com`,
    },
  }
}

export default function Home() {
  return (
    <>
      <Navigation />
      <LearningJourney />
      <AboutUs />
      <Courses />
      
      <HappyStudentStrip />
      <OurService />
      <BlogVideoNotice />
      <CourseReview />
      {/* <Cta/> */}

      {/* <section className="service-one pt-pb">
        <div
          className="service-one__bg"
          style={{ backgroundImage: "url(assets/images/shapes/service-bg-1.png)" }}
        />
        <div className="container">
          <div className="section-title text-center" >
            <h5 className="section-title__tagline mb-5px">
              Our Service
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
            <h2 className="section-title__title ls-2">
              Fostering Continuous Learning in Various Languages
              <br /> Exceptional Community
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 wow fadeInUp animated" >
              <div className="service-one__item">
                <div className="service-one__wrapper">
                <div className="d-flex gap-3 align-items-center">
                  <div className="service-one__icon">
                    <span className=" fa-solid fa-book" />
                  </div>
                  <h3 className="service-one__title">
                    <Link href="#">Corporate Training</Link>
                  </h3>
                  </div>
                  <p className="service-one__text text-justify">
                  In today's rapidly evolving business landscape, staying ahead of the curve is crucial. Companies that invest in their employees' skill development see a significant return on investment. Here at ORACLE LANGUAGE INSTITUTE, we provide comprehensive corporate training solutions designed to cultivate a motivated, adaptable, and highly skilled workforce

                  </p>
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
            <div className="col-lg-3 col-md-6 wow fadeInUp animated"  >
              <div className="service-one__item">
                <div className="service-one__wrapper">
                  <div className="d-flex gap-3 align-items-center">
                  <div className="service-one__icon">
                    <span className="fa-regular fa-lightbulb" /> 
                  </div>
                 
                  <h3 className="service-one__title">
                    <Link href="#">Translation Services</Link>
                  </h3>
                  </div>
                
                  <p className="service-one__text text-justify">
                  The world is a tapestry of languages, each with its unique charm and power to connect. At ORACLE LANGUAGE INSTITUTE, we understand the importance of clear and accurate communication across language barriers. That's why we offer a comprehensive suite of translation services designed to help you reach new audiences, expand your global reach, and build meaningful connections across borders.
                  </p>
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
            <div className="col-lg-3 col-md-6 wow fadeInUp animated" >
              <div className="service-one__item">
                <div className="service-one__wrapper">
                <div className="d-flex gap-3 align-items-center">
                  <div className="service-one__icon">
                    <span className="fa-solid fa-tv" />
                  </div>
                
                  <h3 className="service-one__title">
                    <Link href="#">Train the Trainer</Link>
                  </h3>
                  </div>
                 
                  <p className="service-one__text text-justify">
                  Do you have subject-matter experts within your organization who excel in their fields but lack the skills to effectively train others? At ORACLE LANGUAGE INSTITUTE, we understand the importance of fostering a culture of knowledge sharing and continuous learning. That's why we offer comprehensive Train-the-Trainer (TTT) services prepared to transform your subject-matter experts (SMEs) into confident, engaging, and impactful trainers.
                  </p>
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
            <div className="col-lg-3 col-md-6 wow fadeInUp animated" >
              <div className="service-one__item">
                <div className="service-one__wrapper">
                <div className="d-flex gap-3 align-items-center">
                  <div className="service-one__icon">
                    <span className="fa-solid fa-up-down-left-right" />
                  </div>
                 
                  <h3 className="service-one__title ">
                    <Link href="#">Kids Summer Camp</Link>
                  </h3>
                  </div>
                
                  <p className="service-one__text text-justify">
                  The magic of summer camp lies in creating unforgettable experiences for children. But what empowers camp counsellors to weave that magic? Exceptional training! We offer comprehensive Kids Summer Camp Training designed to equip your staff with the skills, knowledge, and confidence to transform your camp into a haven of fun, learning, and personal growth for every child.

                  </p>
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
      </section> */}
      <Blog />
      
      {/* <Testimonial/> */}
      <QuiryForm />
      
      <CompanyLogoSlider />
      <Faq />
      <CareerCounsellingStrip />
      {/* <Newsletter/> */}
      <Footer />

    </>
  );
}  
