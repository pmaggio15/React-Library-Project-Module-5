import './index.css';
import Nav from './componets/Nav'
import Landing from './componets/Landing';
import Highlights from './componets/Highlights';
import Highlight from './componets/ui/Highlight';
import Featured from './componets/Featured';
import Discounted from './componets/Discounted';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  );
}

export default App;
