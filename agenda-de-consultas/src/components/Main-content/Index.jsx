import Card from "../Card/Index"
import ContainerAppointments from "../Container-appointments/Index";

export default function MainContent() {
  return (
    <main className="main-content">
      <section className="main-content__section-scheduled-appointments">
        <ContainerAppointments title="Hoje">
          <>
            <Card
              name="Luciana Dias"
              modality="Consulta remota"
              hour="14:00 - 15:00 &#40;1 hora&#41;"
              photo="public/perfil-2.jpg"
              icon="Consulta remota"
            />

            <Card
              name="Larissa Santana"
              modality="Consulta no local"
              hour="16:00 - 17:00 &#40;1 hora&#41;"
              photo="public/perfil-3.jpg"
              icon="Consulta no local"
            />

            <Card
              name="Marcos Correia"
              modality="Consulta remota"
              hour="17:20 - 18:00 &#40;40 minutos&#41;"
              photo="public/perfil-4.jpg"
              icon="Consulta remota"
            />

            <Card
              name="Marcos Correia"
              modality="Consulta remota"
              hour="17:20 - 18:00 &#40;40 minutos&#41;"
              photo="public/perfil-4.jpg"
              icon="Consulta remota"
            />

            <Card
              name="Larissa Santana"
              modality="Consulta no local"
              hour="16:00 - 17:00 &#40;1 hora&#41;"
              photo="public/perfil-3.jpg"
              icon="Consulta no local"
            />

            <Card
              name="Marcos Correia"
              modality="Consulta remota"
              hour="17:20 - 18:00 &#40;40 minutos&#41;"
              photo="public/perfil-4.jpg"
              icon="Consulta remota"
            />

            <Card
              name="Marcos Correia"
              modality="Consulta remota"
              hour="17:20 - 18:00 &#40;40 minutos&#41;"
              photo="public/perfil-4.jpg"
              icon="Consulta remota"
            />
          </>
        </ContainerAppointments>

        <ContainerAppointments title="Amanhã" mClass="container--margin-top">
          <>
            <Card
              name="Clara Lemos"
              modality="Consulta no local"
              hour="18:00 - 19:00 &#40;1 hora&#41;"
              photo="public/perfil-5.jpg"
              icon="Consulta no local"
            />

            <Card
              name="Luciana Dias"
              modality="Consulta remota"
              hour="14:00 - 15:00 &#40;1 hora&#41;"
              photo="public/perfil-2.jpg"
              icon="Consulta remota"
            />

            <Card
              name="Marcos Correia"
              modality="Consulta remota"
              hour="17:20 - 18:00 &#40;40 minutos&#41;"
              photo="public/perfil-4.jpg"
              icon="Consulta remota"
            />

            <Card
              name="Larissa Santana"
              modality="Consulta no local"
              hour="16:00 - 17:00 &#40;1 hora&#41;"
              photo="public/perfil-3.jpg"
              icon="Consulta no local"
            />
          </>
        </ContainerAppointments>

        <ContainerAppointments
          title="Quarta-feira"
          mClass="container--margin-top container--padding-bottom"
        >
          <>
            <Card
              name="Clara Lemos"
              modality="Consulta no local"
              hour="18:00 - 19:00 &#40;1 hora&#41;"
              photo="public/perfil-5.jpg"
              icon="Consulta no local"
            />

            <Card
              name="Luciana Dias"
              modality="Consulta remota"
              hour="14:00 - 15:00 &#40;1 hora&#41;"
              photo="public/perfil-2.jpg"
              icon="Consulta remota"
            />

            <Card
              name="Marcos Correia"
              modality="Consulta remota"
              hour="17:20 - 18:00 &#40;40 minutos&#41;"
              photo="public/perfil-4.jpg"
              icon="Consulta remota"
            />

            <Card
              name="Larissa Santana"
              modality="Consulta no local"
              hour="16:00 - 17:00 &#40;1 hora&#41;"
              photo="public/perfil-3.jpg"
              icon="Consulta no local"
            />
          </>
        </ContainerAppointments>
      </section>
    </main>
  );
}
