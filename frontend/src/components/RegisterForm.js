import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8000/api/register', data);
            console.log('User registered successfully:', response.data);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Name"
        />
        {errors.name && <span>{errors.name.message}</span>}
    
        <input
            {...register('email', { required: 'Email is required' })}
            placeholder="Email"
        />
        {errors.email && <span>{errors.email.message}</span>}
    
        <input
            {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters' },
                pattern: { value: /[a-z]/, message: 'Password must contain at least one lowercase letter' },
            })}
            placeholder="Password"
            type="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
    
        <input
            {...register('password_confirmation', {
                required: 'Password confirmation is required',
                validate: (value) => value === watch('password') || 'Passwords must match',
            })}
            placeholder="Confirm Password"
            type="password"
        />
        {errors.password_confirmation && <span>{errors.password_confirmation.message}</span>}
    
        <button type="submit">Register</button>
    </form>
    
    );
};

export default RegisterForm;
