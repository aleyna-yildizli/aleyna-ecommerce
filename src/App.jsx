import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './layouts/Header'
import Home from './pages/Home'


import './App.css'

function App() {


  return (
    <div>
      <Header /> 
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
