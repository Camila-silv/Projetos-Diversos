export default function Icon() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511000000000&text=Quero%20agendar%20um%20hor%C3%A1rio"
      className="link-whatsapp"
      data-aos="fade-down"
      data-aos-delay="250"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="public/whatssapp.svg" alt="" className="link-whatsapp__img" />
      <span className="link-whatsapp__label">agende seu horário</span>
    </a>
  );
}
