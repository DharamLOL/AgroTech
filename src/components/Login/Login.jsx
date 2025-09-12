jsx
import React, { useState } from 'react';
import styles from './Login.module.css';
import loginImage from '../../assets/images/login.jpeg'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  const handleCadastro = () => {
    console.log('Redirecionar para cadastro');
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login com ${provider}`);
  };

  return (
    <div className={`container d-flex justify-content-center align-items-center ${styles.container}`}>
      
      {/* Bolas de fundo (Ellipses) */}
      <div className={`${styles.backgroundEllipse} ${styles.ellipse1}`}></div>
      <div className={`${styles.backgroundEllipse} ${styles.ellipse2}`}></div>
      
      <div className={`${styles.loginContainer} w-100`}>
        <div>
          {/* Imagem no TOPO */}
          <div className={styles.imageContainer}>
            <img
              src={loginImage}  // 
              className={styles.loginImage}
              alt="Imagem ilustrativa de login"
            />
          </div>

          {/* Formulário de Login */}
          <div className="card-body p-4 p-md-5">
            <form id="loginForm" noValidate onSubmit={handleSubmit}>
              {/* Campo Email */}
              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-control" 
                  required
                  placeholder="Digite seu e-mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="invalid-feedback">
                  Por favor, insira um e-mail válido.
                </div>
              </div>
              
              {/* Campo Senha */}
              <div className="mb-3">
                <label className="form-label" htmlFor="password">Senha</label>
                <input 
                  type="password" 
                  id="password" 
                  className="form-control" 
                  required
                  placeholder="Digite sua senha..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="invalid-feedback">
                  Por favor, insira sua senha.
                </div>
              </div>
              
              {/* Esqueci a senha */}
              <div className="d-flex justify-content-end mb-4">
                <a href="#!" className="text-decoration-none">Esqueci minha senha</a>
              </div>
              
              {/* Botão de Entrar */}
              <button type="submit" className={`btn ${styles.bgButton} w-100 py-2 mb-3`}>
                Entrar
              </button>
              
              {/* Botão de Cadastro */}
              <button 
                type="button" 
                className={`btn ${styles.bgButton2} w-100 py-2 mb-4`}
                onClick={handleCadastro}
              >
                Cadastrar
              </button>
              
              {/* Divisor */}
              <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1" />
                <span className="px-2 text-muted">ou</span>
                <hr className="flex-grow-1" />
              </div>
              
              {/* Login com Redes Sociais */}
              <div className={styles.socialLogin}>
                <p className="text-center mb-3">Entrar com:</p>
                <div className="d-flex justify-content-center gap-3">
                  <button 
                    type="button" 
                    className={`btn ${styles.btnSocial} ${styles.google}`}
                    onClick={() => handleSocialLogin('Google')}
                  >
                    <i className="bi bi-google"></i> Google
                  </button>
                  <button 
                    type="button" 
                    className={`btn ${styles.btnSocial} ${styles.facebook}`}
                    onClick={() => handleSocialLogin('Facebook')}
                  >
                    <i className="bi bi-facebook"></i> Facebook
                  </button>
                  <button 
                    type="button" 
                    className={`btn ${styles.btnSocial} ${styles.apple}`}
                    onClick={() => handleSocialLogin('Apple')}
                  >
                    <i className="bi bi-apple"></i> Apple
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;