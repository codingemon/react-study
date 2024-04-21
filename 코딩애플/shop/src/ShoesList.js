import { useState } from "react";
import data from "./data";
// 직접 만든 컴포넌트
const ShoesList = () => {
  const [shoes, setShoes] = useState(data);
  return shoes.map(function (a, i) {
    return (
      <div className="col-md-4">
        <img
          src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"}
          width="80%"
        />
        <h4>{shoes[i].title}</h4>
        <p>{shoes[i].content}</p>
      </div>
    );
  });
};

export default ShoesList;
