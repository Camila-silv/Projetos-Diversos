export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer__container-product">
        <div className="container-product__container-footer-img">
          <img
            className="container-footer-img__img"
            src="public/pedra-e-flor.jpeg"
            alt=""
          />
        </div>

        <h3 className="container-product__title">É sobre bem estar</h3>
        <h4 className="container-product__sub-title">
          Cuide do seu corpo e leve boas memórias consigo.
        </h4>

        <p className="container-product__paragraphy">
          Carregue com você o bem-estar, onde estiver. Leve o conforto do SPA
          para a sua casa. Confira nossas opções de sabonetes, sais de banho e
          velas para presentear você mesmo ou quem você ama.
        </p>
      </div>

      <div className="main-footer__container-paragraphy">
        <p>Desenvolvido por Camila Silva | 2023</p>
      </div>
    </footer>
  );
}
