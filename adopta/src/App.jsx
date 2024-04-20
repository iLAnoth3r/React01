import "./App.css";
import Header from "./components/Header.jsx";
import Tarjeta from "./components/MyCard.jsx";
import Pie from "./components/Footer.jsx";
import Colores from "./components/Tags.jsx";

function App() {
  return (
    <div>
      <Header title="Adopta un Perrito" />
      <Colores />
      <div className="perros">
        <Tarjeta
          imagen="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg"
          nombre="George"
          descripcion="Hermoso perro de casa, muy bien portado y servicial."
          color="success"
          raza="Raza: Muy Buena"
        />

        <Tarjeta
          imagen="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"
          nombre="Scarlett"
          descripcion="Perra hogareña, simpática, de buena educación y linaje. Vacunas al día."
          color="primary"
          raza="Raza: Fina"
        />
        <Tarjeta
          imagen="https://cdn.pixabay.com/photo/2023/10/16/10/51/fox-8318961_1280.png"
          nombre="El Trompeta"
          descripcion="No está claro su origen, se comenta que es un ex convicto acusado de robo a pata armada y consumo de estupefacientes. Se desconoce el paradero del fotógrafo después de tomar esta imagen."
          color="danger"
          raza="Raza: Prefiero no involucrarme en este asunto"
        />
        <Tarjeta
          imagen="https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg"
          nombre="Juan"
          descripcion="Lindo y rechoncho."
          color="warning"
          raza="Raza: Corgi, lindo y rechoncho"
        />
      </div>
      <div>
        <Pie className="piePagina" futer="Perros hermosos para adopción." />
      </div>
    </div>
  );
}

export default App;
