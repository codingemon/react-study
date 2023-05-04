// counter 모듈에 적용하기
import { createAction, handleActions } from 'redux-actions';
// 1. 액션 타입 정의하기
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//새로 작성
// createAction을 사용하면 매번 객체를 직접 만들어 줄 필요 없이
// 간단하게 액션 생성 함수를 선언
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 2. 액션 생성 함수 만들기
// export를 사용해서 추후에 이 함수를 다른 파일에서 불러와 사용가능하다.
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// 3. 초기 상태 및 리듀서 함수 만들기

const initialState = {
  number: 0,
};

// 이번에는 리듀서 함수도 더 간단하게 가독성을 높게 작성.
// handleActions라는 함수를 사용

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// export default를 사용하여 함수를 내보내 줬다.
// export는 여러 개를 내보낼 수 있지만, export default는 단 한개만 내보낸다.
export default counter;
