import Header from './Components/Header';
import Slidenav from './Components/Slidenav';
import Resumo from './Pages/Resumo';
import './Style.css';

const App = () => {
  return (
    <div>
      <Slidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </div>
  );
};

export default App;
