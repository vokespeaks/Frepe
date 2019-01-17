import React, { Component } from 'react';
import './App.css';
import './frepe.js'
import Navbar from './components/navbar'
import Banner from './components/banner'
import About from './components/about'
import Work from './components/work'
import Contact from './components/contact'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (

      <React.Fragment>
        <Navbar />
        <Banner />
        <About />
        <Work />
        <Contact />
        <Footer />
      </React.Fragment>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
