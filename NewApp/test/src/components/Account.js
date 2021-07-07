import React, { Component } from "react";
import Cookies from "universal-cookie";
const cookie

export default class Account extends Component {

    handleSubmit(){
        cookies.set("TOKEN", result.data.token, {
            path:"/",
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Auth Component</h1>
                <input type="text">Login</input>
                <input type="password"></input>
            </div>
        )
    }
}