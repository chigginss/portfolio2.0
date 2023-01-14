import React from 'react';
import '../css/portfolio.scss';
import portrait from '../images/portrait1.jpg';

export default function About() {

  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div id={'about'}>
    <div className={`about fade-in-section-about ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      <div className='aboutMeContainer'>
        <div className='aboutMe'>
          <div className='leftTitle'>About</div>
          <p className='aboutMeText'>Hi, I'm Cierra!  A couple months ago, I moved to New Zealand from the US.</p>
        </div>
        <img className='portrait' src={portrait} alt='portrait' />
      </div>
    </div>
    </div>
  );
};