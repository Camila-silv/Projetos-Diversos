import { useState } from "react";
import Form from "../Form/Index";
import ContainerSquad from "../Container-squad";

export default function MainContent() {
  const [groups, setGroups] = useState([
    {
      nome: "Juliana Amoasei",
      cargo: "Desenvolvedora de software e instrutora",
      imagem: "public/avatar-1.png",
      selecionado: "Programação",
    },
    {
      nome: "Daniel Artine",
      cargo: "Engenheiro de Software na Stone Age",
      imagem: "public/avatar-2.png",
      selecionado: "Data Science",
    },{
      nome: "Daniel Artine",
      cargo: "Engenheiro de Software na Stone Age",
      imagem: "public/avatar-2.png",
      selecionado: "Data Science",
    },{
      nome: "Daniel Artine",
      cargo: "Engenheiro de Software na Stone Age",
      imagem: "public/avatar-2.png",
      selecionado: "Data Science",
    },{
      nome: "Daniel Artine",
      cargo: "Engenheiro de Software na Stone Age",
      imagem: "public/avatar-2.png",
      selecionado: "Data Science",
    },{
      nome: "Daniel Artine",
      cargo: "Engenheiro de Software na Stone Age",
      imagem: "public/avatar-2.png",
      selecionado: "Data Science",
    },
    {
      nome: "Daniel Artine",
      cargo: "Engenheiro de Software na Stone Age",
      imagem: "public/avatar-2.png",
      selecionado: "Data Science",
    },
    {
      nome: "Guilherme Lima",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem: "public/avatar-4.png",
      selecionado: "Front-End",
    },
    {
      nome: "Paulo Silveira",
      cargo: "Hipster e CEO da Alura",
      imagem: "public/avatar-3.png",
      selecionado: "Mobile",
    },
  ]);

  const adicionarMembro = (group) => {
    setGroups([...groups, group]);
  };

  const squads = [
    {
      squad: "Programação",
      bg: "#D9F7E9",
      color: "#57C278",
    },
    {
      squad: "Front-End",
      bg: "#E8F8FF",
      color: "#82CFFA",
    },
    {
      squad: "Data Science",
      bg: "#F0F8E2",
      color: "#A6D157",
    },
    {
      squad: "Devops",
      bg: "#FDE7E8",
      color: "#E06B69",
    },
    {
      squad: "UX e Design",
      bg: "#FAE9F5",
      color: "#DB6EBF",
    },
    {
      squad: "Mobile",
      bg: "#FFF5D9",
      color: "#FFBA05",
    },
    {
      squad: "Inovação e Gestão",
      bg: "#FFEEDF",
      color: "#FF8A29",
    },
  ];

  return (
    <main className="main-content">
      <section className="card-builder-section">
        <Form
          salvarGrupo={(grupo) => adicionarMembro(grupo)}
          times={squads.map((time) => time.squad)}
        />
      </section>
      <section className="organization-section">
        <h2 className="organization-section__title">
          Minha O<span className="title--border">rga</span>nização:
        </h2>

        {squads.map((squad) => {
          return (
            <ContainerSquad
              title={squad.squad}
              bg={squad.bg}
              color={squad.color}
              key={squad.squad}
              members={groups.filter(
                (member) => member.selecionado === squad.squad
              )}
            />
          );
        })}
      </section>
    </main>
  );
}
