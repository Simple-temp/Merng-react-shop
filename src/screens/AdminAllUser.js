import { useQuery } from '@apollo/client';
import React from 'react';
import { Alert } from 'react-bootstrap';
import { GET_ALL_USER } from '../graphqlQueres/Queres';

const AdminAllUser = () => {

    const {loading, error, data} = useQuery(GET_ALL_USER)
    console.log(data)

    return (
        <div className='container'>
            {
                data && data.users && data.users.length === 0 && <Alert variant="primary" className='mt-3'>Empty User..</Alert> 
            }
             <Alert variant="info" className='mt-3'>Total users : {data && data.users && data.users.length  - 1}</Alert> 
        </div>
    );
};

export default AdminAllUser;