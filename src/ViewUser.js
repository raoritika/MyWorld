import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';

const ViewUser = () => {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const {id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(res.data);
    }; 

    return(
        // <h1>User</h1>
        <div className="container py-4 margin">
            <h1 className="display-4 text-center">User Details</h1>
            <Link className="btn btn-primary right" to="/persons">
                Back to Users
            </Link>
            <h4 className="">User Id: {id}</h4>
            <hr/>

            <ul className="list-group w-50">
                <li className="list-group-item">name: {user.name}</li>
                <li className="list-group-item">user name: {user.username}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">phone: {user.phone}</li>
                <li className="list-group-item">website: {user.website}</li>
            </ul>
        </div>
    );
};

export default ViewUser;