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
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [num, setNum] = useState("");

  let { id } = useParams();
  let seachItem = props.shoes.find((x) => {
    return x.id == id;
  });

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("숫자를 입력하세요");
    }
  }, [num]);

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

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
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
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
