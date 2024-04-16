import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

import { Context1 } from "./../App.js";
import { useContext } from "react";

// let Btn = styled.button`
//   background: ${(props) => props.bg};
//   color: ${(props) => (props.bg == "blue" ? "white" : "black")};
//   padding: 10px;
// `;

// let BlackBox = styled.div`
//   background: grey;
//   padding: 20px;
// `;

const DetailList = (props) => {
  let { stock, shoes } = useContext(Context1);

  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [num, setNum] = useState("");
  let [tab, setTab] = useState(0);

  let { id } = useParams();
  let seachItem = props.shoes.find((x) => {
    return x.id == id;
  });

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, []);

  // useEffect(() => {
  //   if (isNaN(num) == true) {
  //     alert("숫자를 입력하세요");
  //   }
  // }, [num]);

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      {/* <Btn bg="blue">버튼</Btn> */}
      {/* <Btn bg="yellow">버튼</Btn> */}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          {/* <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          /> */}
          <h4 className="pt-5">{seachItem.title}</h4>
          <p>{seachItem.content}</p>
          <p>{seachItem.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
};

function TabContent({ tab }) {
  // if (tab == 0) {
  //   <div>내용0</div>;
  // }
  // if (tab == 1) {
  //   <div>내용1</div>;
  // }
  // if (tab == 2) {
  //   <div>내용2</div>;
  // }

  let [fade, setFade] = useState("");
  let { stock } = useContext(Context1);

  useEffect(() => {
    let time = setTimeout(() => {
      setFade("end");
    }, 10);

    return () => {
      clearTimeout(time);
      setFade("");
    };
  }, [tab]);

  return (
    <div className={"start " + fade}>
      {[<div>{stock}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default DetailList;
