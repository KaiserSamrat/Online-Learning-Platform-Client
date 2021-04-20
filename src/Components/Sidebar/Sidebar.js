import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='m-5 p-5'>
            <Link to='/allregistration'><button className='btn btn-success'>Manage Item</button></Link>
                <br />
                <br />
                <Link to='/addcourse'><button className='btn btn-success'>Add item</button></Link>
        </div>
    );
};

export default Sidebar;