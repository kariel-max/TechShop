// src/components/CepInput.tsx
import { useState } from 'react';

export default function CepInput() {
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');

  const buscarCidade = async () => {
    const cepLimpo = cep.replace(/\D/g, '');
    if (cepLimpo.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setCidade(data.localidade);
        } else {
          setCidade('');
          alert('CEP não encontrado.');
        }
      } catch {
        alert('Erro ao buscar o CEP.');
      }
    }
  };

  return (
    <div>
      <label>CEP:</label>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        onBlur={buscarCidade}
        placeholder="Digite seu CEP"
      />
      <label>Cidade:</label>
      <input type="text" value={cidade} readOnly placeholder="Cidade aparecerá aqui" />
    </div>
  );
}
