import React, { Component } from 'react';
import './styles/themes/_app.sass';
import './styles/themes/_htmltags.sass';
import './styles/themes/_animations.sass';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Employment from "./components/Employment/Employment";

class App extends Component {
  constructor(){
    super();
    this.state = {
        home: false,
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
                        <About/>,
                        <Projects/>,
                        <Employment/>,
                    ]
                )}
            </div>
      );
  }


}

export default App;
