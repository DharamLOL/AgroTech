import React, { useState } from 'react';
import Header from '../components/Header';
import styles from '../css/Doar.module.css';

function Doar() {
  // NOVO: Estado para controlar a etapa do formulário
  const [step, setStep] = useState(1); 
  
  const [tipoDoador, setTipoDoador] = useState('Pessoa física');
  
  // ALTERADO: formData agora inclui os campos da etapa 2
  const [formData, setFormData] = useState({
    // Etapa 1
    nome: '',
    cpfCnpj: '',
    email: '',
    telefone: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    // Etapa 2
    valorDoado: '',
    meioPagamento: 'Pix' // Valor padrão
  });
  
  const tiposDeDoador = ['Pessoa física', 'Empresa', 'Supermercado', 'HortiFruit', 'Outro'];
  // NOVO: Opções da Etapa 2
  const meiosDePagamento = ['Cartão de Crédito', 'Débito', 'Pix'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleTipoDoadorChange = (novoTipo) => {
    setTipoDoador(novoTipo);
    setFormData(prevData => ({ ...prevData, cpfCnpj: '' }));
  };

  // NOVO: Funções para navegar entre as etapas
  const handleProximo = () => {
    // Você pode adicionar validação aqui antes de avançar
    setStep(step + 1);
  };

  const handleVoltar = () => {
    setStep(step - 1);
  };

  // NOVO: Função para o envio final do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você enviaria todos os dados (formData) para sua API/backend
    console.log("Dados finais da doação:", formData);
    alert('Doação registrada com sucesso!');
    // Opcional: Redirecionar ou limpar o formulário
    setStep(1);
    setFormData({
        nome: '', cpfCnpj: '', email: '', telefone: '', cep: '',
        rua: '', numero: '', bairro: '', valorDoado: '', meioPagamento: 'Pix'
    });
  };


  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <aside className={styles.infoBox}>
          <h2>Faça a diferença hoje!!</h2>
          <p>Doe alimentos e ajude a combater a fome e o desperdício.</p>
          <p>Cada doação conta.</p>
          <p>Juntos podemos alimentar mais famílias.</p>
        </aside>

        <div className={styles.formContainer}>
          <h1>Quero doar</h1>
          
          {/* ALTERADO: O formulário agora usa o handleSubmit final */}
          <form onSubmit={handleSubmit}>

            {/* --- ETAPA 1: DADOS DO DOADOR --- */}
            {step === 1 && (
              <>
                <section className={styles.formSection}>
                  <label className={styles.sectionLabel}>Tipo de doador</label>
                  <div className={styles.buttonGroup}>
                    {tiposDeDoador.map((tipo) => (
                      <button
                        key={tipo}
                        type="button"
                        className={tipo === tipoDoador ? styles.activeButton : styles.typeButton}
                        onClick={() => handleTipoDoadorChange(tipo)}
                      >
                        {tipo}
                      </button>
                    ))}
                  </div>
                </section>

                <div className={styles.formGrid}>
                  <section className={styles.formSection}>
                    <label className={styles.sectionLabel}>Dados de contato</label>
                    <div className={styles.inputGroup}>
                      <label htmlFor="nome">Nome ou razão social</label>
                      <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="cpfCnpj">
                        {tipoDoador === 'Pessoa física' ? 'CPF' : 'CNPJ'}
                      </label>
                      <input
                        type="text"
                        id="cpfCnpj"
                        name="cpfCnpj"
                        value={formData.cpfCnpj}
                        onChange={handleChange}
                        placeholder={tipoDoador === 'Pessoa física' ? '000.000.000-00' : '00.000.000/0000-00'}
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="telefone">Telefone</label>
                      <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} />
                    </div>
                  </section>

                  <section className={styles.formSection}>
                    <label className={styles.sectionLabel}>Endereço</label>
                    <div className={styles.inputGroup}>
                        <label htmlFor="cep">CEP</label>
                        <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="rua">Rua / Avenida</label>
                        <input type="text" id="rua" name="rua" value={formData.rua} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="numero">Número</label>
                        <input type="text" id="numero" name="numero" value={formData.numero} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="bairro">Bairro / Cidade</label>
                        <input type="text" id="bairro" name="bairro" value={formData.bairro} onChange={handleChange} required />
                    </div>
                  </section>
                </div>
              </>
            )}

            {/* --- ETAPA 2: VALOR E PAGAMENTO (NOVO) --- */}
            {step === 2 && (
              <>
                <section className={styles.formSection}>
                  <label className={styles.sectionLabel}>Valor da Doação</label>
                  <div className={styles.inputGroup}>
                    <label htmlFor="valorDoado">Valor (R$)</label>
                    <input
                      type="number"
                      id="valorDoado"
                      name="valorDoado"
                      value={formData.valorDoado}
                      onChange={handleChange}
                      placeholder="50,00"
                      min="1"
                      required
                    />
                  </div>
                </section>

                <section className={styles.formSection}>
                  <label className={styles.sectionLabel}>Meio de Pagamento</label>
                  <div className={styles.buttonGroup}>
                    {meiosDePagamento.map((metodo) => (
                      <button
                        key={metodo}
                        type="button"
                        className={metodo === formData.meioPagamento ? styles.activeButton : styles.typeButton}
                        onClick={() => setFormData(prev => ({ ...prev, meioPagamento: metodo }))}
                      >
                        {metodo}
                      </button>
                    ))}
                  </div>
                  
                  {/* Opcional: Mostrar QR Code do Pix */}
                  {formData.meioPagamento === 'Pix' && (
                    <div className={styles.pixContainer}>
                      <p>Escaneie o QR Code para pagar:</p>
                      {/* Lembre-se de substituir pela sua imagem de QR Code real */}
                      <img src="https://via.placeholder.com/200x200.png?text=Seu+QR+Code+Pix" alt="QR Code Pix" />
                      <p><strong>Chave Pix:</strong> seu-email@dominio.com</p>
                    </div>
                  )}
                  {/* Você pode adicionar campos de Cartão de Crédito/Débito aqui da mesma forma */}

                </section>
              </>
            )}

            {/* --- BOTÕES DE NAVEGAÇÃO (ALTERADO) --- */}
            <div className={styles.actionButtons}>
              
              {/* Só mostra VOLTAR se não estiver na primeira etapa */}
              {step > 1 && (
                <button type="button" className={styles.btnVoltar} onClick={handleVoltar}>
                  VOLTAR
                </button>
              )}
              
              {/* Mostra PRÓXIMO apenas na etapa 1 */}
              {step === 1 && (
                <button type="button" className={styles.btnProximo} onClick={handleProximo}>
                  PRÓXIMO
                </button>
              )}

              {/* Mostra CONCLUIR na última etapa (tipo submit) */}
              {step === 2 && (
                <button type="submit" className={styles.btnProximo}>
                  CONCLUIR DOAÇÃO
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Doar;