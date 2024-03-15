import { createBrowserRouter } from "react-router-dom";
import { Home, EntendaComoOCalculoEFeito } from "./pages/Index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/entendaComoOCalculoEFeito",
    element: <EntendaComoOCalculoEFeito />,
  }
 
]);

export default router;
