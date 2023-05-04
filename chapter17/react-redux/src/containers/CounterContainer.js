import React, { useCallback } from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

// useSelector로 상태 조회하기
// connect 함수 대신 useSelector를 사용하여 counter.number 값을 조회함으로써
// Counter에게 props를 넘겨주기

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// // mapStateToProps는 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정한 함수
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// // mapDispatchToProps는 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 설정한 함수
// const mapDispatchToProps = (dispatch) => ({
//   // 임시 함수
//   increase: () => {
//     dispatch(increase()); // 액션객체를 가져와서 디스패치해 주었다.
//   },
//   decrease: () => {
//     dispatch(decrease()); // 액션객체를 가져와서 디스패치해 주었다.
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default CounterContainer;

//취향에 따라 밑처럼 작성해줘도 괜찮다고 하는데 나는 작동되지 않았다.

// export default connect(
//     state => ({
//       number: state.counter.number,
//     }),
//     {
//       increase,
//       decrease,
//     },
//   )(CounterCotainer);
