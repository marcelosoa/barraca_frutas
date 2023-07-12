import React, { useState } from 'react';

export function App(props) {
  const [data, setData] = useState({});
  const [step, setStep] = useState(0);

  const contents = [
    <div>
      Passo 1: Digite seu CPF
      <input
        value={data.cpf || ""}
        onChange={e => setData({
        ...data,
        cpf: e.target.value
      })} />
    </div>,
    <div>
      Passo 2: Digite seu telefone
      <input
        value={data.phone || ""}
        onChange={e => setData({
        ...data,
        phone: e.target.value
      })} />
    </div>,
    <div>
      Passo 3: Sua info
      CPF: {data.cpf}
      Telefone: {data.phone}
    </div>
  ];

  return (
    <div className='App'>
      {Array(step + 1).fill(null).map((_, index) => (
        <span key={index} onClick={() => setStep(index)} >
          {index + 1}
          {index < step && <span>{`>`}</span>}
        </span>
      ))}
      <h1>Olá celin</h1>
      {contents[step]}

      {step < 2 && <button onClick={() => setStep(step + 1)}>Proximo</button>}
    </div>
  );
}