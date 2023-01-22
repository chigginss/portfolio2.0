import React, { useEffect, useState, useRef } from 'react';
import './portfolio.scss';
import portrait from './images/portrait1.jpg';

export default function About() {

  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const current = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div id={'about'}>
    <div className={`about fade-in-section-about ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      <div className='aboutMeContainer'>
        <div className='aboutMe'>
          <div className='leftTitle'>About</div>
          <p className='aboutMeText'>Hi, I'm Cierra! I might be the only SWE with an English Degree.</p>
          <p className='aboutMeText'>My journey as an engineer began in 2018 (if you don't count Myspace) when I enrolled in <a className="link" target="_blank" rel="noreferrer" href="https://hackbrightacademy.com">Hackbright Academy's</a> Software Engineering course. 
          Many sprints later, I've contributed to major launches for Fortune 500's and startups alike.</p>
        </div>
        <img className='portrait' src={portrait} alt='portrait' />
      </div>
    </div>
    </div>
  );
};