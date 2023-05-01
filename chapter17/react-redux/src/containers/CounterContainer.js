import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// mapStateToProps는 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정한 함수
const mapStateToProps = (state) => ({
  number: state.counter.number,
});
// mapDispatchToProps는 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 설정한 함수
const mapDispatchToProps = (dispatch) => ({
  // 임시 함수
  increase: () => {
    console.log('increase');
  },
  decrease: () => {
    console.log('decrease');
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
