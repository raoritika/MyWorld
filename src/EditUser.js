// import React from "react";

// const EditUser = () => {
//     return(
//         <h1>Edit User</h1>
//     )
// };

// export default EditUser;

import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';

const EditUser = () => {

    let history = useHistory();
    const {id} = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const {name, username, email, phone, website} = user;

    const onInputChange = e => {
        // console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value});
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user);
        history.push("/persons");
    };

    const loadUser = async () => {
        // const result = await axios.get("http://localhost:3001/users/" + id);  //same
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);  
    }

    return(
        // <h1>Add User</h1>
        <div className="container ">
            <br/>
            <br/>
            <div className="w-75 mx-auto shadow p-5 bgb">
                <h2 className="text-center mb-4">Edit a User</h2>
                <form className="row g-3" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Enter Your Name'
                            name='name'
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Enter Your Userame'
                            name='username'
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type='email'
                            className='form-control form-control-lg'
                            placeholder='Enter Your E-mail Address'
                            name='email'
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Enter Your Phone Number'
                            name='phone'
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                    <input
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Enter Your Website Name'
                            name='website'
                            value={website}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default EditUser;