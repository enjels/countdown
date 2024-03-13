import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Title from "../components/Title";
import Counter from "../components/Counter";
import useCountdown from "../hooks/useCountdown";
import { CountdownContext } from "../context/CountdownContext";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  // Redireciona para a página inicial se não houver evento definido
  if (!event) return <Navigate to="/" />;

  const { title: eventTitle, color: eventColor, date: eventDate } = event;

  // Obtém os valores do countdown usando o hook useCountdown
  const [day, hour, minute, second] = useCountdown(eventDate);

  return (
    <>
      <Title title={eventTitle} />
      <div
        className="countdown-container"
        style={{ backgroundColor: eventColor }}
      >
        <Counter title="Dias" number={day} />
        <Counter title="Horas" number={hour} />
        <Counter title="Minutos" number={minute} />
        <Counter title="Segundos" number={second} />
      </div>
    </>
  );
};

export default Countdown;
