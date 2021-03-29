import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/footer/Footer';

import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <Switch>
        <Route component={Home} />
      </Switch>
      <footer >
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
