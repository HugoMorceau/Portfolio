import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/work">Work Experience</a></li>
            <li><a href="/projects">Projects</a> </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>  
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, I'm <span className="name">Hugo</span></h1>
        <h2>Full Stack Web Developer</h2>
      {/* Work Experience */}
      <section className="work">
      <br />
        <h2>Work Experience</h2>
      <br />
        <div className="work-container">
          <div className="work-item">
            <ul>
              <li>Company: <span className="company">Company</span></li>
              <li>Position: <span className="position">Position</span></li>
              <li>Start Date: <span className="start-date">Start Date</span></li>
              <li>End Date: <span className="end-date">End Date</span></li>
            </ul>
          </div>
        </div>
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
          </div>
        </div>
      </section>
      {/* Contact */}
      <section className="contact">
      <br />
        <h2>Contact</h2>
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
      </header>
    </div>
  );
}

export default App;
