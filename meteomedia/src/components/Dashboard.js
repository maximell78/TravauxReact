import  { React, Component } from "react";
import { logout, isLogin } from "../utils";
import { Link } from 'react-router-dom';
import VilleList from "./VilleList";
import cities from "../services/VilleData";

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: true
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="container-fluid text-center pb-5">
                            <div className="row">
                                <div className="col-12">
                                    <h1>Météo</h1>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid pb-5">
                            <div className="row">
                                <div className="offset-2 col-3">
                                    <p>Ajouter une ville :</p>                                
                                </div>
                                <div className="col-4">
                                    <input></input>
                                </div>
                                <div className="col-2">
                                    <button className="btn-primary rounded text-center">Ajouter</button>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-12">
                                                <h2>Locations</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-12">
                                                <VilleList villeItems={cities} />                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid text-center pt-5 pb-5">
                            <div className="row">
                                <div className="col-12">
                                    { 
                                        <Link><button className="btn-primary rounded text-center" onClick={() => this.handleLogout()}>Déconnection</button></Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Dashboard;