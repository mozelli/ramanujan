import { useEffect } from 'react';
import M from 'materialize-css';
import Router from './Router';

function App() {
  useEffect(() => {
    M.AutoInit()
  }, [])

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
