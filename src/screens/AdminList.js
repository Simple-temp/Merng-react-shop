import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const AdminList = () => {

    const Admin = useSelector((state) => state.handleCart)

    return (
        <div className='container'>
            {
                Admin.cart.cartItem.length === 0 && <Alert variant="primary" className='mt-3'>Empty Admin..</Alert> 
            }
        </div>
    );
};

export default AdminList;