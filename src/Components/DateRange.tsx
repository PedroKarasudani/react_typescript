import { useData } from '../Context/DataContext';
import DateInput from './DateInput';

const DateRange = () => {
  const { inicio, final, setInicio, setFinal } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label={'Início'}
        onChange={({ target }) => setInicio(target.value)}
      />
      {inicio}
      <DateInput
        label={'Final'}
        onChange={({ target }) => setFinal(target.value)}
      />
      {final}
    </form>
  );
};

export default DateRange;
