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
        <img className="portrait" src={portrait} alt="portrait" />
        <div className="aboutMe">
          <p className="aboutMeText">Hi, I'm Cierra! I have over 3 years experience in Web, iOS and Android development.  </p>
          <p className='aboutMeText'> I've worked at <a className='link' href='hbomax.com'>HBO MAX</a>, and previously at <a className='link' href='grokker.com'> Grokker.</a> </p>
          <a className='resumeButton' download='resume' href={Resume} rel="noreferrer" target='_blank'>DOWNLOAD RESUME</a>
        </div>
      </div>
    </div>
    </div>
  );
};