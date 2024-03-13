import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Title from "../components/Title";
import Counter from "../components/Counter";

import useCountdown from "../hooks/useCountdown";
import { CountdownContext } from "../context/CountdownContext";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  // Redireciona para a página inicial se não houver evento definido
  if (!event) return <Navigate to="/" />;

  const eventTitle = event.title;
  const eventColor = event.color;
  const eventDate = event.date;

  // Obtém os valores do countdown usando o hook useCountdown
  const [day, hour, minute, second] = useCountdown(eventDate);
  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} />
        <Counter title="Segundos" number={second} eventColor={eventColor} />
      </div>
    </>
  );
};

export default Countdown;
