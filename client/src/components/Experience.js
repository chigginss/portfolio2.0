import React, { useEffect, useState, useRef } from 'react';
import '../css/portfolio.scss';
import Resume from '../content/CierraHigginsResume.pdf';

export default function Experience() {

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
    <div id='experience' className={`experience visible fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      <div className='leftTitle'>Experience</div>
      <p className='aboutMeText'> I have 3+ years experience in Web, iOS and Android development. Recently, I worked at <a className='link' href="https://hbomax.com" target="_blank" rel="noreferrer">HBO Max</a> and previously at <a className='link' href="https://grokker.com" target="_blank" rel="noreferrer">Grokker.</a></p>
      <p className='aboutMeText'> I primarily work with JavaScript (React and React Native), Typescript, and MongoDB. </p>
      <div className='resumeButtonContainer'>
          <a className='resumeButton' download='resume' href={Resume} rel="noreferrer" target='_blank'> DOWNLOAD RESUME</a>
      </div>
    </div>
  );
}