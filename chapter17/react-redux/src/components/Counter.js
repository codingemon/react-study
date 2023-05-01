import React from 'react';

// 숫자를 더고 뺄  수 있는 카운터 컴포넌트
const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        {/* +1 누르면 카운터 추가, -1 누르면 카운터 하락 */}
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
