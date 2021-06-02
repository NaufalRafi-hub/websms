// import './App.css';
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        {/* <Route path="/aboutus" component={SigninPage} exact/> */}
      </Switch>
    </Router>
  );
}

export default App;