import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../store";

const Cart = () => {
  // redux store에 있던 state 남음
  let state = useSelector((state) => {
    return state;
  });

  //   store.js에게 요청 보내는 함수
  let dispatch = useDispatch();

  console.log(state);

  return (
    <div>
      {state.user}의 장바구니
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
          {state.cart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>안녕</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeName());
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
