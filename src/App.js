import React, { Component } from 'react';
import './styles/globals/_htmltags.sass';
import './styles/globals/_animations.sass';
import './styles/themes/_app.sass';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Employment from "./components/Employment/Employment";
import Contact from "./components/Contact";

class App extends Component {
  constructor(){
    super();
    this.state = {
        home: false,
    };
  }

  backToHome = () => {
      this.setState({
          home: true,
      });
  };

  switchHome = () => {
      this.setState({
          home: false,
      });
  };

  render() {
      const home = this.state.home;
      return (
            <div className="App">
                <Navbar home={this.state.home} switchHome={this.switchHome} backToHome={this.backToHome}/>
                <Sidebar />
                {home ? (
                    <Home updateContent={this.switchHome}/>
                ) : (
                    [
                        <About key={"about"}/>,
                        <Projects key={"projects"}/>,
                        <Employment key={"employment"}/>,
                        <Contact key={"contact"}/>
                    ]
                )}
            </div>
      );
  }
}
{/*<Employment key={"employment"}/>,*/}
{/**/}
export default App;
