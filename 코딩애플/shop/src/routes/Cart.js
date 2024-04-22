import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Cart = () => {
  // redux store에 있던 state 남음
  let state = useSelector((state) => {
    return state;
  });

  console.log(state);

  return (
    <div>
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
          <tr>
            <td>{state.stock2[0].id}</td>
            <td>{state.stock2[0].name}</td>
            <td>{state.stock2[0].count}</td>
            <td>안녕</td>
          </tr>
          <tr>
            <td>{state.stock2[1].id}</td>
            <td>{state.stock2[1].name}</td>
            <td>{state.stock2[1].count}</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
