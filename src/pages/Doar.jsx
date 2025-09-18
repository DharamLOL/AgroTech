import React, { useState } from 'react';
import Header from '../components/Header';
import styles from '../css/Doar.module.css';

function Doar() {
  const [tipoDoador, setTipoDoador] = useState('Pessoa física');
  const [formData, setFormData] = useState({
    nome: '',
    cpfCnpj: '',
    email: '',
    telefone: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: ''
  });
  
  const tiposDeDoador = ['Pessoa física', 'Empresa', 'Supermercado', 'HortiFruit', 'Outro'];

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
          
          <form onSubmit={(e) => e.preventDefault()}>
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
                  <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} />
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
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
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
                    <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange}/>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="rua">Rua / Avenida</label>
                    <input type="text" id="rua" name="rua" value={formData.rua} onChange={handleChange}/>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="numero">Número</label>
                    <input type="text" id="numero" name="numero" value={formData.numero} onChange={handleChange}/>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="bairro">Bairro / Cidade</label>
                    <input type="text" id="bairro" name="bairro" value={formData.bairro} onChange={handleChange}/>
                </div>
              </section>
            </div>

            <div className={styles.actionButtons}>
              <button type="button" className={styles.btnVoltar}>VOLTAR</button>
              <button type="submit" className={styles.btnProximo}>PRÓXIMO</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Doar;