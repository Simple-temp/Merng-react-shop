import React from 'react';
import { useEffect } from 'react';
import axois from "axios"
import { useSelector } from "react-redux"

const Order = () => {

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
        <div>

        </div>
    );
};

export default Order;