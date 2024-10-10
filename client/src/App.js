import logo from './logo.svg';
import './App.css';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from "./components/Nav"
import Home from "./components/Home"
import Tweet from "./components/Tweet"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          {/* <Tweet/> */}
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/tweets" exact component={Tweet} />
          </Routes>
      </div>
    </Router>

  );
}

export default App;
