import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//components
import Header from "./modules/header";
import Footer from "./modules/footer";
import Background from "./modules/background";
import Homepage from "./modules/homepage";
import About from "./modules/about";
import Education from "./modules/education";
import Technology from "./modules/technology";
import Work from "./modules/work";
import Contact from "./modules/contact";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/edu' component={Education} />
            <Route exact path='/tech' component={Technology} />
            <Route exact path='/work' component={Work} />
            <Route exact path='/contact' component={Contact} />
          <Background />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
