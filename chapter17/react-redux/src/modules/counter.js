// 1. 액션 타입 정의하기
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2. 액션 생성 함수 만들기
// export를 사용해서 추후에 이 함수를 다른 파일에서 불러와 사용가능하다.
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 3. 초기 상태 및 리듀서 함수 만들기

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

// export default를 사용하여 함수를 내보내 줬다.
// export는 여러 개를 내보낼 수 있지만, export default는 단 한개만 내보낸다.
export default counter;
