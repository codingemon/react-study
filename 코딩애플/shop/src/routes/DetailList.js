import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// let Btn = styled.button`
//   background: ${(props) => props.bg};
//   color: ${(props) => (props.bg == "blue" ? "white" : "black")};
//   padding: 10px;
// `;

// let BlackBox = styled.div`
//   background: grey;
//   padding: 20px;
// `;

const DetailList = (props) => {
  useEffect(() => {
    console.log("안녕");
  });

  let [count, setCount] = useState(0);

  let { id } = useParams();
  let seachItem = props.shoes.find((x) => {
    return x.id == id;
  });

  return (
    <div className="container">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      {/* <Btn bg="blue">버튼</Btn> */}
      {/* <Btn bg="yellow">버튼</Btn> */}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{seachItem.title}</h4>
          <p>{seachItem.content}</p>
          <p>{seachItem.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default DetailList;
