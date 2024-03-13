import { useContext, useState } from "react";

import { CountdownContext } from "../context/CountdownContext";

import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState();
  const [data, setData] = useState();
  const [imagem, setImagem] = useState();
  const [color, setColor] = useState();

  const { setEvent } = useContext(CountdownContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject = {
      title: title,
      data: data,
      imagem: imagem,
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
            onChange={(e) => setData(e.target.value)}
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="iamgem"
            placeholder="Insira a URL"
            onChange={(e) => setImagem(e.target.value)}
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
