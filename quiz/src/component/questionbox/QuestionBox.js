// QuestionBox.js
// Programmé par : Maxime Lacroix-Lemire
// Dernière Mise À  Jour :  2021/06/16
import React from "react";

class QuestionBox extends React.Component {    
    render() {
      const { questionInfo } = this.props;
      return (
        <div className="container-fluid card">
          <div className="row">
            <div className="col-12">
              <p>
              {questionInfo.question}
              </p>
            </div>            
          </div>          
        </div>
      );
    }
  }

export default QuestionBox;