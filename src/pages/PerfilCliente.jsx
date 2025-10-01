import React, { useState } from "react";
import Perfil from "../css/Perfil.module.css";

const PerfilCliente = () => {
  const [email, setEmail] = useState("cliente@email.com");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [imagemPreview, setImagemPreview] = useState("");

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagemPreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Perfil salvo com sucesso!");
  };

  const handleReset = () => {
    setEmail("");
    setEndereco("");
    setNumero("");
    setComplemento("");
    setImagemPreview("../assets/imagem_padrao.png");
  };

  return (
    <div className={Perfil.whiteBorder}>
      <header>
        <button
          className={Perfil.voltar}
          onClick={() => window.history.back()}
        >
          Voltar
        </button>
        <h1>MEU PERFIL</h1>
      </header>

      <main>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          {/* Imagem de perfil */}
          <section className={Perfil.fotoPerfil}>
            <label htmlFor="uploadFoto" tabIndex="0">
              <img src={imagemPreview} alt="Foto do perfil do cliente" />
              <input
                type="file"
                id="uploadFoto"
                accept="image/*"
                hidden
                onChange={handleImagemChange}
              />
            </label>
            <p>Clique na imagem para alterar</p>
          </section>

          {/* Campos de perfil */}
          <div className={Perfil.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={Perfil.formGroup}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" value="João da Silva" readOnly />
          </div>

          <div className={Perfil.formGroup}>
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" value="000.000.000-00" readOnly />
          </div>

          <div className={Perfil.formGroup}>
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              id="endereco"
              placeholder="Rua Exemplo"
              value={endereco}
              required
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>

          <div className={Perfil.formRow}>
            <div className={Perfil.formGroup}>
              <label htmlFor="numero">Número</label>
              <input
                type="text"
                id="numero"
                placeholder="123"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </div>
            <div className={Perfil.formGroup}>
              <label htmlFor="complemento">Complemento</label>
              <input
                type="text"
                id="complemento"
                placeholder="Apto, bloco, etc."
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
            </div>
          </div>

          <div className={Perfil.botoesFormulario}>
            <button type="reset">Cancelar</button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default PerfilCliente;
