import React, { useState } from 'react';
import LoginPage from './LoginPage';
import Signup from './Signup';
import OTPVerification from './OTPVerification';

const AuthFlow = () => {
    // Steps: 'login', 'signup', 'otp'
    const [step, setStep] = useState('login');
    const [userIdentifier, setUserIdentifier] = useState('');

    const handleLoginContinue = (identifier) => {
        setUserIdentifier(identifier);
        setStep('otp');
    };

    const handleSignupSuccess = () => {
        setStep('otp');
    };

    return (
        <>
            {step === 'login' && (
                <LoginPage 
                    onContinue={handleLoginContinue} 
                    onSwitchToSignup={() => setStep('signup')} 
                />
            )}
            
            {step === 'signup' && (
                <Signup 
                    onSuccess={handleSignupSuccess} 
                    onSwitchToLogin={() => setStep('login')} 
                />
            )}

            {step === 'otp' && (
                <OTPVerification 
                    identifier={userIdentifier} 
                    onBack={() => setStep('login')} 
                />
            )}
        </>
    );
};

export default AuthFlow;