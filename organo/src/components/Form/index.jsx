import { useState } from "react";
import Button from "../Button";
import ContainerInput from "../Container-input";
import ContainerSelect from "../Container-select";

export default function Form() {
  const submit = (e) => {
    e.preventDefault();

  };

  const groups = [
    "",
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [selecionado, setSelecionado] = useState("");

  return (
    <form className="form" onSubmit={submit}>
      <h2 className="form__title">
        Preencha os dados para criar o card do colaborador.
      </h2>

      <ContainerInput
        label="Name"
        placeholder="Digite seu nome"
        htmlFor="nome"
        id="nome"
        valor={nome}
        aoAlterado={(valor) => setNome(valor)}
        obrigatorio={true}
      />
      <ContainerInput
        label="Cargo"
        placeholder="Digite seu cargo"
        htmlFor="cargo"
        id="cargo"
        valor={cargo}
        aoAlterado={(valor) => setCargo(valor)}
        obrigatorio={true}
      />
      <ContainerInput
        label="Imagem"
        placeholder="Informe o endereço da imagem"
        htmlFor="img"
        valor={imagem}
        aoAlterado={(valor) => setImagem(valor)}
        id="img"
      />

      <ContainerSelect
        label="Time"
        obrigatorio={true}
        valor={selecionado}
        aoAlterado={(valor) => setSelecionado(valor)}
      >
        {groups.map((group) => 
          <option value={group} key={group}>
            {group}
          </option>
        )}
      </ContainerSelect>

      <Button value="Criar card" />
    </form>
  );
}
