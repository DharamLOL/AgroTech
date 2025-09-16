import React, { useState } from 'react';
import styles from "../css/Login.module.css";
import loginImage from "../assets/login.png"


function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div className={styles.container}>
      {/* Bolinhas ao fundo */}
      <div className={`${styles.backgroundEllipse} ${styles.ellipse1}`}></div>
      <div className={`${styles.backgroundEllipse} ${styles.ellipse2}`}></div>

      {/* Logo maior com fundo branco */}
      <div className={styles.imageContainer}>
        <img className={styles.loginImage} src={loginImage} alt="Logo" />
      </div>

      {/* Formulário */}
      <div className={styles.loginContainer}>
        <form className={styles.form}>
          <label htmlFor="email">E-mail</label>
          <input
            className={styles.formControl}
            type="email"
            id="email"
            placeholder="seuemail@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="senha">Senha</label>
          <input
            className={styles.formControl}
            type="password"
            id="senha"
            placeholder="********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <div className={styles.forgotPasswordContainer}>
            <a href="/recuperar-senha" className={styles.forgotPassword}>
              Esqueci minha senha
            </a>
          </div>

          <button type="submit" className={`${styles.btnCustom} ${styles.bgButton}`}>
            Entrar
          </button>
          <button type="reset" className={`${styles.btnCustom} ${styles.bgButton2}`}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;