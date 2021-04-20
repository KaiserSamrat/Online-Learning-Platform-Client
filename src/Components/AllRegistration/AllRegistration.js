import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SingleRegistration from '../SingleRegistration/SingleRegistration';

const AllRegistration = () => {
    const [courseList, setCourseList] = useState([])
    useEffect(() => {
        fetch(`https://fierce-savannah-48718.herokuapp.com/bookList`)
            .then(res => res.json())
            .then(data => setCourseList(data))
    }, [])
    return (
        <div className='row'>
            <h3 className="text-center m-3">Manage Item</h3>
            <div className="col-md-3">
                <Sidebar></Sidebar>
                

            </div>
            <div className="col-md-8">
                <table className="table">
                <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Item Name</th>
                                <th>UPdate</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            courseList.map(course=><SingleRegistration course={course}></SingleRegistration>)
                        }
                    </tbody>
                </table>

            </div>
            
        </div>
    );
};

export default AllRegistration;