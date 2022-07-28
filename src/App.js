import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Smartscan';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Terms from './components/pages/Terms';
import { Helmet } from 'react-helmet';


function App() {
  
  return (
    <>
     <div className="App">
      <Helmet>
        <title>CERTiFi: The Leader in Blockchain Security</title>
        <meta name="description" content="CERTiFi conducts smart contract and front-end audits in order to enhance the security of your token." />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
    </div>
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/terms' component={Terms} />
        </Switch>
      </Router>

     
    </>
  );
}

export default App;
