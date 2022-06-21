import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axois from "axios"

const UserOrderHistory = () => {

    const user = useSelector((state) => state.handleCart)

    useEffect(() => {

        const fetchOrder = async () => {
            try {

                const { data } = await axois.get(`http://localhost:4000/api/order/author`,
                    {
                        headers: { authorization: `Bearer ${user.userInfo.token}` }
                    }
                )
                console.log(data)

            } catch (err) {
                console.log(err)
            }
        }
        fetchOrder()

    }, [])

    return (
        <div className='container'>
            {
                user.cart.cartItem.length === 0 && <Alert variant="primary" className='mt-3'>Empty..</Alert> 
            }
        </div>
    );
};

export default UserOrderHistory;