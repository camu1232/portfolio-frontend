import foto from '../assets/foto.png';

function About() {
  return (
    <section>
      <h3>Sobre mí</h3>
      <img src={foto} alt="Foto de perfil" />
      <p>Aquí puedes escribir una breve presentación sobre quién eres, tus habilidades y tu motivación.</p>
    </section>
  );
}

export default About;
