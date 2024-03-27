import { useState } from "react";
import { useNavigate } from "react-router-dom";
import serviceControl from "../assets/app/service.jsx";
import randomNumber from "../assets/app/randomNumber.jsx";
import filters from "../assets/app/dataInputFilter.jsx";

export default function NewCustomerSection() {
  const [newCustomerName, setNewCustomerName] = useState("");
  const [newCustomerEmail, setNewCustomerEmail] = useState("");
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);

  const registerNewCustomer = (e) => {
    e.preventDefault();

    if (newCustomerName === "" || newCustomerEmail === "") {
      alert("Algum campo inválido ou em branco. Preencha corretamente.");
      return;
    }

    
    if (
      filters.emailFilter(newCustomerEmail) === null ||
      filters.nameFilter(newCustomerName) === null
    ) {
      alert("Valor inválido, preencha o campo com um valor válido.");
      return;
    }

    serviceControl.createNewCustomer({
      id: randomNumber(),
      client: newCustomerName,
      customerEmail: newCustomerEmail,
    });

    navigate("/addcustomer");
  };

  const noFocusOnName = () => {
    if (newCustomerName == "") {
      setFocusName(false);
      return;
    }
  };

  const noFocusOnEmail = () => {
    if (newCustomerEmail == "") {
      setFocusEmail(false);
      return;
    }
  };

  const navigate = useNavigate();

  return (
    <section className="new-customer-section">
      <form className="new-customer-form">
        <fieldset className="new-customer-container">
          <legend className="new-customer-container__title">
            Novo Cliente
          </legend>

          <div
            className={
              focusName === true
                ? "new-customer-input-group new-customer-input-group--customized"
                : "new-customer-input-group"
            }
          >
            <label
              htmlFor=""
              className={
                focusName === true
                  ? "new-customer-input-group__label new-customer-input-group__label--customized"
                  : "new-customer-input-group__label"
              }
            >
              Nome
            </label>
            <input
              type="text"
              className={
                focusName === true
                  ? "new-customer-input-group__input new-customer-input-group--customized"
                  : "new-customer-input-group__input"
              }
              value={newCustomerName}
              onChange={(e) => setNewCustomerName(e.currentTarget.value)}
              onFocus={() => setFocusName(true)}
              onBlur={() => noFocusOnName()}
            />
          </div>

          <div
            className={
              focusEmail === true
                ? "new-customer-input-group new-customer-input-group--customized"
                : "new-customer-input-group"
            }
          >
            <label
              htmlFor=""
              className={
                focusEmail === true
                  ? "new-customer-input-group__label new-customer-input-group__label--customized"
                  : "new-customer-input-group__label"
              }
            >
              Email
            </label>
            <input
              type="text"
              className={
                focusEmail === true
                  ? "new-customer-input-group__input new-customer-input-group--customized"
                  : "new-customer-input-group__input"
              }
              value={newCustomerEmail}
              onChange={(e) => setNewCustomerEmail(e.currentTarget.value)}
              onFocus={() => setFocusEmail(true)}
              onBlur={() => noFocusOnEmail()}
            />
          </div>

          <button
            className="new-customer-container__button default-button"
            onClick={registerNewCustomer}
          >
            Cadastrar
          </button>
        </fieldset>
      </form>
    </section>
  );
}
