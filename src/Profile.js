import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
    return(
        <>
        <div className="container">
            <div className='my-5'>
                <h1 className='text-center head'><strong> Details </strong></h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form className="shadow w-75 mx-auto shadow p-5 bgb">
                            <div className="mb-3">
                                <h4>
                                    Email :{" "}
                                    {localStorage.getItem("email")
                                    ? localStorage.getItem("email")
                                    : "NA"}
                                </h4>
                            </div>

                            <div className="mb-3">
                                <img src={localStorage.getItem("img")
                                    ? localStorage.getItem("img")
                                    : "NA"}
                                alt="profilePic"
                                name="file"
                                className='img-thumbnail'
                                height={400}
                                width={400}
                            />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </>
    );
};

export default Profile;