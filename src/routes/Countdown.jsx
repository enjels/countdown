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

  const eventTitle = event.title
  const eventColor = event.color
  const eventDate = event.date


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
