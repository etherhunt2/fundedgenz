import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { v4 as uuidv4 } from 'uuid';
import '../styles/signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        userId: uuidv4().slice(0, 8),
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        agreeTerms: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'phone is required';
        } else if (formData.phone.length < 6) {
            newErrors.phone = 'phone must be at least 6 characters';
        }

        if (!formData.address) {
            newErrors.address = 'Address is required';
        }

        if (!formData.agreeTerms) {
            newErrors.agreeTerms = 'You must agree to the terms and conditions';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, submit the data
            console.log('Form submitted:', formData);
            // Here you would typically make an API call to register the user
            alert('Registration successful! Redirecting to payment page...');
            //send email
            const templateParams = {
                from_name: `${formData.firstName} ${formData.lastName}`,
                to_name: 'FundedGenZ',
                userId: formData.userId,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                message: `New registration from website 
                \n Name: ${formData.firstName} ${formData.lastName}
                \n User ID: ${formData.userId}
                \n Email ID: ${formData.email}
                \n Phone Number: ${formData.phone}
                \n Address: ${formData.address}`
            };

            await emailjs.send(
                'service_yfgyr2k', // EmailJS service ID
                'template_9t7236p', // EmailJS template ID
                templateParams,
                'p35PA7d4nBken3HkH' // EmailJS public key
            )
                .then((response) => {
                    console.log('Email sent successfully:', response);
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });
            // Redirect to payment page
            window.location.href = `/payment?userId=${formData.userId}&email=${formData.email}`;
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-wrapper">
                <div className="signup-header">
                    <h2>Create Account</h2>
                    <p>Join FundedGenZ and start your trading journey</p>
                </div>

                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={errors.firstName ? 'error' : ''}
                            />
                            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={errors.lastName ? 'error' : ''}
                            />
                            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Phone Number</label>
                        <input
                            type="phone"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? 'error' : ''}
                        />
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className={errors.address ? 'error' : ''}
                        />
                        {errors.address && <span className="error-message">{errors.address}</span>}
                    </div>

                    <div className="form-group checkbox-group">
                        <input
                            type="checkbox"
                            id="agreeTerms"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                        />
                        <label htmlFor="agreeTerms">I agree to the <a href="/terms">Terms and Conditions</a></label>
                        {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
                    </div>

                    <button type="submit" className="signup-btn">Create Account</button>
                </form>

                {/* <div className="login-link">
                    Already have an account? <a href="/login">Login</a>
                </div> */}
            </div>
        </div>
    );
};

export default Signup; 