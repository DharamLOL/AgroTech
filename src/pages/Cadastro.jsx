import React, { useState } from 'react';
import styles from "../css/Cadastro.module.css";
import cadastroImage from '../assets/cadastro.png'; // Import da imagem

function Cadastro() {
  const [tipoConta, setTipoConta] = useState('empresa');

  return (
    <div className={styles.container}>
      {/* Botão Voltar */}
      <button className={styles.voltar}>Voltar</button>

      <div className={styles.whiteBorder}>
        <h2 className={styles.title}>CRIAR CONTA</h2>
        <p className={styles.subtitle}>Registre suas informações de acordo com sua escolha</p>

        {/* Botões Toggle */}
        <div className={styles.toggleButtons}>
          <button 
            className={tipoConta === "empresa" ? styles.toggleButtonActive : styles.toggleButton}
            onClick={() => setTipoConta("empresa")}
          >
            Sou Empresa
          </button>
          <button 
            className={tipoConta === "cliente" ? styles.toggleButtonActive : styles.toggleButton}
            onClick={() => setTipoConta("cliente")}
          >
            Recebedor
          </button>
        </div>

        {/* Formulário Empresa */}
        {tipoConta === 'empresa' && (
          <fieldset className={styles.formFieldset}>
            <form className={styles.form}>
              <label className={styles.label} htmlFor='emailEmpresa'>E-mail</label>
              <input className={styles.input} id='emailEmpresa' type='email' placeholder='seuemail@email.com.br' required />

              <label className={styles.label} htmlFor='nomeEmpresa'>Nome da empresa</label>
              <input className={styles.input} id='nomeEmpresa' type='text' placeholder='Insira o nome da empresa' required />

              <label className={styles.label} htmlFor='CNPJ'>CNPJ</label>
              <input className={styles.input} id='CNPJ' type='text' placeholder='00.000.000/0000-00' required />

              <label className={styles.label} htmlFor='senhaEmpresa'>Senha</label>
              <input className={styles.input} id='senhaEmpresa' type='password' minLength='6' maxLength='16' required />

              <label className={styles.label} htmlFor='conferiSenhaEmpresa'>Confirme sua senha</label>
              <input className={styles.input} id='conferiSenhaEmpresa' type='password' minLength='6' maxLength='16' required />

              <div className={styles.formButtons}>
                <button className={styles.cancelButton} type='reset'>CANCELAR</button>
                <button className={styles.submitButton} type='submit'>ENVIAR</button>
              </div>
            </form>
          </fieldset>
        )}

        {/* Formulário Cliente */}
        {tipoConta === 'cliente' && (
          <fieldset className={styles.formFieldset}>
            <form className={styles.form}>
              <label className={styles.label} htmlFor='emailCliente'>E-mail</label>
              <input className={styles.input} id='emailCliente' type='email' placeholder='seuemail@email.com.br' required />

              <label className={styles.label} htmlFor='nomeCliente'>Nome</label>
              <input className={styles.input} id='nomeCliente' type='text' placeholder='Insira seu nome' required />

              <label className={styles.label} htmlFor='CPF'>CPF</label>
              <input className={styles.input} id='CPF' type='text' placeholder='000.000.000-00' required />

              <label className={styles.label} htmlFor='senhaCliente'>Senha</label>
              <input className={styles.input} id='senhaCliente' type='password' minLength='6' maxLength='16' required />

              <label className={styles.label} htmlFor='conferiSenhaCliente'>Confirme sua senha</label>
              <input className={styles.input} id='conferiSenhaCliente' type='password' minLength='6' maxLength='16' required />

              <div className={styles.formButtons}>
                <button className={styles.cancelButton} type='reset'>CANCELAR</button>
                <button className={styles.submitButton} type='submit'>ENVIAR</button>
              </div>
            </form>
          </fieldset>
        )}
      </div>

      {/* Rodapé com imagem importada */}
      <footer className={styles.footer}>
        <img 
          className={styles.footerImage} 
          src={cadastroImage}  // Imagem importada
          alt="Logo" 
        />
      </footer>
    </div>
  );
}

export default Cadastro;