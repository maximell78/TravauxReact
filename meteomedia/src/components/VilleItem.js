import React from "react";
import PrevisionList from "./PrevisionList";
import prevision from "../services/MeteoData";


class VilleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            villeFavori: this.props.villeInfo.villeFavori,
        };
        this.handleClickFavorite = this.handleClickFavorite.bind(this);
    }

    handleClickFavorite() {
        const { villeFavori } = this.state;
        this.setState({
            villeFavori: !villeFavori,
        });
    }


    render() {
        const {villeInfo} = this.props;        
        const {villeFavori} = this.state;
        return (
            <div className="container-fluid card ml-5 pt-3 pb-3 mb-3">
                <div className="row">
                    <div className="col-12">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-4">
                                    <h4>{villeInfo.name} </h4> <PrevisionList previsionItems={prevision} id={prevision}/>
                                </div>
                                
                                <div className="col-4">
                                    <button onClick={this.handleClickFavorite} className= {villeFavori ? "villeFavori" : "pasFavori"}>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default VilleItem;