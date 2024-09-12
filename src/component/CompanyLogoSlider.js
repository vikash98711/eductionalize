"use client"

import React from 'react';

import Slider from 'react-slick';

const CompanyLogoSlider = () => {
  const settings = {
    dots: false,
    autoPlay: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true, 
    responsive: [ 
      {
        breakpoint: 992, // Medium screen
        settings: {
          slidesToShow: 2,
          centerMode: false,
          focusOnSelect: false
        }
      },
      {
        breakpoint: 576, // Small screen
        settings: {
          slidesToShow: 1,
          centerMode: true,
          focusOnSelect: true
        }
      }
    ]
  };
  
  return (
   <>
    <section className='wrapper-company-logos-sslider pt-pb'>
 <div className='container'>
         
        
       <div className='co-sm-12 text-center'>
       <p className='mb-0'>We prepare you for</p>
         <h2 className="text-dark"> 
          International Exam
           
         </h2>
         <hr></hr>
       </div>
       
         <Slider {...settings}>
                 
                 {/* <div className='testimonial-slider-wrap px-2'>
                    <img src="https://www.oracleglobaleducation.com/images/partner6.jpg"/>
                 </div>  */}
                 <div className='Common-wrapper-company-logos'>
                     
                       <img src="https://www.oracleglobaleducation.com/images/partner5.jpg"/>
                    
                 </div> 
                 <div className='Common-wrapper-company-logos'>
                     
                       <img src="https://www.oracleglobaleducation.com/images/partner6.jpg"/>
                     
                 </div> 
                 <div className='Common-wrapper-company-logos'>
                    
                       <img src="https://www.oracleglobaleducation.com/images/partner7.jpg"/>
                     
                 </div> 
                 <div className='Common-wrapper-company-logos'>
                    
                       <img src="https://www.oracleglobaleducation.com/images/partner8.jpg"/>
                     
                 </div> 
               
                
                    
             </Slider>
        
         
    

      </div>
 </section>
   </>
  )
}

export default CompanyLogoSlider;
