import { useState } from "react";
import Form from "../Form/Index";
import ContainerSquad from "../Container-squad";

export default function MainContent() {
  const [groups, setGroups] = useState([]);

  const adicionarMembro = (grupo) => {
    setGroups([...groups, grupo]);
  };

  const squads = [
    {
      squad: "Programação",
      bg: "#D9F7E9",
      color: "#57C278",
      members: [
        {
          memberName: "Juliana Amoasei",
          img: "public/avatar-1.png",
          func: "Desenvolvedora de software e instrutora",
        },
        {
          memberName: "Daniel Artine",
          img: "public/avatar-2.png",
          func: "Engenheiro de Software na Stone Age",
        },
        {
          memberName: "Guilherme Lima",
          img: "public/avatar-4.png",
          func: "Desenvolvedor Python e JavaScript na Alura",
        },
        {
          memberName: "Paulo Silveira",
          img: "public/avatar-3.png",
          func: "Hipster e CEO da Alura",
        },
      ],
    },
    {
      squad: "Front-End",
      bg: "#E8F8FF",
      color: "#82CFFA",
      members: [
        {
          memberName: "Juliana Amoasei",
          img: "public/avatar-1.png",
          func: "Desenvolvedora de software e instrutora",
        },
        {
          memberName: "Daniel Artine",
          img: "public/avatar-2.png",
          func: "Engenheiro de Software na Stone Age",
        },
        {
          memberName: "Guilherme Lima",
          img: "public/avatar-4.png",
          func: "Desenvolvedor Python e JavaScript na Alura",
        },
        {
          memberName: "Paulo Silveira",
          img: "public/avatar-3.png",
          func: "Hipster e CEO da Alura",
        },
      ],
    },
    {
      squad: "Data Science",
      bg: "#F0F8E2",
      color: "#A6D157",
      members: [
        {
          memberName: "Juliana Amoasei",
          img: "public/avatar-1.png",
          func: "Desenvolvedora de software e instrutora",
        },
        {
          memberName: "Daniel Artine",
          img: "public/avatar-2.png",
          func: "Engenheiro de Software na Stone Age",
        },
        {
          memberName: "Guilherme Lima",
          img: "public/avatar-4.png",
          func: "Desenvolvedor Python e JavaScript na Alura",
        },
        {
          memberName: "Paulo Silveira",
          img: "public/avatar-3.png",
          func: "Hipster e CEO da Alura",
        },
      ],
    },
    {
      squad: "Devops",
      bg: "#FDE7E8",
      color: "#E06B69",
      members: [
        {
          memberName: "Juliana Amoasei",
          img: "public/avatar-1.png",
          func: "Desenvolvedora de software e instrutora",
        },
        {
          memberName: "Daniel Artine",
          img: "public/avatar-2.png",
          func: "Engenheiro de Software na Stone Age",
        },
        {
          memberName: "Guilherme Lima",
          img: "public/avatar-4.png",
          func: "Desenvolvedor Python e JavaScript na Alura",
        },
        {
          memberName: "Paulo Silveira",
          img: "public/avatar-3.png",
          func: "Hipster e CEO da Alura",
        },
      ],
    },
    {
      squad: "UX e Design",
      bg: "#FAE9F5",
      color: "#DB6EBF",
      members: [
        {
          memberName: "Juliana Amoasei",
          img: "public/avatar-1.png",
          func: "Desenvolvedora de software e instrutora",
        },
        {
          memberName: "Daniel Artine",
          img: "public/avatar-2.png",
          func: "Engenheiro de Software na Stone Age",
        },
        {
          memberName: "Guilherme Lima",
          img: "public/avatar-4.png",
          func: "Desenvolvedor Python e JavaScript na Alura",
        },
        {
          memberName: "Paulo Silveira",
          img: "public/avatar-3.png",
          func: "Hipster e CEO da Alura",
        },
      ],
    },
    {
      squad: "Mobile",
      bg: "#FFF5D9",
      color: "#FFBA05",
      members: [
        {
          memberName: "Juliana Amoasei",
          img: "public/avatar-1.png",
          func: "Desenvolvedora de software e instrutora",
        },
        {
          memberName: "Daniel Artine",
          img: "public/avatar-2.png",
          func: "Engenheiro de Software na Stone Age",
        },
        {
          memberName: "Guilherme Lima",
          img: "public/avatar-4.png",
          func: "Desenvolvedor Python e JavaScript na Alura",
        },
        {
          memberName: "Paulo Silveira",
          img: "public/avatar-3.png",
          func: "Hipster e CEO da Alura",
        },
      ],
    },
    {
      squad: "Inovação e Gestão",
      bg: "#FFEEDF",
      color: "#FF8A29",
      members: [
        {
          memberName: "Juliana Amoasei",
          img: "public/avatar-1.png",
          func: "Desenvolvedora de software e instrutora",
        },
        {
          memberName: "Daniel Artine",
          img: "public/avatar-2.png",
          func: "Engenheiro de Software na Stone Age",
        },
        {
          memberName: "Guilherme Lima",
          img: "public/avatar-4.png",
          func: "Desenvolvedor Python e JavaScript na Alura",
        },
        {
          memberName: "Paulo Silveira",
          img: "public/avatar-3.png",
          func: "Hipster e CEO da Alura",
        },
      ],
    },
  ];

  return (
    <main className="main-content">
      <section className="card-builder-section">
        <Form salvarGrupo={(grupo) => adicionarMembro(grupo)} />
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
              members={squad.members}
            />
          );
        })}
      </section>
    </main>
  );
}
