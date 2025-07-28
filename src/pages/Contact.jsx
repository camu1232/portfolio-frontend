import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/mensajes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión con el servidor.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-left">
        <h2>CONTACT</h2>
        <p>Completá el formulario de contacto.</p>
        <p>Camila Orts</p>
        <p>Córdoba, Argentina</p>
        <p>camilaorts33@email.com</p>
        <p>+54 9 358 418-2259</p>
        <p>
          <a href="https://github.com/camu1232" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://www.instagram.com/camiiorts" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Nombre" required />
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" required />
        <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Asunto" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Mensaje" required></textarea>
        <button type="submit">ENVIAR</button>
        {success && <p className="success-msg">¡Mensaje enviado con éxito!</p>}
      </form>
    </section>
  );
}

export default Contact;
