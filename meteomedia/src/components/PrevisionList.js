import React from "react";
import PrevisionItem from "./PrevisionItem";

function PrevisionList(props) {
    return (
        <div>
            {props.previsionItems.map((previsionItem) => (
              <div>
                <PrevisionItem previsionInfo={previsionItem} key={previsionItem.id} />
              </div>
            ))}
        </div>
    );
  }
  
  export default PrevisionList;