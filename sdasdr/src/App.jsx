import { MainContet, Footer, Banner, Header } from "./components/index";

export default function App() {
  return (
    <>
      <div className="bg-img">
        <Header />

        <Banner />
      </div>

      <MainContet />

      <Footer />
    </>
  );
}
