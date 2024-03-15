import { Link } from "react-router-dom";

export default function EntendaComoOCalculoEFeito() {
  return (
    <main className="style-default">
      <section className="conteudo-principal">
        <img
          src="./public/logo.png"
          alt="o logo, uma bomba de combustivel"
          className="conteudo-principal__logo"
        />

        <h2 className="conteudo-principal__titulo">
          Entende como o cálculo é feito
        </h2>

        <div className="container-explicacao-sobre-o-calculo">
          <p className="container-explicacao-sobre-o-calculo__paragraphy">Dividimos o valor do litro do álcool pelo da gasolina</p>
          <p className="container-explicacao-sobre-o-calculo__paragraphy">
            Quando o resultado é menor que 0,7, a recomendação é abastecer com o
            álcool. Se maior, a recomendação é escolher a gasolina.
          </p>

          <p className="container-explicacao-sobre-o-calculo__paragraphy">
            Exemplo: se o álcool custa R$ 3,29 e a gasolina R$ 4,92, o resultado da divisão do primeiro pelo segundo é 0,67, menor que 0,7. Portanto, é mais vantajoso abastecer com álcool.
          </p>
        </div>

        <Link to="/" className="botao-retornar-ao-inicio">Calcular preço</Link>
      </section>
    </main>
  );
}
