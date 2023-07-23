import React, { memo, useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "./../store.js";

// let Child = memo(function () {
//   console.log("재렌더링");
//   return <div>자식임</div>;
// });
// function 함수(){
//   return 반복문 10억번 돌린결과
// }

function Cart() {
  // let result = useMemo(() => {return 함수()}, [state])

  let state = useSelector((state) => state);
  let dispatch = useDispatch(); // store,js로 요청을 보내주는 함수
  let [count, setCount] = useState(0);

  return (
    <div>
      <h6>
        {/* <Child count={count}></Child>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button> */}
        {state.user.name} {state.user.age} 의 장바구니
      </h6>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
