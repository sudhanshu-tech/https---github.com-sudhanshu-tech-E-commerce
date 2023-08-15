import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Slider from "./components/Slider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";




function App() {
  const user="true";
 
  return(
    <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/products"><ProductList/></Route>
        <Route path="/product"><Product /></Route>
        <Route path="/cart"><Cart /></Route>

        <Route path="/login">
          {user ? <Redirect to="/" /> :<Login/>}
          <Login /></Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> :<Register/>}
          <Register /></Route>
        <Route path="/slider"><Slider /></Route>
      </Switch>
    </Router>
  )
}

export default App;
