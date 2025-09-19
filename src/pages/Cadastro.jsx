import React, { useState } from 'react';
import styles from "../css/Cadastro.module.css";
import cadastroImage from '../assets/cadastro.png';

function Cadastro() {
  const [tipoConta, setTipoConta] = useState("empresa");

  const camposComuns = (
    <>
      <label className={styles.label} htmlFor="email">E-mail</label>
      <input className={styles.input} id="email" type="email" placeholder="seuemail@email.com.br" required />

      <label className={styles.label} htmlFor="senha">Senha</label>
      <input className={styles.input} id="senha" type="password" minLength="6" maxLength="16" required />

      <label className={styles.label} htmlFor="confirmaSenha">Confirme sua senha</label>
      <input className={styles.input} id="confirmaSenha" type="password" minLength="6" maxLength="16" required />
    </>
  );

  const camposEspecificos = tipoConta === "empresa" ? (
    <>
      <label className={styles.label} htmlFor="nomeEmpresa">Nome da empresa</label>
      <input className={styles.input} id="nomeEmpresa" type="text" placeholder="Insira o nome da empresa" required />

      <label className={styles.label} htmlFor="cnpj">CNPJ</label>
      <input className={styles.input} id="cnpj" type="text" placeholder="00.000.000/0000-00" required />
    </>
  ) : (
    <>
      <label className={styles.label} htmlFor="nomeCliente">Nome</label>
      <input className={styles.input} id="nomeCliente" type="text" placeholder="Insira seu nome" required />

      <label className={styles.label} htmlFor="cpf">CPF</label>
      <input className={styles.input} id="cpf" type="text" placeholder="000.000.000-00" required />
    </>
  );

  return (
    <div className={styles.container}>
      <button className={styles.voltar}>Voltar</button>

      <h2 className={styles.title}>CRIAR CONTA</h2>
      <p className={styles.subtitle}>Registre suas informações de acordo com sua escolha</p>

      {/* Botões Toggle */}
      <div className={styles.toggleButtons}>
        <button 
          className={tipoConta === "empresa" ? styles.toggleButtonActive : styles.toggleButton}
          onClick={() => setTipoConta("empresa")}
          aria-pressed={tipoConta === "empresa"}
        >
          Sou Empresa
        </button>
        <button 
          className={tipoConta === "cliente" ? styles.toggleButtonActive : styles.toggleButton}
          onClick={() => setTipoConta("cliente")}
          aria-pressed={tipoConta === "cliente"}
        >
          Recebedor
        </button>
      </div>

      {/* Formulário principal */}
      <form className={styles.form}>
        {camposComuns}
        {camposEspecificos}

        <div className={styles.formButtons}>
          <button className={styles.cancelButton} type="reset">CANCELAR</button>
          <button className={styles.submitButton} type="submit">ENVIAR</button>
        </div>
      </form>

      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <img className={styles.footerImage} src={cadastroImage} alt="Logo" />
        </div>
      </footer>
    </div>
  );
}

export default Cadastro;