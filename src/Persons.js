import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Persons = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        // setUser(result.data.reverse());
        setUser(result.data);
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    }

    return (
        <>
            {/* <h1>Welcome Users Page</h1>  */}
            <div className='container'>
                <div className="py-4">
                    <p>
                        <h1 className='text-center head'><strong>Registered Users</strong></h1>
                        <Link className='btn btn-primary right' to="/users/add">Add User</Link>
                        <br/>
                        <br/>
                    </p>
                    <table class="table border shadow">
                        <thead className='table-dark'>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>User Name</th>
                                <th scope='col'>Email</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr className="table-light">
                                        <th scope="row">{ index+1 }</th>
                                        <td>{ user.name }</td>
                                        <td>{ user.username }</td>
                                        <td>{ user.email }</td>
                                        <td>
                                            <Link className="btn btn-primary mr-3" to={`/users/${user.id}`}>View</Link>
                                            <Link className='btn btn-outline-primary mr-3' to={`/users/edit/${user.id}`}>Edit</Link>
                                            <Link className='btn btn-danger' onClick={() => deleteUser(user.id)}>Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Persons;