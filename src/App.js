//import './App.css';
import Home from "./Containers/FirstPage/SiteLayout";
import Second from "./Containers/SecondPage/index"
import Header from './Components/Header/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/Second' component={Second} />
        </Router>
      </header>
    </div>
  );
}

export default App;
