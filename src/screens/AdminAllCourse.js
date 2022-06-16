import { useQuery } from '@apollo/client';
import React from 'react';
import { Alert } from 'react-bootstrap';
import { GET_ALL_COURSE } from '../graphqlQueres/Queres';


const AdminAllCourse = () => {

    const {loading, error, data} = useQuery(GET_ALL_COURSE)
    console.log(data)

    return (
        <div className='container'>
            {
                data && data.courses && data.courses.length === 0 ? <Alert variant="primary" className='mt-3'>Empty Course..</Alert> 
                : <Alert variant="info" className='mt-3'>Total course : {data && data.courses && data.courses.length}</Alert> 
            }
        </div>
    );
};

export default AdminAllCourse;