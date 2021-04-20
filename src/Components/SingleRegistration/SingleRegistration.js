import React from 'react';
import { useHistory } from 'react-router';

const SingleRegistration = (props) => {
    const{ _id, userName,email,courseName}=props.course
    const history = useHistory();

    const handleDelete = ()=>{
        fetch(`http://localhost:5000/delete/${_id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            alert('Registration is successfully deleted')
            history.replace('/')
        });
    }
    return (
        <tr>
        <td>{userName}</td>
        <td>{email}</td>
        <td>{courseName}</td>
        <td><button   className="btn btn-danger">Update</button></td>
        
        <td><button  onClick={handleDelete} className="btn btn-danger">Delete</button></td>
    </tr> 
    );
};

export default SingleRegistration;