import { useState } from "react";
import Form from "../Form/Form";

export default function ContainerModal() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="container-modal">
      {openForm === true ? (
        <>
          <button
            className="container-modal__button-close button-default"
            onClick={() => {
              setOpenForm(!openForm);
            }}
          >
            x
          </button>
          <Form />
        </>
      ) : (
        <button
          className="container-modal__button-open button-default"
          onClick={() => {
            setOpenForm(!openForm);
          }}
        >
          Abrir modal
        </button>
      )}
    </div>
  );
}
