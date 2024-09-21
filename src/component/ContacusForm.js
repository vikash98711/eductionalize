import React from 'react'

const ContacusForm = () => {
  return (
  <>
    <section className='Query-form-wrapper pt-pb'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-6 Query-form-wrapper'>
<img src="/assets/img/slide-girl.png"/>
      </div>
      <div className='col-lg-6'>
      <h4 className="course-details__curriculum__title text-center EnquiryForm-underline">Interested in discussing</h4>

      <form>

  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">
      Name <span>*</span>
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputName"
      aria-describedby="emailHelp"
    />

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email <span>*</span>
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />

  </div>
 
  <div className="mb-3">
    <label htmlFor="  Contact Number" className="form-label">
      Phone <span>*</span>
    </label>
    <input
      type="text"
      className="form-control"
      id="Contact Number"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="  Contact Number" className="form-label">
      Message <span>*</span>
    </label>
    <textarea
  className="form-control"
  id="exampleFormControlTextarea1"
  rows={3}
  defaultValue={""}
/>


  </div>
 
  <button type="submit" className="btn Secondary-orange  text-white">
    Submit <i className="fa-solid fa-arrow-right-to-bracket"></i>
  </button>
</form>

      </div>
    </div>
  </div>

</section>
  </>
  )
}

export default ContacusForm;
