import { useParams } from "react-router-dom";

const DetailList = (props) => {
  let { id } = useParams();
  let seachItem = props.shoes.find((x) => {
    return x.id == id;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{seachItem.title}</h4>
          <p>{seachItem.content}</p>
          <p>{seachItem.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default DetailList;
