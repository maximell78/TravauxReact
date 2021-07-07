import React, { Component } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
const cookie = new Cookies();

export default class Account extends Component {

    handleSubmit(){
        const configuration = {
            method: "post",
            url: "url du web service Login de notre API",
            data: {
              email,
              password,
            },
          };

          axios(configuration)
          .then((response) => {
              
          })
          .catch();
          
        cookies.set("TOKEN", result.data.token, {
            path:"/",
        });        
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Auth Component</h1>
                <input type="text" name="email">Login</input>
                <input type="password" name="password"></input>
                <Button type="submit" onclick={ this.handleSubmit() }>
                    Login
                </Button>
            </div>
        )
    }
}