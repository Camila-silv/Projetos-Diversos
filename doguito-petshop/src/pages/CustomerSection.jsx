import { Link, useNavigate } from "react-router-dom";
import serviceControl from "../assets/app/service.jsx";
import { useEffect, useState } from "react";

export default function CustomerSection() {
  const [customerList, setCustomerList] = useState([]);
  const navigate = useNavigate();

  const deleteCustomer = (e, key) => {
    e.preventDefault();
    serviceControl.deleteCustomer(key);
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await serviceControl.searchCustomerList();

        setCustomerList(response);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchCustomers();
  }, [customerList]);

  const updateClient = (e, key) => {
    e.preventDefault();

    navigate(`/clienteeditsection?id=${key}`);
  };

  return (
    <section className="customer-section">
      <header className="client-section-header">
        <div className="label-container">
          <span className="label-container__label">Nome</span>
          <span className="label-container__label">Email</span>
        </div>

        <Link to="/newcustomersection" className="client-section-header__link">
          Novo Cliente
        </Link>
      </header>
      <ul className="customer-list">
        {customerList === undefined
          ? null
          : customerList.map((customer) => {
              return (
                <li className="customer-container" key={customer.id}>
                  <div className="customer-label-container">
                    <span className="customer-label-container__label">
                      {customer.client}
                    </span>
                    <span className="customer-label-container__label customer-label-container__label-email">
                      {customer.customerEmail}
                    </span>
                  </div>
                  <div className="button-container">
                    <Link
                      to="/clienteeditsection"
                      className="button-container__button"
                      onClick={(e) => updateClient(e, customer.id)}
                    >
                      Editar
                    </Link>
                    <button
                      className="button-container__button"
                      onClick={(e) => deleteCustomer(e, customer.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </li>
              );
            })}
      </ul>
    </section>
  );
}
