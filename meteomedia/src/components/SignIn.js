import React from 'react';
import { login } from '../utils';

const SignIn = (props) => {

    const handleLogin = () => {
        login();
        props.history.push('/dashboard');
    }

    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-12">
                    <h1 className="bp-5 mb-5">Accès au compte</h1>
                    <button onClick={() => handleLogin()} className="btn-primary rounded text-center">Se connecter</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;