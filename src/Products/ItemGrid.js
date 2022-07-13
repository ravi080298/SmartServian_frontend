import React from "react";
import "./itemGrid.css";

function ItemGrid(props) {
  const { data } = props;
  return (
    <React.Fragment>
      <div className="display-flex">
        <div className="item">
          <div>Title</div>
          <div>{data.title}</div>
        </div>
        <div className="item">
          <div>Price</div>
          <div>Rs.{data.price}</div>
        </div>
        <div className="item">
          <div>Popularity</div>
          <div>{data.popularity}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ItemGrid;
