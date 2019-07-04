import React from 'react';
import "./scss/main.scss";
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";
import Layout from "./components/Layout";

import LogIn from "./components/LogIn";
import Register from "./components/Register";
import LogInPage from "./components/LogInPage";
import AboutUs from "./components/AboutUs";
import ContactPage from "./components/ContactPage";
import InfoPage from "./components/InfoPage";





class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (

          <div className="App">
            <HashRouter>
              <Switch>
                <Route exact path="/" component={Layout}/>
                <Route exact path="/log" component={LogIn}/>
                <Route exact path="/register" component={Register}/>
              </Switch>
                <Route  path="/logInpage" component={LogInPage}/>
                <Route  path="/aboutUs" component={AboutUs}/>
                <Route  path="/contact" component={ContactPage}/>
                <Route  path="/info" component={InfoPage}/>




            </HashRouter>
          </div>

    );
  }
}


export default App;
