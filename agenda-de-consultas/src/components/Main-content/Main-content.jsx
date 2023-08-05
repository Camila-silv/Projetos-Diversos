import Card from "../Card/Card";

export default function MainContent() {
  return (
    <main className="main-content">
      <section className="main-content__section-scheduled-appointments">
        <div className="section-scheduled-appointments__container-appointments container">
          <h2 className="container-appointments__date">Hoje</h2>

          <Card 
          name="Luciana Dias"
          modality="Consulta remota"
          hour="14:00 - 15:00 &#40;1 hora&#41;"
          photo="public/perfil-2.jpg"
          icon="Consulta remota"/>
        </div>
      </section>
    </main>
  );
}
