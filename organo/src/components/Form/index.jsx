import { useState } from "react";
import Button from "../Button";
import ContainerInput from "../Container-input";
import ContainerSelect from "../Container-select";
import PropTypes from "prop-types";

export default function Form({ salvarGrupo, times }) {
  const submit = (e) => {
    e.preventDefault();

   
    salvarGrupo({
      nome,
      cargo,
      imagem,
      selecionado,
    });

    setNome("");
    setCargo("");
    setImagem("public/sem-foto.png");
    setSelecionado("Programação");
  };


  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("public/sem-foto.png");
  const [selecionado, setSelecionado] = useState("Programação");

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
        {times.map((group) => (
          <option value={group} key={group}>
            {group}
          </option>
        ))}
      </ContainerSelect>

      <Button value="Criar card"/>
    </form>
  );
}

Form.propTypes = {
  salvarGrupo: PropTypes.func,
  times: PropTypes.array,
};
