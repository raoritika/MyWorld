import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return{
                ...preVal,
                [name] : value,
            };
        });

    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
        );
    };

    return (
    <>
        {/* <h1>Welcome Contact Page</h1> */}
        <div className='contact'>
            <div className='my-5'>
                <h1 className='text-center head'><strong> Contact Us </strong></h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Full Name
                                </label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="fullname" 
                                    value={data.fullname} 
                                    onChange={InputEvent} 
                                    placeholder="Enter your Name" 
                                    required
                                />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Phone No. 
                                </label>
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="phone" 
                                    value={data.phone} 
                                    onChange={InputEvent} 
                                    placeholder="Mobile No." 
                                    required
                                />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Email address
                                </label>
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="email" 
                                    value={data.email} 
                                    onChange={InputEvent} 
                                    placeholder="name@example.com" 
                                    required
                                />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Message
                                </label>
                                <textarea 
                                    class="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3" 
                                    name="msg" 
                                    value={data.msg} 
                                    onChange={InputEvent}>
                                </textarea>
                            </div>

                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">
                                    Submit form
                                </button>
                            </div>
                            <br/>
                        </form>
                    </div>
                </div>
            </div>
            <div className='map'>
                <iframe class="map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Chitkara%20University,Rajpura,Punjab+(My%20University%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <br/>
        </div>
    </>
    );
};

export default Contact;
