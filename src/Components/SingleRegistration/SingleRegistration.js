import React, { useState } from 'react';
import { useHistory } from 'react-router';

const SingleRegistration = (props) => {
    const{ _id, userName,email,courseName}=props.course
    const history = useHistory();
    const [updateOrder,setUpdateOrder] = useState();

    const updateProduct = () =>{
        const update = document.getElementById('update-status')
        fetch(`https://fierce-savannah-48718.herokuapp.com/update/${_id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateOrder)
        })
        .then(res=>res.json())
        .then(data=>{
            alert('Order is updated')
            history.replace('/')
        });

    }

    const handleDelete = ()=>{
        fetch(`https://fierce-savannah-48718.herokuapp.com/delete/${_id}`,{
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
        <td><button   className="btn btn-warning" >Update</button></td>
        
        <td><button  onClick={handleDelete} className="btn btn-danger">Delete</button></td>
    </tr> 
    );
};

export default SingleRegistration;