import React from 'react'
const QuiryForm = () => {
return (
<>
<section className='Query-form-wrapper pt-pb'>
   <div className='container'>
      <div className='row'>
         <div className='col-lg-6 Query-form-wrapper'> <img className='img-fluid' src="https://www.pngall.com/wp-content/uploads/5/Learning-PNG-Free-Download.png"/> </div>
         <div className='col-lg-6'>
           
            
            <form>
            <h2 className='text-white'> Enquiry Form </h2>
            <hr></hr>
            <div className='row'>
            <div className="mb-3 col-sm-6"> <label htmlFor="exampleInputPassword1" className="form-label"> Name </label> 
               <input type="text" className="form-control" id="exampleInputPassword1" /> 
               </div>
               <div className="mb-3 col-sm-6"> <label htmlFor="exampleInputEmail1" className="form-label"> Email </label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> 
                </div>

               <div className="mb-3 col-sm-12"> <label htmlFor="Contact Number" className="form-label"> Contact Number </label> 
               <input type="text" className="form-control" id="Contact Number" /> 
               </div>
               <div className="mb-3 col-sm-12">
                  <label htmlFor="  Contact Number" className="form-label"> Courses </label> 
                  <select className="form-select" aria-label="Default select example">
                     <option >Open this select menu</option>
                     
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
               </div>
               <button type="submit" className="btn Secondary-orange  text-white"> Submit <i className="fa-solid fa-arrow-right-to-bracket"></i> </button> 
            </form>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default QuiryForm;