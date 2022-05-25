import './App.css';
import Navigation from './navigation/Navigation';
import { BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
<Provider store={store}>
    <BrowserRouter>
      <Navigation/>  
    </BrowserRouter>
    </Provider>
  );
}

export default App;
