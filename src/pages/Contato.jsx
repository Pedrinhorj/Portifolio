import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../assets/css/contato.css";

export default function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3jfxurh",
        "template_en4yiks",
        form.current,
        "4x-hGj5hb5tPGyUrR"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagen enviada com sucesso!");
        },
        (error) => {
          console.log(error.text);
          alert("Erro ao enviar a mensagem");
        }
      );
  };

  return (
    <div>
      <div
        className="div-contacts"
        style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}
      >
        <h1>Entre em Contato</h1>
        <p>
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à
          vontade para me enviar uma mensagem!
        </p>

        <h2>Formulário de Contato</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="name">Nome:</label>
            <input
              className="input"
              placeholder="Escreva seu nome"
              type="text"
              id="name"
              name="name"
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="email">E-mail:</label>
            <input
              className="input"
              type="email"
              placeholder="Digite seu email"
              id="email"
              name="email"
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              type="text"
              className="input"
              placeholder="Sua mensagem"
              name="message"
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              padding: "10px 15px",
              backgroundColor: "#121920",
              color: "#fff",
              border: "white solid 1px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Enviar
          </button>
        </form>

        <h3>Ou envie um e-mail diretamente:</h3>
        <p>
          <a href="mailto:pedroarthrj@gmail.com">pedroarthrj@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
