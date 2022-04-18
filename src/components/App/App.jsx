import Calculator from '../Calculator/Calculator';
import GitHub from '../GitHub/GitHub';
import './App.styles.scss';

function App() {
  localStorage.setItem('project_selector', 'javascript-calculator');
  localStorage.setItem('fCC_javascript-calculator_hide', 'true');
  return (
    <div id="container">
      <Calculator />
      <GitHub />
    </div>
  );
}

export default App;
