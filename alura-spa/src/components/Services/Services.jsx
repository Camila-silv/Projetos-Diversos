import Card from "../Card/Card";

export default function Services() {
  return (
    <section className="section-services">
      <div className="section-services__container-services">
        <h3 className="section-services__title">O que oferecemos</h3>

        <h4 className="section-services__sub-title">
          Uma ampla diversidade de serviços com alto padrão de qualidade
        </h4>

        <div className="section-services__container-card">
          <Card
            title="Bem-estar"
            paragraphy="Estar bem com nós mesmos faz toda a diferença. Aproveite nossos
              tratamentos para ter um momento de auto-cuidado e aumentar a sua
              auto-estima"
            img="public/beleza.jpeg"
            alt="Mulher relaxando."
          />
          <Card
            title="Renovação"
            paragraphy="Você merece relaxar. Confira as nossas opções de massagens que vão fazer você renovar as energias e esquecer do estresse do dia-a-dia"
            img="public/bem-estar.jpeg"
            alt="Mulher recebendo massagem"
          />
          <Card
            title="Massagem"
            paragraphy="Se você precisa de um dia especial para cuidar de você, preparamos opções que promovem uma renovação completa. Confira nossos dias especiais, banhos e tratamentos holísticos."
            img="public/descanso.jpeg"
            alt="Foto de uma paisagem, onde uma mulher fazendo yoga"
          />
        </div>
      </div>
    </section>
  );
}
