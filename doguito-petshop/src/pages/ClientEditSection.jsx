import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import serviceControl from "../assets/app/service";
import filters from "../assets/app/dataInputFilter";

export default function ClienteEditSection() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const captureURL = new URL(window.location);
  const id = captureURL.searchParams.get("id");

  const navigate = useNavigate();

  useEffect(() => {
    const searchForSpecifiCustomer = async () => {
      try {
        const response = await serviceControl.searchForSpecifiCustomer(id);

        setInputName(response.client);
        setInputEmail(response.customerEmail);
      } catch (error) {
        console.error(`Algo deu errado: ${error}`);
      }
    };

    searchForSpecifiCustomer();
  }, [id]);

  const updateClient = (e) => {
    e.preventDefault();

    if (
      filters.emailFilter(inputEmail) === null ||
      filters.nameFilter(inputName) === null
    ) {
      alert("Valor inválido, preencha o campo com um valor válido.");
      return;
    }

    serviceControl.updateClient(id, {
      client: inputName,
      customerEmail: inputEmail,
    });
    navigate("/editedclient");
  };

  return (
    <section className="client-edit-section">
      <form className="client-edit-form">
        <fieldset className="client-edit-container">
          <legend className="client-edit-container__title">Edição</legend>

          <div className="existing-customer-input-edit-group">
            <label
              htmlFor=""
              className="existing-customer-input-edit-group__label"
            >
              Nome
            </label>
            <input
              type="text"
              className="existing-customer-input-edit-group__input"
              value={inputName}
              onChange={(e) => setInputName(e.currentTarget.value)}
            />
          </div>

          <div className="existing-customer-input-edit-group">
            <label
              htmlFor=""
              className="existing-customer-input-edit-group__label"
            >
              Email
            </label>
            <input
              type="text"
              className="existing-customer-input-edit-group__input"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.currentTarget.value)}
            />
          </div>

          <button
            className="client-edit-container__button default-button"
            onClick={(e) => updateClient(e)}
          >
            Editar cliente
          </button>
        </fieldset>
      </form>
    </section>
  );
}
