import Calculator from '../Calculator/Calculator';
import GitHub from '../GitHub/GitHub';
import './App.styles.scss';

function App() {
  localStorage.setItem('project_selector', 'javascript-calculator');

  return (
    <div id="container">
      <Calculator />
      <GitHub />
    </div>
  );
}

export default App;
