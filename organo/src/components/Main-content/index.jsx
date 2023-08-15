import { useState } from "react";
import Form from "../Form/Index";
import ContainerSquads from "../Container-squads";

export default function MainContent() {
  const [groups, setGroups] = useState([]);

  const adicionarMembro = (grupo) => {
    setGroups([...groups, grupo]);
  };

  return (
    <main className="main-content">
      <section className="card-builder-section">
        <Form salvarGrupo={(grupo) => adicionarMembro(grupo)} />
      </section>
      <section className="organization-section">
        <h2 className="organization-section__title">Minha O<span className="title--border">rga</span>nização:</h2>
        <ContainerSquads title="Programação"/>
      </section>
    </main>
  );
}
