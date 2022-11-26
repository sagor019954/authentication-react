import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase.init';
const auth = getAuth(app)
const Emailform = () => {
    const [worngpassword, setWorngpassword] = useState('');
    const [sucess, setSucess] = useState(false)
    const handlesubmit = event => {
        event.preventDefault()
        setSucess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
        //     setWorngpassword('password must be two uppercase latter');
        //     return;
        // }
        if (password.length < 6) {
            setWorngpassword('password must more than 6 digit ');
            return;
        }
        setWorngpassword('')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setSucess(true);
                form.reset();
            })
            .catch(error => {
                const errorMessage = error.message;
                setWorngpassword(errorMessage)
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handlesubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" name='password' controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <p>{worngpassword}</p>
                {sucess && <p>sucessfully  added</p>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>have you registrared<Link to='/register'>Register</Link></p>
            </Form>
        </div>
    );
};

export default Emailform;