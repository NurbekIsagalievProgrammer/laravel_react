import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', data);
            
            localStorage.setItem('token', response.data.token);
            console.log('User logged in successfully:', response.data);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('email', { required: 'Email is required' })}
                placeholder="Email"
            />
            {errors.email && <span>{errors.email.message}</span>}

            <input
                {...register('password', {
                    required: 'Password is required',
                })}
                placeholder="Password"
                type="password"
            />
            {errors.password && <span>{errors.password.message}</span>}

            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
