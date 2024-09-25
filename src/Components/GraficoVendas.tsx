import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { IVenda } from '../Context/DataContext';

const dadosGrafico = [
  { data: '2023-05-03', pago: 3100, processando: 3000, falha: 2000 },
  { data: '2023-05-04', pago: 310, processando: 300, falha: 200 },
  { data: '2023-05-04', pago: 4000, processando: 3900, falha: 2900 },
];

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={dadosGrafico}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pago" stroke="#ff7300" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#117300"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#991100"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
