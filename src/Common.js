import React from 'react';
import web from "../src/images/img1.jpg";

const Common = (props) => {
  return (
    <>
        {/* <h1>Welcome Home Page</h1> */}
        <section id='header' className='d-flex align-items-center'>
            <div className='container-fluid'>
                 <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                            <h1>
                                {props.name}
                                <strong className='brand-name'>My World</strong>
                            </h1>
                            <h2 className='my-3'>{props.line}</h2>
                            {/* <h4 className='my-3'>{props.line2}</h4> */}
                            <br/>
                            <div className='mt3'>
                                <a href={props.visit} className='btn btn-outline-primary'>{props.btname}</a>
                                {/* <a href='' className='btn-get-started'>Get Started</a> */}
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="Common img"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    </>
  );
};

export default Common;