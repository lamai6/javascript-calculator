import Calculator from '../Calculator/Calculator';
import './App.styles.scss';

function App() {
  localStorage.setItem('project_selector', 'javascript-calculator');

  return (
    <div id="container">
      <Calculator />
    </div>
  );
}

export default App;
