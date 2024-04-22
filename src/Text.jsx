import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
  const [Text, setText] = useState("");

  useEffect(
    () => {
      //when component mounts
      console.log("mounted");
      //when component unmounts
      return () => {
        console.log("unmounted");
      };
    }, // when component mounts
    []
  );
  return (
    <div>
      <input onChange={(event) => setText(event.target.value)}></input>
      <h1>{Text}</h1>
    </div>
  );
};
