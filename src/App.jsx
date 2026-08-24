import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">JS<span>.</span></div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </nav>

      <main>
        <section className="hero">
          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

          <div className="hero-content">
            <p className="eyebrow">AI & DATA SCIENCE STUDENT</p>

            <h1>
              JAI
              <br />
              <span>SPOORTHI</span>
            </h1>

            <p className="hero-description">
              Building my skills in Python, AI, Data Science and
              problem-solving while creating projects that make an impact.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Work ↗
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>
          </div>

          <div className="code-card">
            <div className="code-top">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>portfolio.js</span>
            </div>

            <div className="code-body">
              <p>
                <span className="purple">const</span>{" "}
                <span className="green">developer</span> = {"{"}
              </p>

              <p className="indent">
                name: <span className="yellow">"Jai Spoorthi"</span>,
              </p>

              <p className="indent">
                role: <span className="yellow">"AI & DS Student"</span>,
              </p>

              <p className="indent">
                skills: [
              </p>

              <p className="indent-more">
                <span className="yellow">"Python"</span>,
              </p>

              <p className="indent-more">
                <span className="yellow">"SQL"</span>,
              </p>

              <p className="indent-more">
                <span className="yellow">"Machine Learning"</span>
              </p>

              <p className="indent">]</p>

              <p>{"};"}</p>

              <p className="cursor">▮</p>
            </div>
          </div>
        </section>

        <section className="stats">
          <div>
            <strong>02+</strong>
            <span>Years Learning</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Technologies</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Curiosity</span>
          </div>
        </section>

        <section className="about section" id="about">
          <p className="section-label">01 — ABOUT ME</p>

          <h2>
            Turning <span>curiosity</span> into code.
          </h2>

          <p className="section-text">
            I'm a B.Tech CSE student specializing in Artificial Intelligence
            and Data Science. I'm currently focused on strengthening my
            programming, DSA, SQL and machine learning fundamentals.
          </p>
        </section>

        <section className="skills section" id="skills">
          <p className="section-label">02 — SKILLS</p>

          <h2>Things I'm learning.</h2>

          <div className="skill-grid">
            <div className="skill-card">Python</div>
            <div className="skill-card">Java</div>
            <div className="skill-card">SQL</div>
            <div className="skill-card">DSA</div>
            <div className="skill-card">Machine Learning</div>
            <div className="skill-card">React.js</div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <p className="section-label">03 — PROJECTS</p>

          <h2>Selected work.</h2>

          <div className="project-card">
            <div>
              <span className="project-number">01</span>
              <h3>Student Record Management System</h3>
              <p>
                A C programming project using linked lists, sorting and
                searching to manage student records.
              </p>
            </div>

            <span className="project-arrow">↗</span>
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="section-label">04 — CONTACT</p>

          <h2>
            Let's build something <span>great.</span>
          </h2>

          <a
            className="email"
            href="mailto:your-email@example.com"
          >
            your-email@example.com ↗
          </a>

          <div className="socials">
            <a href="#" target="_blank">GitHub</a>
            <a href="#" target="_blank">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Jai Spoorthi</p>
        <p>Built with React.js</p>
      </footer>
    </div>
  );
}

export default App;