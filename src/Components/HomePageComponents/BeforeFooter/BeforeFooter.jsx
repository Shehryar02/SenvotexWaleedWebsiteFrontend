import React from 'react'
import './BeforeFooter.css'

const BeforeFooter = () => {
  return (
    <div className='container-fluid my-lg-5 py-lg-5 py-md-5 p-5'>
      <div className="container beforeFooterMainContainer p-lg-5 p-md-5 p-4">
        <div className="row gy-4">
            <div className="col-lg-8 col-md-8 col-12 beforeFooterLeft">
                <h1 className='m-0'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            </div>
            <div className="col-lg-4 col-md-4 col-12 beforeFooterRight d-flex flex-column justify-content-center align-items-center gap-lg-2 gap-md-2 gap-2">
                <input type="text" placeholder='Enter your email address'/>
                <button>Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BeforeFooter
