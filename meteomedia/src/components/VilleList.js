import React from "react";
import VilleItem from "./VilleItem";

function VilleList(props) {
  return (
      <div>
          {props.villeItems.map((villeItem) => (
            <div>
              <VilleItem villeInfo={villeItem} key={villeItem.id} />
            </div>
          ))}
      </div>
  );
}

export default VilleList;