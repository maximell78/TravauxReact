import React, { Component } from 'react';
import { logout, isLogin } from '../utils';
import { Link } from 'react-router-dom';

class Accueil extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-12">
                        <h1 className="pb-5 mb-5">Accueil</h1>
                        {this.state.isLogin ? 
                            <button onClick={() => this.handleLogout()}>Déconnection</button>:
                            <Link to="/signin"><button className="btn-primary rounded text-center">Connection</button></Link>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Accueil;