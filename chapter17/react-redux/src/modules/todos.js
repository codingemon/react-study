// todos 모듈 만들기

import { createAction, handleAction } from 'redux-actions';

// 액션 타입 정의하기
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

// 17.6.1.2 todos 모듈에 적용하기
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; //insert 호출될 때마다 1씩 더해집니다.
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// // 액션 생성 함수 만들기
// // 액션 생성 함수에서 파라미터가 필요하다.
// // 전달 받은 파라미터는 액션 객체 안에 추가 필드로 들어간다.
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

// let id = 3; // insert가 호출될 때마다 1씩 더해집니다.
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 초기 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

const todos = handleAction(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState,
);

// immer를 사용한다고해서 모든 업데이트 함수에 immer를 적용할 필요는 없다.
// 위에 코드도 괜찬하서 아래 코드를 사용하지 않아도 된다.

// const todos = handleAction(
//   {
//     [CHANGE_INPUT]: (state, { payload: input }) =>
//       produce(state, (draft) => {
//         draft.input = input;
//       }),
//     [INSERT]: (state, { payload: todo }) =>
//       produce(state, (draft) => {
//         draft.todos.push(todo);
//       }),
//     [TOGGLE]: (state, { payload: id }) =>
//       produce(state, (draft) => {
//         const todo = draft.todos.find((todo) => todo.id === id);
//         todo.done = !todo.done;
//       }),
//     [REMOVE]: (state, { payload: id }) =>
//       produce(state, (draft) => {
//         const index = draft.todos.findIndex((todo) => todo.id === id);
//         draft.todos.splice(index, 1);
//       }),
//   },
//   initialState,
// );

export default todos;
