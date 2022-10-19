import React, {useState} from "react";
import { NavLink } from "react-router-dom";
// import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {

    // const [data, setData] = useState({
    //     fullname: "",
    //     phone: "",
    //     email: "",
    //     msg: "",
    // });

    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     alert("Signed in!");
    // };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [img, setImg] = useState('');

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result)
            reader.onabort = (error) => reject(error)
            reader.readAsDataURL(file)
        })
    }

    const handleImg = (e) =>{
        const file = e.target.files[0]
        getBase64(file).then(base64 =>{
            localStorage['img'] = base64;
            console.debug('File Store', base64);
        }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === ""){
            alert("Name is Required!");
        }else if(password === ""){
            alert("Password is Required!");
        }else{
            localStorage.setItem('email',email);
            localStorage.setItem('password',password);
            //localStorage.setItem('img',img);
        }
    };

    return (
        <div className="container">
            <div className='my-5'>
                <h1 className='text-center head'><strong> Sign Up </strong></h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form className="shadow w-75 mx-auto shadow p-5 bgb">
                        <h6>Please login to your account</h6>
                        <br/>
                            <div className="mb-3">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="email" 
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)} 
                                    placeholder="Username or Email" 
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type='password'
                                    className="form-control" 
                                    id="exampleFormControlInput2"
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type='file'
                                    alt="profilePic"
                                    className="form-control" 
                                    id="exampleFormControlInput3"
                                    name="file"
                                    onChange={handleImg}
                                />
                                {/* <img src={localStorage.getItem("img")
                                ? localStorage.getItem("img")}
                                type='file'
                                    alt="profilePic"
                                    className="form-control" 
                                    id="exampleFormControlInput3"
                                    name="file"
                                    onChange={handleImg}
                                /> */}
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary col-md-12" type="submit" onClick={handleSubmit}>
                                <NavLink className="link" to="/profile">Sign Up</NavLink>
                                </button>
                            </div>
                            <br/>
                            <p className="text-center">Forgot password?</p>
                            <br/>
                            <p>
                                Don't have an account?
                                <button className="btn btn-outline-primary space col-md-4">
                                    Create new
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default Signin ;