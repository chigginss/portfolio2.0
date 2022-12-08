import React from 'react';
import '../css/portfolio.scss';
import LinkedInIcon from '../icons/LinkedInIcon.js';
import GitHubIcon from '../icons/GitHubIcon.js';
import MailIcon from '../icons/MailIcon.js';

export default function Contact() {

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
    <div className={`contact fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      <div className="contactContent">
        <div id="contact">
            <h1 className="centerTitleDark">Let's Chat!</h1>
            <p className="aboutMeText">I'm currently looking for new opportunities, in New Zealand, the US and everywhere in-between.</p>
        </div>
      </div>
      <div className="socialIcons" >
        <a href='https://github.com/chigginss'>
            <GitHubIcon className={"darkIcon"} />
        </a>
        <a href='https://www.linkedin.com/in/cierra-m-higgins/'>
            <LinkedInIcon className={"darkIcon"} />
        </a>
        <a href="mailto:cierramhiggins@gmail.com">
            <MailIcon className={"darkIcon"} />
        </a>
      </div>
    </div>
  );

}
