import React, { useState } from 'react';
import styles from '../css/FaleConosco.module.css';

function FaleConosco() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const [erros, setErros] = useState({});

  const handleCancelar = () => {
    setNome('');
    setSobrenome('');
    setEmail('');
    setTipo('');
    setDescricao('');
    setMensagemSucesso('');
    setErros({});
  };

  const handleEnviar = (e) => {
    e.preventDefault();
    const novosErros = {};
    if (!nome.trim()) novosErros.nome = 'Por favor, preencha o nome.';
    if (!sobrenome.trim()) novosErros.sobrenome = 'Por favor, preencha o sobrenome.';
    if (!email.trim()) novosErros.email = 'Por favor, preencha o e-mail.';
    if (!tipo.trim()) novosErros.tipo = 'Por favor, selecione o tipo de comentário.';
    if (!descricao.trim()) novosErros.descricao = 'Por favor, preencha a descrição.';
    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      setMensagemSucesso('GreenSafe agradece o seu contato! Mensagem enviada com sucesso!');
      setNome('');
      setSobrenome('');
      setEmail('');
      setTipo('');
      setDescricao('');
    } else {
      setMensagemSucesso('');
    }
  };

  return (
    
    <div className={styles.containerFormulario}>
      
      <h1 className={styles.titulo}>FALE CONOSCO</h1>
      <form className={styles.formulario} onSubmit={handleEnviar}>

        {/* Nome */}
        <div className={styles.campo}>
          <label className={styles.label} htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className={styles.input}
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {erros.nome && <span className={styles.erro}>{erros.nome}</span>}
        </div>

        {/* Sobrenome */}
        <div className={styles.campo}>
          <label className={styles.label} htmlFor="sobrenome">Sobrenome:</label>
          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            className={styles.input}
            placeholder="Digite seu sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
          {erros.sobrenome && <span className={styles.erro}>{erros.sobrenome}</span>}
        </div>

        {/* E-mail */}
        <div className={styles.campo}>
          <label className={styles.label} htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {erros.email && <span className={styles.erro}>{erros.email}</span>}
        </div>

        {/* Tipo de comentário */}
        <div className={styles.campo}>
          <span className={styles.label}>Tipo de comentário:</span>
          <div className={styles.botoesTipo}>
            <button
              type="button"
              className={`${styles.botaoTipo} ${tipo === 'tecnico' ? styles.selecionado : ''}`}
              onClick={() => setTipo('tecnico')}
            >
              Técnico
            </button>
            <button
              type="button"
              className={`${styles.botaoTipo} ${tipo === 'reclamacao' ? styles.selecionado : ''}`}
              onClick={() => setTipo('reclamacao')}
            >
              Reclamação
            </button>
            <button
              type="button"
              className={`${styles.botaoTipo} ${tipo === 'informacao' ? styles.selecionado : ''}`}
              onClick={() => setTipo('informacao')}
            >
              Informação
            </button>
            <button
              type="button"
              className={`${styles.botaoTipo} ${tipo === 'outro' ? styles.selecionado : ''}`}
              onClick={() => setTipo('outro')}
            >
              Outro
            </button>
          </div>
          {erros.tipo && <span className={styles.erro}>{erros.tipo}</span>}
        </div>

        {/* Descrição */}
        <div className={styles.campo}>
          <label className={styles.label} htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            name="descricao"
            className={styles.textarea}
            placeholder="Escreva sua mensagem aqui..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          {erros.descricao && <span className={styles.erro}>{erros.descricao}</span>}
        </div>

        {/* Botões */}
        <div className={styles.botoesAcao}>
          <button type="button" className={styles.botaoAcao} onClick={handleCancelar}>Cancelar</button>
          <button type="submit" className={styles.botaoAcao}>Enviar</button>
        </div>

        {/* Mensagem de sucesso */}
        {mensagemSucesso && (
          <div className={styles.mensagemSucesso}>{mensagemSucesso}</div>
        )}
      </form>
    </div>
  );
}

export default FaleConosco;
