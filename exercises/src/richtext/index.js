import React, { createRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import "./index.css";
import ShowArea from "./showArea";

const Index = () => {
  let info = "";
  const ref = createRef();

  const handlerClick = () => {
    if (!info) {
      return;
    }
    ref.current.innerHTML += ReactDOMServer.renderToStaticMarkup(
      <ShowArea info={info} />
    );
  };

  const submit = () => {
    const result = encodeURIComponent(ref.current.innerHTML);

    console.log(result);
  };

  const handlerChange = (e) => {
    e.preventDefault();
    info = e.target.value;
  };

  return (
    <>
      <button onClick={handlerClick} className="btn">
        添加信息
      </button>
      <input onChange={handlerChange} />
      <button onClick={submit} className="btn">
        上传
      </button>
      <div ref={ref} contentEditable id="rich-editor" className="content"></div>
    </>
  );
};

export default Index;
