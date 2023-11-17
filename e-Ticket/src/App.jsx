import { useState } from "react";
import {
  Form,
  Header,
  PopUp,
  TicketsAvailableSection,
  Footer,
} from "./components/index";

export default function App() {
  const [pista, setPista] = useState("100");
  const [cadeiraSuperior, setCadeiraSuperior] = useState("200");
  const [cadeirInferior, setCadeirInferior] = useState("400");
  const [popUp, setPopUp] = useState(false);

  return (
    <>
      <Header />

      <main className="main-content">
        <section className="main-content__eTicket-section container">
          <div className="eTicket-section__purchase-section">
            <h2 className="purchase-section__purchase-title">
              Compre seu <span className="purchase-title--color">ingresso</span>
            </h2>
            <Form
              setPista={setPista}
              setCadeiraSuperior={setCadeiraSuperior}
              setCadeirInferior={setCadeirInferior}
              setPopUp={setPopUp}
              quantidadePista={parseInt(pista)}
              quantidadeCadeiraSuperior={parseInt(cadeiraSuperior)}
              quantidadeCadeiraInferior={parseInt(cadeirInferior)}
            />
            <img
             
              src="public/SVG/Hachuras.svg"
              alt="imagem da tira"
              className="purchase-section__hachuras"
            />
          </div>

          <TicketsAvailableSection
            quantidadePista={parseInt(pista)}
            quantidadeCadeiraSuperior={parseInt(cadeiraSuperior)}
            quantidadeCadeiraInferior={parseInt(cadeirInferior)}
          />
        </section>
      </main>

      <Footer />

      {popUp === false ? null : <PopUp setPopUp={setPopUp} />}
    </>
  );
}
