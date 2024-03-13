import { useContext, useState } from "react";

import { CountdownContext } from "../context/CountdownContext";

import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [image, setimage] = useState();
  const [color, setColor] = useState();

  const { setEvent } = useContext(CountdownContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject = {
      title: title,
      date: date,
      image: image,
      color: color,
    };
    setEvent(eventObject);

    navigate("/countdown");
  };

  return (
    <div className="home">
      <h2>Monte a sua contagem regressiva!</h2>
      <form className="countdown-form" onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título do evento"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Data do evento:</span>
          <input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          <span>image:</span>
          <input
            type="text"
            name="iamgem"
            placeholder="Insira a URL"
            onChange={(e) => setimage(e.target.value)}
          />
        </label>
        <label>
          <span>Cor do tema:</span>
          <input
            type="color"
            name="color"
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;
