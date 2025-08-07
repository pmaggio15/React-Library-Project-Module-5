import './index.css';
import Nav from './componets/Nav'
import Landing from './componets/Landing';
import Highlights from './componets/Highlights';
import Highlight from './componets/ui/Highlight';
import Featured from './componets/Featured'

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  );
}

export default App;
