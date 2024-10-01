import { useState } from 'react';
import styles from './App.module.css';

function App() {
  // Corrigir o estado inicial para um array vazio
  const [listItens, setListItens] = useState([]); 
  const [inputItem, setInputItem] = useState(''); // Adicionar estado para o input

  const handleChangeValue = (e) => {
    setInputItem(e.target.value); // Atualiza o inputItem
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar se o input não está vazio antes de adicionar
    if (inputItem.trim() === '') return; 
    setListItens([...listItens, inputItem]); // Adiciona o novo item à lista
    setInputItem(''); // Limpa o input após adicionar
  }

  return (
    <div className="container">
      <div className={styles.containerInput}>
        <h1 className="title">Crie sua lista de compras abaixo</h1>
        <p className="descricao">Insira no campo abaixo, seus itens de compras</p>
        <form action="#" method="POST" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="inputItens" 
            id="inputItens" 
            value={inputItem} // Controlar input com o estado correto
            onChange={handleChangeValue} 
            placeholder='Insira seu item aqui' 
            autoComplete='off' 
            required 
          />
          <button type="submit">Adicionar</button>
        </form>
      </div>
      <div className={styles.containerList}>
      {listItens.length > 0 ? (
        <span><strong>Sua lista</strong></span>
      ) : (
        <span></span>
      )}
        <ul>
          {listItens.map((item, index) => (
            <li key={index}>{item}</li> // Renderiza cada item da lista
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;