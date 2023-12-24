import React, { useState, FormEvent } from 'react';
import '../Styles/LoginForm.scss';
import LogoSVG from '../Utils/LogoSVG';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const navigate = useNavigate();

    const validateEmail = (email: string): boolean => {
        if (!email) {
            setEmailError('Email is required');
            return false;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setEmailError('Please enter a valid email address.');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validatePassword = (password: string): boolean => {
        if (!password) {
            setPasswordError('Password is required');
            return false;
        }
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long.');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate('/dashboard');
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        if (isEmailValid && isPasswordValid) {
            console.log('Form is valid. Submitting...');
        }
        navigate('/dashboard')
    };

    return (
        <div className="login-container">
            <div className="first-content">
                <header className="login-header">
                    <LogoSVG />
                </header>
                <div className="pablo-image-container">
                    <img src="/images/pablo-sign-in 1.png" alt="pablo-sign-in" height="337.5" />
                </div>
            </div>
            <div className="second-content">
                <div className="login-section">
                    <div className="welcome-text">Welcome!</div>
                    <p >Enter details to login.</p>
                    <form className="login-form" onSubmit={handleSubmit}>
                        {emailError && <div className="error-message">{emailError}</div>}
                        <div className="input-wrapper">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="input-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {passwordError && <div className="error-message">{passwordError}</div>}
                        </div>
                        <div className="input-wrapper">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="input-field"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </div>
                        <div className="forgot-password">
                            <a href="/">FORGOT PASSWORD?</a>
                        </div>
                        <button type="submit" className="login-button">LOG IN</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
