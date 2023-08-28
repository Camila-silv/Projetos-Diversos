import {ContainerTask} from "./index";

export default function MainContent() {
  return (
    <main className="main-content">
      <header className="main-content__main-content-header">
        <h1 className="main-content-header__title">React Kanban</h1>
      </header>

      <section className="main-content__task-section">
       <ContainerTask />
      </section>
    </main>
  );
}
