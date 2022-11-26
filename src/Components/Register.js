import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase.init';
const Register = () => {
    const auth = getAuth(app)
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('error', error)
            })

    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login!!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Your Email</label>
                    <input type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Your Password</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Your password" required />
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>

            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
            <p><small>Forget Password? <button type="button" className="btn btn-link">Reset Password</button></small></p>
        </div>
    );
};

export default Register;