// import './App.css';
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import Home from './pages/home';
// import Aboutus from './pages/signin';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Navbar /> */}
        {/* <Route path="/" component={Navbar} exact/> */}
        <Route path="/" component={Home} exact/>
        {/* <Route path="/aboutus" component={SigninPage} exact/> */}
      </Switch>
    </Router>
  );
}

export default App;
