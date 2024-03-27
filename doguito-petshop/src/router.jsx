import { createBrowserRouter } from "react-router-dom";
import {
  CustomerSection,
  NewCustomerSection,
  ClienteEditSection,
  AlertSection,
} from "./pages/Index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerSection />,
  },
  {
    path: "/newcustomersection",
    element: <NewCustomerSection />,
  },
  {
    path: "/clienteeditsection",
    element: <ClienteEditSection />,
  },
  {
    path: "/addcustomer",
    element: <AlertSection str="Cadastro realizado com sucesso!!" />,
  },
  {
    path: "/editedclient",
    element: <AlertSection str="Cliente editado com sucesso" />,
  },
]);

export default router;
