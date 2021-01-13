import Nav from "./components/Nav";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Menu from "./components/pages/Menu";
import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
