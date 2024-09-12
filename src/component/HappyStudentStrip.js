import React from 'react'

const HappyStudentStrip = () => {
  return (
    <>
{/* <section className='Happy-student-Strip-wrapper mt-0 p-4'>
<div className='container'>
    <div className='row'>
        <div className='col-lg-3 text-center'>
            <div className='wrapper-happy-card'>
           
            <h2 className='text-white'><i className="fa-regular fa-face-smile"></i>&nbsp;20,000 <i className="fa-solid fa-plus"></i></h2>
            <p className='text-white mb-0'>Happy Students</p>
           
            </div>
        </div>
        <div className='col-lg-3 text-center'>
            <div className='wrapper-happy-card'>
           
            <h2 className='text-white'><i className="fa-solid fa-trophy"></i>&nbsp;25 <i className="fa-solid fa-plus"></i></h2>
            <p className='text-white mb-0'>BEST AWARDS WON</p>
           
            </div>
        </div>
        <div className='col-lg-3 text-center'>
            <div className='wrapper-happy-card'>
           
            <h2 className='text-white'><i className="fa-solid fa-circle-check"></i>&nbsp;500 <i className="fa-solid fa-plus"></i></h2>
            <p className='text-white mb-0'>CLASSES COMPLETED</p>
           
            </div>
        </div>
        <div className='col-lg-3 text-center'>
            <div className='wrapper-happy-card'>
           
            <h2 className='text-white'><i className="fa-solid fa-book"></i>&nbsp;20 <i className="fa-solid fa-plus"></i></h2>
            <p className='text-white mb-0'>TOTAL COURSES</p>
           
            </div>
        </div>
    </div>
</div>
</section> */}
  <section className='schedule-sec'>
<div className="container">
    <div className="row d-flex  mb-2 position-relative">
    <div className='col-sm-8 py-100 pt-pb'>
   
    <h2 className='ls-2 text-white'>Book Your Seat For Free Career Counselling!
    We'll make you understand the procedures. </h2>
    <a className='btn-hover bg-white text-primary' href='#'>Sechdule a FREE Call</a>
    </div>
    <div className="col-sm-4  mt-2"> 
  
     <img src="https://www.pngkit.com/png/full/362-3629046_corporate-office-girl-call-centre-png.png" className='img-fluid' style={{width:"200px"}}></img>
    </div> 
    </div>
    </div>
    </section>
<section className="fact-one pt-pb"
>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 p-0">
        <div className="fact-one__item text-center bg-color1">
        <span><i className="fa-solid fa-users text-white"></i></span>
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
      <div className="col-lg-3 col-md-6 p-0">
          <div className="fact-one__item text-center bg-color2">
          <span><i className="fa-solid fa-trophy text-white"></i></span>
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
      <div className="col-lg-3 col-md-6 p-0">
          <div className="fact-one__item text-center bg-color3">
          <span><i className="fa-solid fa-chair text-white"></i></span>
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
      <div className="col-lg-3 col-md-6 p-0">
      <div className="fact-one__item text-center bg-color4">
      <span><i className="fa-solid fa-book text-white"></i></span>
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

    </>
  )
}

export default HappyStudentStrip;
