import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css/bundle";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import Cart from './Components/Cart/Cart';
import Error from './Components/Error/Error';


function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>

          </Route>
          <Route path='/register'>
            <Register></Register>

          </Route>
          <Route path='/cart'>
            <Cart></Cart>

          </Route>
          <Route path='*'>
            <Error></Error>

          </Route>


        </Switch>

      </Router>

    </>
  );
}

export default App;
