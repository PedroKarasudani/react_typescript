import Loading from '../Components/Loading';
import { IVenda } from '../Context/DataContext';
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';

type VendaSemData = Omit<IVenda, 'data'>;

const Venda = () => {
  const { id } = useParams();

  const { data, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`,
  );

  if (loading === true) return <Loading />;
  if (data === null) return null;
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{' '}
        {data.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
      {data.parcelas ? (
        <div className="box mb">Parcelas: {data.parcelas} Parcelas</div>
      ) : (
        <div className="box mb">Parcelas: avista</div>
      )}
      <div className="box mb">Status: {data.status}</div>
    </div>
  );
};

export default Venda;
