import React, { Component } from 'react';
// components
import About from './About.js';
import Experience from './Experience.js';
import Header from './Header.js';
import Contact from './Contact.js';
// SCSS
import '../css/portfolio.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      showFooter: false,
      apiResponse: ''
    };
  }

  callAPI() {
      fetch("http://localhost:3000/")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  UNSAFE_componentWillMount() {
      this.callAPI();
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;

        if (currentScrollPos === maxScroll) {
          this.setState({showFooter: true});
        } else if (currentScrollPos < maxScroll + 30) {
          this.setState({showFooter: false});
        }
      }
    }
  }

  render() {
    return (
        <div className="content">
          <Header/>
          <div className="welcomeTextContainer">
            <div className="welcomeText">
                <div className="hugeTitle">BUG CATCHER, ERROR BASHER, WEB BUILDER</div>
            </div>
            <a className="resumeButton" href="#about">DISCOVER MORE</a>
          </div>
          <div className="mainSection fadeIn" styles={{ opacity: `${this.state.opacity}`}}>
            <About/>
            <Experience/>
            <Contact />
          </div>
          <span className="footerText">Designed and built by Cierra Higgins</span>
      </div>
    );
  }
}
 
export default Home;