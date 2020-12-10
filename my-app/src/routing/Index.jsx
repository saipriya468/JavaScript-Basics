  import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Services from './services';
import Home from './home';
import Contact from '../form/contact';
function Index(){
    return(
    <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Priya's</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item">

      <li> <Link to="/home">Home</Link></li>
</li>
<br/>
      <li class="nav-item">
      <li>  < Link to="/services">Services</Link></li>
      </li>
      <li class="nav-item">
      <li><Link  to="/contact">Contact</Link></li>

      </li>
    </ul>
  </div>
</nav>

    <Switch>
        <Route exact path="/Services">
<Services/>
        </Route>
        <Route exact path="/Home">
            <Home/>
</Route>
<Route exact pah="/Contact">
    <Contact/>
</Route>
</Switch>
            </Router>
    );
};
export default Index;  