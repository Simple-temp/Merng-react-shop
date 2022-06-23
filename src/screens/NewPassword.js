import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"

const NewPassword = () => {

    const navigate = useNavigate()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault(e)
        
        if(password !== confirmpassword){
            toast.error("password don't matched")
        }
        if(password === confirmpassword){
            try {

                const { data } = await axios.put(`http://localhost:4000/api/user/${email}`,{
                    email,
                    password,
                })
                console.log(data)
                toast.success("Password changed successfully")
                navigate("/login")
            } catch (err) {
                console.log(err)
                toast.error("email or password invalid")
            }
        }

    }


    return (
        <div>
            <Row>
                <h4 className='text-center my-5'>New password</h4>
                <Col md={7} className="mx-auto border p-4 mb-5">
                    <Form onSubmit={handleSubmit} className="mb-5">


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={email} placeholder="Email" onChange={(e) => setemail(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="email" value={password} placeholder="Password" onChange={(e) => setpassword(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="email" value={confirmpassword} placeholder="Confirm Password" onChange={(e) => setconfirmpassword(e.target.value)} required />
                        </Form.Group>

                        <Button variant="outline-dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default NewPassword;