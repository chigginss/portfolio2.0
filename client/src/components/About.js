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
      <div className="aboutMeContainer">
        <img className="portrait" src={portrait} alt="portrait" />
        <div className="aboutMe">
          <div className="leftTitle">Hi! I'm Cierra</div>
          <p className="aboutMeText">I'm a Software Engineer and enjoy creating highly responsive applications and websites.</p>
          <p className="aboutMeText">I recently packed up my life in America, travelled around Asia, and settled in New Zealand.</p>
          <p className="aboutMeText">When I'm not coding, I love hiking, going to the beach, playing video games and working on photo and video projects. </p>
        </div>
      </div>
    </div>
    </div>
  );
};