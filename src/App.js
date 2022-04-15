import Listing from './ListItem';
import './App.css';
import data from './data/etsy.json'

function App() {
  return (
    <Listing items={data} />
  );
}

export default App;
