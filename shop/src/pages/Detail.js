import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props) {
  useEffect(() => {});

  let { id } = useParams();
  let searchItem = props.shoes.find(function (x) {
    return x.id == id;
  });

  return (
    <div className="container">
      <div className="alert alert-warning">2초이내 구매시 할인</div>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{searchItem.title}</h4>
          <p>{searchItem.content}</p>
          <p>{searchItem.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
