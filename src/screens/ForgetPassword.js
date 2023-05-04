import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"

const ForgetPassword = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault(e)

        try{

            const { data } =await axios.get(`https://udemy-j7sz.onrender.com/api/user/${email}`)
            console.log(data)
            if(name === data.name && email === data.email){
                navigate("/newpassword")
            }else{
                toast.error("email or name invalid")
            }   

        }catch(err){
            console.log(err)
            toast.error("email or name invalid")
        }

    }

    return (
        <div>
            <Row>
                <h4 className='text-center my-5'>Forget password</h4>
                <Col md={7} className="mx-auto border p-4 mb-5">
                    <Form onSubmit={handleSubmit} className="mb-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" name='name' value={name} placeholder="Name" onChange={(e) => setname(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={email} placeholder="Email" onChange={(e) => setemail(e.target.value)} required />
                        </Form.Group>

                        <Button variant="outline-dark" type="submit">
                            Next
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ForgetPassword;