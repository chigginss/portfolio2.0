import React, {useState, useEffect} from 'react';
import About from './About.js';
import Experience from './Experience.js';
import Header from './Header.js';
import Contact from './Contact.js';
import './portfolio.scss';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    if (!isVisible && scrollTop > 0) {
      setIsVisible(true);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [isVisible, scrollTop]);

  return (
      <div className='content'>
        <Header/>
          <div className='welcomeTextContainer'>
            <div className='welcomeText'>
                <div className='hugeTitle lineUp'>My name is</div>
                <div className='displayTitle lineUp'> Cierra Higgins</div>
                <div className='hugeTitle lineUp'>I'm a Full Stack Software Engineer.</div>
                <a className='ctaText' href="#about">GET TO KNOW ME</a>
            </div>
          </div>
          <div className={`container ${isVisible ? 'visible' : 'notVisible'}`}>
            <div className='mainSection'>
              <About/>
              <Experience/>
              <Contact />
              <span className='footerText'>Designed and built by Cierra Higgins in 2023.</span>
            </div>
        </div>
    </div>
  );
}
 