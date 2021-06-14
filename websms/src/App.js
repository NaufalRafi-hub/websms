// import './App.css';
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import aboutus from './pages/aboutus';
import Home from './pages/home';
import Error from './Components/ErrorPageComp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/aboutus" component={aboutus} />
        <Route component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
