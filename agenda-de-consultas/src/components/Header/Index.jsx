export default function Header() {
  return (
    <header className="main-header">
      <div className="main-header__container-user container">
        <img className="container-user__img-user" src="public/perfil-1.jpg" alt="Foto de perfil do médico" />

        <div className="container-user__greeting-to-user">
          <span className="greeting-to-user_greeting">
            Olá, Sônia
          </span>
          <span className="greeting-to-user__number-appointments">
            Mais 4 consultas hoje
          </span>
        </div>
      </div>
    </header>
  );
}
