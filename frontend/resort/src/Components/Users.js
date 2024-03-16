import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import '../Users.css';

export default function Users() {
    const [updateUser, setUpdateUser] = useState(false);
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);
    const lName = useRef();
    const fName = useRef();
    const phoneNo = useRef();
    const uId = useRef();

    const updateHandle = (userId) => {
        setUserId(userId);
        setUpdateUser(true);
    };

    const deleteHandle = (userId) => {
        setUserId(userId);
        axios
            .delete("http://localhost:7066/user/deleteUser/"+ userId)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    };
    const submitUpdate = () => {
        const newUser = {
            firstName: fName.current.value,
            lastName: lName.current.value,
            phNo: phoneNo.current.value,
            userId: userId
        };
        axios
            .put("http://localhost:7066/user/updateUser", newUser)
            .then((res) => {
                console.log(res.data);
                // setUsers(res.data);
                setUpdateUser(false); // Reset update state after successful update
            })
            .catch((err) => {
                console.log(newUser)
                console.log(err);
                alert(err);
            });
    };

    useEffect(() => {
        axios
            .get("http://localhost:7066/user/getUsers/user")
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className=" border border-solid">
                        <div className="row text-center">
                            <h2>Users Details</h2>
                        </div>
                        <table className="table table-striped mt-3">
                            <thead>
                                <tr className='border'>
                                    <th>user_id</th>
                                    <th>first_name</th>
                                    <th>last_name</th>
                                    <th>email</th>
                                    <th>Phone Number</th>
                                    <th>Dob</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users && users.map((user) => (
                                    <tr key={user.userId}>
                                        <td className='border'>{user.userId}</td>
                                        <td className='border'>{user.firstName}</td>
                                        <td className='border'>{user.lastName}</td>
                                        <td className='border'>{user.email}</td>
                                        <td className='border'>{user.phNo}</td>
                                        <td className='border'>{user.dob}</td>
                                        <td className='border'>
                                            <button type="button" className="btn btn-outline-primary users-add" onClick={() => updateHandle(user.userId)}>update</button>
                                            <button type="button" className="btn btn-outline-primary" onClick={() => deleteHandle(user.userId)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row mt-3'>
                    {updateUser &&
                        <>
                            <div className='row'>
                                <h1 className='mb-3'>Update User</h1>
                                <div className='col-md-6 mb-3'>
                                    <div className=" mb-3">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" ref={fName} />
                                    </div>
                                    <div>
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" ref={lName} />
                                    </div>
                                </div>
                                <div className='col-md-6 mb-3'>
                                    <div className="mb-3">
                                        <label>Contact No</label>
                                        <input type="text" className="form-control" ref={phoneNo} />
                                    </div>
                                    <div>
                                        <label>UserId</label>
                                        <input type="text" className="form-control" value={userId} ref={uId} disabled />
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3" onClick={submitUpdate}>Submit</button>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
