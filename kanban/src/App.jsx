import {Header} from "./components/index";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <h1>React Kanban</h1>
        <section>
          <div>
            <h2>Pendente</h2>

            <div>
              tarefas
            </div>

            <button>Nova tarefa</button>
          </div>
        </section>
      </main>
    </>
  );
}
