import Header from './Components/Header';
import Slidenav from './Components/Slidenav';
import { DataContextProvider } from './Context/DataContext';
import Resumo from './Pages/Resumo';
import './Style.css';

const App = () => {
  return (
    <DataContextProvider>
      <div className="container">
        <Slidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
};

export default App;
