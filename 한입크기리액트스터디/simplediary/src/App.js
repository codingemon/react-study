import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "피카츄",
    content: "하이 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "나",
    content: "하이 2",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "너",
    content: "하이 3",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList dummyList={dummyList} />
    </div>
  );
}

export default App;
