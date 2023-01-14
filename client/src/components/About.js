import React, { useEffect, useState, useRef } from 'react';
import '../css/portfolio.scss';
import portrait from '../images/portrait1.jpg';

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
          <p className='aboutMeText'>My journey with coding began in 2018 (if you don't count Myspace) when I enrolled in Hackbright Academy's Software Engineering course. Many sprints later, I've squashed countless bugs, and contributed to major launches for Fortune 500's and start-ups alike.</p>
        </div>
        <img className='portrait' src={portrait} alt='portrait' />
      </div>
    </div>
    </div>
  );
};