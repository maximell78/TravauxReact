import React from "react";


class PrevisionItem extends React.Component {    

    render() {
        const {previsionInfo} = this.props;
        return (
            <div>                
                <p >{previsionInfo.description}</p>
                
            </div>
        );
    }
}

export default PrevisionItem;