import { Outlet } from 'react-router';
import './App.css';

function App() {
  return (
    <div className="App">
      Main page
      <Outlet />
    </div>
  );
}

export default App;
