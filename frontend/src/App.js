
import { RouterComponentsProduct } from './components/routes/routerComponentsProducts';
import { RouterComponentsBuyer } from './components/routes/routerComponentsBuyer';
import { RouterComponentsLogin } from './components/routes/routerComponentsLogin';
import { RouterComponentsFeedback } from './components/routes/routerComponentsFeddback';
import './App.css';

function App() {
  return (
    <div className="App">
      <RouterComponentsProduct/>
      <RouterComponentsBuyer/>
      <RouterComponentsLogin/>
      <RouterComponentsFeedback/>
    </div>
  );
}

export default App;
