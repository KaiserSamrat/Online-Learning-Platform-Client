import React from 'react';
import { useHistory } from 'react-router';

const SingleOrder = (props) => {
    const { _id,courseName, courseDescription, img } = props.order
    const history = useHistory();
    const handleDelete = ()=>{
        fetch(`http://localhost:5000/delete/${_id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            alert('Order is successfully deleted')
            history.replace('/')
        });
    }
    return (
        <div className="col-md-3 " >
            <div className='card border-0 bg-white shadow'>
                <div class=" bg-light rounded m-3">
                    <img src={img} class="card-img-top img-fluid" alt="..." style={{ height: "200px" }} />

                </div>
                <div className="card-body">
                    <h3>{courseName}</h3>
                    <h5>{courseDescription}</h5>
                    <div onClick={handleDelete} className="btn btn-danger">Delete</div>
                </div>

            </div>


        </div>


    );
};

export default SingleOrder;