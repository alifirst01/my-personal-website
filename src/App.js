import React, { Component } from 'react';
import './styles/themes/_app.sass';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects/Projects";

class App extends Component {
  constructor(){
    super();
    this.state = {
        home: true,
    };
  }

  switchHome = () => {
      this.setState({
          home: !this.state.home,
      })
  };

  render() {
      const home = this.state.home;
      return (
            <div className="App">
                <Navbar/>
                <Sidebar />
                {home ? (
                    <Home updateContent={this.switchHome}/>
                ) : (
                    [
                        <About />,
                        <Projects />
                    ]
                )}
            </div>
      );
  }


}

export default App;
