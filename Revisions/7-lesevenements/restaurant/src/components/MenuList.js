import React from "react";
import MenuItem from "./MenuItem";

function MenuList(props) {
  return (
    <div>
      {props.menuItems.map((menuItem) => (
        <div>
          <MenuItem itemInfo={menuItem} key={menuItem.id} />
        </div>
      ))}
    </div>
  );
}

export default MenuList;
