import React from 'react';
import '../css/portfolio.scss';
import portrait from '../images/portrait1.jpg';
import Resume from '../content/CierraHigginsResume.pdf';

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
      <div className="aboutMeContainer">
        <div className="aboutMe">
          <div className='leftTitle'>About</div>
          <p className="aboutMeText">Hi, I'm Cierra! I have over 3 years experience in Web, iOS and Android development.  </p>
          <p className='aboutMeText'> I previously worked at <a className='link' href='hbomax.com'>HBO MAX</a>, and <a className='link' href='grokker.com'> Grokker.</a> </p>
          <p className='aboutMeText'> A couple months ago, I quit my job, packed up my life, and moveed from the US to New Zealand.</p>
          <a className='resumeButton' download='resume' href={Resume} rel="noreferrer" target='_blank'> DOWNLOAD RESUME</a>
        </div>
        <img className="portrait" src={portrait} alt="portrait" />
      </div>
    </div>
    </div>
  );
};