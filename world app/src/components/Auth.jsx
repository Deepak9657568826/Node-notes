import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Auth = ({ isRegister }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = formData;

        try {
            let response;
            if (isRegister) {
                response = await axios.post('/api/auth/register', { name, email, password });
            } else {
                response = await axios.post('/api/auth/login', { email, password });
            }
            console.log(response.data); 
            history.push('/'); 
        } catch (error) {
            console.error('Authentication error:', error.response.data.message);
           
        }
    };

    return (
        <div>
            <h2>{isRegister ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                {isRegister && (
                    <div>
                        <label>
                            Name:
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        </label>
                    </div>
                )}
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </label>
                </div>
                <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
            </form>
        </div>
    );
};

export default Auth;