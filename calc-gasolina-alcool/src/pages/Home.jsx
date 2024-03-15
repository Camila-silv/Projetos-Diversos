import { useState } from "react";
import { Link } from "react-router-dom";
import { GrupoInput } from "../components/Index.jsx";

export default function Home() {
  const [valorGasolina, setValorGasolina] = useState("");
  const [valorAlcool, setValorAlcool] = useState("");

  const calcular = (e) => {
    e.preventDefault();

    if (valorGasolina === "" || valorAlcool === "") {
      alert("Valor inválido.");
      return;
    }

    const resultado = parseFloat((valorAlcool / valorGasolina).toFixed(1));

    if (resultado < 0.7) {
      alert("Bora de álcool.");
      return;
    } else {
      alert("Hoje vamos de gasolina.");
      return;
    }
  };

  return (
    <main className="style-default">
      <section className="conteudo-principal">
        <img
          src="./public/logo.png"
          alt="o logo, uma bomba de combustivel"
          className="conteudo-principal__logo"
        />

        <h2 className="conteudo-principal__titulo">Qual melhor opção?</h2>

        <form className="form-conteudo-principal">
          <GrupoInput
            valor={valorAlcool}
            handleFunc={setValorAlcool}
            label="Álcool"
            placeholder="4.90"
          />

          <GrupoInput
            valor={valorGasolina}
            handleFunc={setValorGasolina}
            label="Gasolina"
            placeholder="6.50"
          />

          <button
            className="form-conteudo-principal__btn"
            onClick={(e) => calcular(e)}
          >
            Calcular
          </button>
        </form>

        <div className="conteudo-principal__container-resultado">
          <h3 className="container-resultado__titulo">Compensa usar Álcool</h3>
          <span className="container-resultado__label">Álcool R$ 3.90</span>
          <span className="container-resultado__label">Gasolina R$ 6.60</span>
        </div>
      </section>

      <div className="container-inf">
        <span className="container-inf__texto">
          Veja como é feito o calculo.
        </span>

        <Link to="/entendaComoOCalculoEFeito">
          <img src="./public/info.png" alt="" className="container-inf__img" />
        </Link>
      </div>
    </main>
  );
}
