import React, { useState } from "react";
import css from "./Time.module.css";
import Clock from "./clock/Clock";
import Hello from "./Hello";

const Time = () => {
  const [clock, setClock] = useState(false);
  const [color, setColor] = useState(null);

  const ButtonConstructor = ({ name, colorBgc, colorText }) => (
    <button
      style={{
        backgroundColor: colorBgc,
        marginRight: "22px",
        color: colorText,
      }}
      onClick={() => {
        setColor(colorBgc);
        setClock(true);
      }}
    >
      {name}
    </button>
  );

  return (
    <div className={css.time}>
      <ButtonConstructor name="HOME" colorBgc="" colorText="black" />
      <ButtonConstructor name="RED" colorBgc="red" colorText="black" />
      <ButtonConstructor name="ORANGE" colorBgc="orange" colorText="black" />
      <ButtonConstructor name="YELLOW" colorBgc="yellow" colorText="black" />
      <ButtonConstructor name="GREEN" colorBgc="green" colorText="white" />
      <ButtonConstructor
        name="LIGHT BLUE"
        colorBgc="dodgerblue"
        colorText="white"
      />
      <ButtonConstructor name="BLUE" colorBgc="blue" colorText="white" />
      <ButtonConstructor name="PURPLE" colorBgc="purple" colorText="white" />
      <ButtonConstructor name="BLACK" colorBgc="black" colorText="white" />
      <ButtonConstructor name="WHITE" colorBgc="white" colorText="black" />
      <ButtonConstructor name="GREY" colorBgc="grey" colorText="white" />
      {clock ? <Clock bgc={color} /> : <Hello />}
    </div>
  );
};

export default Time;
