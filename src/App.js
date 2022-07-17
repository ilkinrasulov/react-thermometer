import "./styles.css";
import { Component, useState } from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
function App() {
  const [one, setOne] = useState(0);
  const [onet, settOne] = useState("cold");

  const increasetem = () => {
    setOne(one + 1);

    var opacity = parseFloat(
      document.getElementsByClassName("temPer")[0].style.opacity
    );

    if (one > 0) {
      document.getElementsByClassName("temPer")[0].style.opacity = one * 0.03;
      document.getElementsByClassName("temPer")[0].style.backgroundColor =
        "red";
      document.getElementsByClassName("temPer")[0].style.color = "white";
      console.log(opacity);
    }
    if (one < 0) {
      document.getElementsByClassName("temPer")[0].style.opacity =
        Math.abs(one) * 0.03;
      document.getElementsByClassName("temPer")[0].style.backgroundColor =
        "blue";
      console.log(opacity);
    }
  };

  const dTem = () => {
    setOne(one - 1);

    var opacity = parseFloat(
      document.getElementsByClassName("temPer")[0].style.opacity
    );

    if (one > 0) {
      document.getElementsByClassName("temPer")[0].style.opacity =
        one * 0.04 - 0.04;
      console.log(opacity);
      document.getElementsByClassName("temPer")[0].style.backgroundColor =
        "red";
      document.getElementsByClassName("temPer")[0].style.color = "white";
    }
    if (one < 0) {
      console.log(opacity);
      document.getElementsByClassName("temPer")[0].style.opacity =
        Math.abs(one) * 0.04;
      document.getElementsByClassName("temPer")[0].style.backgroundColor =
        "blue";
      document.getElementsByClassName("temPer")[0].style.color = "white";
    }
  };
  return (
    <Box className="box">
      <div className="boxNumber">
        <span className="temPer">{one}</span>
      </div>

      <div className="addSubtract">
        <button onClick={() => increasetem()}>+</button>
        <button onClick={() => dTem()}>-</button>
      </div>
    </Box>
  );
}
const Box = styled.div`
  width: 200px;
  height: 300px;
  background: linear-gradient(lightblue, lightgreen, lightyellow);
  border: 1px solid gainsboro;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  align-items: center;

  .boxNumber {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin: 50px auto;

    .temPer {
      border: 1px solid black;
      padding: 20px;
      border-radius: 50%;
      background-color: white;
    }
  }
  .addSubtract {
    display: flex;

    button {
      justify-content: space-around;
      margin: 10px 20px;
      padding: 5px 20px;
      background-color: rgb(20, 200, 60);
      border: 0;
      color: white;
      font-weight: 590;
      font-size: 15px;
    }
  }
`;
export default App;
