import './App.css'
import * as weatherService from './services/weatherService'

const App = () => {
  const fetchData = async () => {
    const data = await weatherService.show('Boston');
    console.log('Data:', data);
  };

  return (
    <main>
      <h1>Wether API</h1>
      <button onClick={fetchData}>Fetch Weather Data</button>
    </main>
  );
}

export default App
