import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { Header } from "./components/Index.jsx";


export default function App() {
  
  return (
    <>
      <Header/>

      <main className="main-content">
        <RouterProvider router={router} />
      </main>
    </>
  );
}
