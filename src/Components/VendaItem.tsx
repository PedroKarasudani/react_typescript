import React from 'react';
import { IVenda } from '../Context/DataContext';

const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="box venda">
      <a href="" style={{ fontFamily: 'monospace' }}>
        {venda.id}
      </a>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  );
};

export default VendaItem;
