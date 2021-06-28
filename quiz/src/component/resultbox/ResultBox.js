// ResultBox.js
// Programmé par : Maxime Lacroix-Lemire
// Dernière Mise À  Jour :  2021/06/16

import React from "react";

class ResultBox extends React.Component {    
    render() {
      const { questionInfo } = this.props;
      return (
        <div className="container-fluid card">
          <div className="row">
            <div className="col-12">
              <p>
                  {}
              </p>
            </div>
            <div className="itemDescription">
              <h3>{questionInfo.resultat}</h3>
            </div>
          </div>
          
        </div>
      );
    }
  }

  export default ResultBox