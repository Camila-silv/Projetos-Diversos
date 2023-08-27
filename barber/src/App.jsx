import {
  Header,
  SectionAbout,
  SectionServices,
  Location,
  Footer,
  Icon
} from "./components/index";

export default function App() {
  return (
    <>
      <div className="wallpaper">
        <Header />
      </div>
      <SectionAbout />
      <SectionServices />
      <Location />
      <Footer />
      <Icon />
    </>
  );
}
