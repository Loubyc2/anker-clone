import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Account from './components/account/Account';
import Footer from './components/footer/Footer';

import Header from './components/header/Header';
// import HeaderMenu from './components/header/HeaderMenu';
import Home from './components/home/Home';

function NotFound() {
  return (
    <h1>Not found page</h1>
  )
}

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>

      <Switch>
        {/* <Route exact path='/header-menu' component={HeaderMenu} /> */}
        <Route exact path='/' component={Home} />
        <Route exact path='/account' component={Account} />
        <Route component={NotFound} />
      </Switch>

      <footer >
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
