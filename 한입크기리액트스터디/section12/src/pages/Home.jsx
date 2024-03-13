import Header from "../components/Header";
import Button from "../components/Button";
import DirayList from "../components/DiaryList";

const Home = () => {
  return (
    <div>
      <Header
        title={"2024년 3월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DirayList />
    </div>
  );
};

export default Home;
