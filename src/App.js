import { useEffect } from 'react';
import M from 'materialize-css';
import Router from './Router';

function App() {
  useEffect(() => {
    M.AutoInit()
    var elems = document.querySelectorAll('.chips');
    M.Chips.init(elems);
  }, [])

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
