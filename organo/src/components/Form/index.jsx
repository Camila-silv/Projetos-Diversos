import Button from "../Button";
import ContainerInput from "../Container-input";

export default function Form() {
  return (
    <form className="form">
      <h2 className="form__title">
        Preencha os dados para criar o card do colaborador.
      </h2>

      <ContainerInput label="Name" placeholder="Digite seu nome" />
      <ContainerInput label="Cargo" placeholder="Digite seu cargo" />
      <ContainerInput
        label="Imagem"
        placeholder="Informe o endereço da imagem"
      />
      <ContainerInput label="Time" />

      <Button value="Criar card" />
    </form>
  );
}
