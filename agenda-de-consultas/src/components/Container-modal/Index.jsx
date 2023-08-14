import { useState } from "react";
import Form from "../Form/Index";

export default function ContainerModal() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="container-modal">
      {openForm === true ? (
        <Form closeForm={(close) => setOpenForm(close)} close={openForm} />
      ) : (
        <button
          className="container-modal__button-open button-default"
          onClick={() => {
            setOpenForm(!openForm);
          }}
        >
          Nova consulta
        </button>
      )}
    </div>
  );
}
