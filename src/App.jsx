import "./App.css";
import Title from "./components/Title";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Title title="Contagem regreciva para 2023" />
        <div className="countdown-container">
          <Counter title="Dias" number={4} />
          <Counter title="Horas" number={4} />
          <Counter title="Minutos" number={4} />
          <Counter title="Segundos" number={4} />
        </div>
      </div>
    </div>
  );
}

export default App;
