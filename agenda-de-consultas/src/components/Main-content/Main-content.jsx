import Card from "../Card/Card";

export default function MainContent() {
  return (
    <main className="main-content">
      <section className="main-content__section-scheduled-appointments">
        <div className="section-scheduled-appointments__container-appointments container">
          <h2 className="container-appointments__date">Hoje</h2>

          <Card />
        </div>
      </section>
    </main>
  );
}
