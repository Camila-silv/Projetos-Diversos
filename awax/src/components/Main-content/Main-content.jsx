import Banner from "./Banner/Banner";
import AboutUs from "./About-us/About-us";
import Serviices from "./Serviices/Serviices";
import OurProjects from "./Our-projects/Our-projects";
import OurTeam from "./Our-team/Our-team";
import HappyClients from "./Happy-clients/Happy-clients";
import Sponsors from "./Sponsors/Sponsors";
import Prices from "./Prices/Prices";
import Premium from "./Premium/Premium";
import SomeFacts from "./Some-facts/Some-facts";
import TellAboutUs from "./Tell-about-us/Tell-about-us";
import ContactUs from "./Contact-us/Contact-us";
import Location from "./Location/Location";

export default function MainContent() {
  return (
    <main>
      <Banner />
      <AboutUs />
      <Serviices />
      <OurProjects />
      <OurTeam />
      <HappyClients />
      <Sponsors />
      <Prices />
      <Premium />
      <SomeFacts />
      <TellAboutUs />
      <ContactUs />
      <Location />
    </main>
  );
}
