
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherApp from "./pages/WeatherApp"
// import Navbar from "../src/components/Navbar"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "../src/loginContainers/SignUpPage"
import Dashboard from "../src/loginComponents/Dashboard"


// class App extends Component {
// render() {
//   return (
//     <div className="App">
//     <WeatherApp />
//     </div>
//   );
// }
// }

const App = () => (

  // <Navbar>

  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={WeatherApp} />
        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/signup" component={SignUpPage} />
        <Route exat path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>


);
export default App;
