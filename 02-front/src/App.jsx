import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
// components
import Work from './components/Work/Work';

function App() {
  // state
  const work = useRef(null)
  const executeScroll = (event) => {
    // event.preventDefault()
    console.log("executeScroll")
    work.current.scrollIntoView({behavior: "smooth"})
  } 
  // comportements
  // render
  return (
    <div className="App">
      <header className="App-header">
      <nav>
          <ul>
            <li><a href="/" onClick ={executeScroll} >Home</a></li>
            <li><a href="/work">Work Experience</a></li><button onClick={executeScroll}>Work Experience</button>
            <li><a href="/projects">Projects</a> </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>  
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, I'm <span className="name">Hugo</span></h1>
        <h2>Full Stack Web Developer</h2>
      {/* Work Experience */}
      <Work />
      <section className="work">
    
      </section>
      {/* Projects */}
      <section className="projects">
      <br />
        <h2>Projects</h2>
      <br />
        <div className="projects-container">
          <div className="projects-item">
            <ul>
              <li>Project: <span className="project">Project</span></li>
              <li>Technologies: <span className="technologies">Technologies</span></li>
              <li>Start Date: <span className="start-date">Start Date</span></li>
              <li>End Date: <span className="end-date">End Date</span></li>
            </ul>
            <br />
            <ul>
              <li>Project: <span className="project">Project</span></li>
              <li>Technologies: <span className="technologies">Technologies</span></li>
              <li>Start Date: <span className="start-date">Start Date</span></li>
              <li>End Date: <span className="end-date">End Date</span></li>
            </ul>
            <ul>
              <li>Project: <span className="project">Project</span></li>
              <li>Technologies: <span className="technologies">Technologies</span></li>
              <li>Start Date: <span className="start-date">Start Date</span></li>
              <li>End Date: <span className="end-date">End Date</span></li>
            </ul>
            <br />
            <ul>
              <li>Project: <span className="project">Project</span></li>
              <li>Technologies: <span className="technologies">Technologies</span></li>
              <li>Start Date: <span className="start-date">Start Date</span></li>
              <li>End Date: <span className="end-date">End Date</span></li>
            </ul>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section className="contact">
      <br />
        <h2 ref={work}>Contact</h2>
      <br />
        <div className="contact-container">
          <div className="contact-item">
            <ul>
              <li>Email: <span className="email">Email</span></li>
              <li>Phone: <span className="phone">Phone</span></li>
              <li>LinkedIn: <span className="linkedin">LinkedIn</span></li>
              <li>GitHub: <span className="github">GitHub</span></li>
            </ul>
          </div>
        </div>
      </section>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </header>
    </div>
  );
}

export default App;
