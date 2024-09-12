import { CourseData } from '@/utils/data'
import Link from 'next/link'
import React from 'react'


const Courses = () => {

    const CourseList = CourseData
    console.log(CourseList,"CourseListCourseList");
    

  return (
    <section className='course-bg py-100 pt-pb'>
        <div className="container">
            <div className="d-flex justify-content-between gap-1 align-items-end flex-wrap mb-2 position-relative">
            <div className='mb-0'>
            <h5 className='text-primary mb-5px'> Top-notch Language Curriculum</h5>
            <h2 className='ls-2'>Highlighted Programs in Language Courses </h2>
            </div>
            <div className="mb-0 "> 
                <Link href="/best-international-laungage-courses" className=' border-0 text-white btn-hover color-2 color22 d-flex align-items-center gap-2'>View All
                <img src="/assets/img/viewAll.gif" alt="view" width={28} />
                 </Link> 
            </div> 
            </div>

            <div className="row">


                {CourseList.slice(0, 12).map((courseValue)=>(
                     <div className="col-lg-4 col-md-6 col-12 mt-3" key={courseValue.id}>
                     <div className="courses-card-wrapper">
                     <div className="courses-card-box position-relative">
                         <span className="courses-img-wrap d-inline-block rounded-circle  bg-secondary position-absolute top-0 end-0"> 
                             <img src={courseValue.flagImage} alt="courses" className='img-fluid w-100 rounded-circle' />
                         </span> 
                         <div className='mb-3'>
                             <span className="bg-success px-2 py-1 text-white rounded">{courseValue.totalClass} Classes</span>
                         </div>
                         <div className='d-flex align-items-center mb-2 gap-2'>
                             <div className='d-flex '>
                             <i className="fa-solid text-secondary fa-star"></i> 
                             <i className="fa-solid text-secondary fa-star"></i> 
                             <i className="fa-solid text-secondary fa-star"></i> 
                             <i className="fa-solid text-secondary fa-star"></i> 
                             <i className="fa-solid text-secondary  fa-star-half-stroke"></i>
                             </div> 
                         </div>
                         <h3 className='courses-courseName'>
                             <Link href={`/${courseValue.slug}`}>{courseValue.title}</Link>
                         </h3>
                         <p className='mb-0'><i className="fa-solid fa-users"></i>&nbsp;<b>Batch Size -</b> {courseValue.batchSize} Students</p>
                         <p className='mb-0'><i className="fa-regular fa-clock"></i>&nbsp;<b>Timing- </b>{courseValue.timing}</p>
                        <p><i className="fa-regular fa-calendar"></i>&nbsp;<b>{courseValue.projectManager}- </b>{courseValue.duration}</p>
                        
                         <div className="course-duration d-flex justify-content-between gap-2 flex-wrap">
                             <div>
                                 <p className="mb-0 fs-14">Fees</p>
                               
                             </div>
                             <div>
                                 <h5 className="text-end text-white"> <i className="fa-solid fa-indian-rupee-sign"></i> {courseValue.price}</h5>
                                
                             </div>
                         </div>
                     </div>
 
                     </div>
                 </div> 
                ))} 


            </div>
        </div>
    </section>
  )

}

export default Courses