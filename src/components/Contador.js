import { useState } from "react";

export default function Contador(props) {
  let {initialValue}  = props;
  let [counter, setCounter] = useState(parseInt(initialValue));

  return (
    <div>
      {/* <h1>Contador de React usando Hooks</h1> */}
      <p>Contador = {counter}</p>
      {/* <button type="submit" onClick={ ()=> setCounter(counter++)}>sumar 1</button>
      <button type="submit" onClick={ ()=> setCounter(++counter)}>sumar 1</button> */}
      <button type="submit" onClick={ ()=> setCounter(counter+1)}>sumar 1</button>
    </div>
  );
}
