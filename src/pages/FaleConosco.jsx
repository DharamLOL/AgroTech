import React, {userState} from 'react';
import '../css/FaleConosco.css';

function FaleConosco ()  {
    // Definição dos campos do formulário
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [tipoComentario, setTipoComentario] = useStete('informacao');
    const [descricao, setDescricao] = useState('');
    const [erro, setErro] = useState('');

     // Função para tratar o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validações simples
    if (!nome || !sobrenome || !email) {
      setErro('Todos os campos são obrigatórios!');
      return;
    }

    // Validação de e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErro('Por favor, insira um e-mail válido.');
      return;
    }

    // Se tudo estiver certo, pode enviar o formulário (aqui só vamos imprimir no console)
    setErro('');
    console.log('Formulário enviado com sucesso!');
    console.log({ nome, sobrenome, email, mensagem });

    // Limpar campos após envio (opcional)
    setNome('');
    setSobrenome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <div>
      <h2>Fale Conosco</h2>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>
        <div>
          <label>Sobrenome:</label>
          <input
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="Digite seu sobrenome"
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </div>
        <div>
          <label>Mensagem:</label>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Escreva sua mensagem aqui"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FaleConosco;