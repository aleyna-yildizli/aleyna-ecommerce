import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Footer from './layouts/Footer';
import Header from './layouts/Header'
import ProductPage from './pages/ProductPage';

import './App.css'


function App() {


  return (
    <div className='w-full'>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shop" exact>
          <Shop />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/team" exact>
          <Team />
        </Route>
        <Route path="/productdetail" exact>
          <ProductPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
