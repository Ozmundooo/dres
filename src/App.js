import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './helpers/ScrollToTop';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './partials/_common.scss';
import SService from './Pages/SService/SService';
import IService from './Pages/IService/IService';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/specialtyservices' component={SService} />
        <Route path='/inshopservices' component={IService} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
