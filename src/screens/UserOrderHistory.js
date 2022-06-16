import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const UserOrderHistory = () => {

    const cart = useSelector((state) => state.handleCart)

    return (
        <div className='container'>
            {
                cart.cart.cartItem.length === 0 && <Alert variant="primary" className='mt-3'>Empty..</Alert> 
            }
        </div>
    );
};

export default UserOrderHistory;