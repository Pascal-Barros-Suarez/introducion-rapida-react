import { useState, useEffect } from "react";

export default function Wellcome(props) {
  const { name } = props; //se usa para decirle que name esta dentro de props (esta menera es la standarizada "buena")
  const [semaforo, setSemaforo] = useState(false);

  useEffect(() => {
    console.log(semaforo);
  }, [semaforo]);

  const cambia = () => {
    setSemaforo(!semaforo);
  };

  return (
    <div>
      <h1>{props.message},</h1>
      <h2>{name}</h2>
      <p> El semaforo esta en {semaforo ? "red" : "green"}</p>
      <button type="submit" onClick={cambia}>
        cambia semaforo
      </button>
    </div>
  );
}
