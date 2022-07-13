import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemGrid from "./ItemGrid";
import "./item.css";

function Item() {
  const [productsData, setProductsData] = useState();
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://s3.amazonaws.com/open-to-cors/assignment.json")
        .then((res) => setProductsData(res.data));
    }
    fetchData();
  }, []);
  let array;
  if (productsData?.products) array = Object.values(productsData?.products);
  if (array) {
    array.sort(function (a, b) {
      if (Number(a.popularity) > Number(b.popularity)) {
        return -1;
      }
      if (Number(a.popularity) < Number(b.popularity)) {
        return 1;
      }
      return 0;
    });
  }
  return (
    <div className="main-container">
      {productsData?.products &&
        array.map((item, index) => {
          return (
            <div className="listItem" key={`products_${index}`}>
              <ItemGrid data={item} />
            </div>
          );
        })}
    </div>
  );
}

export default Item;
