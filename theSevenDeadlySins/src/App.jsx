import { Header, MainContent } from "./components/index";

export default function App() {
  return (
    <>
      <Header />
      <MainContent />

      <div className="alert-container">
        <span className="alert-container__label">
          Não disponivel para outras telas
        </span>
      </div>
    </>
  );
}
