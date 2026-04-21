import React from 'react';
import './Home.css';
import profilePhoto from '../images/photo.jpg';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-profile">
            <div className="profile-frame">
                <img src={profilePhoto} alt="SHRUTHIKA KUNTA" />
            </div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">SHRUTHIKA KUNTA</h1>
            <p className="hero-subtitle">AI Engineering Student</p>
            <p className="hero-institution">Mahindra University</p>
            <div className="hero-location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              </svg>
               Bahadurpally, Hyderabad, India - 500043
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <p>
            Passionate AI Engineering student at Mahindra University with a strong foundation 
            in machine learning, data structures, and software development. I specialize in 
            building intelligent systems and solving complex problems through innovative 
            technology solutions. My academic journey has provided hands-on experience in 
            developing hybrid ML models and full-stack web applications.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🎓</span>
              <span>AI Engineering Student</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🔬</span>
              <span>Research Focus: ML & AI</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">💻</span>
              <span>Full-Stack Developer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section contact-section">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2>Contact</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className="contact-info">
              <h4>Phone</h4>
              <p>+91 8309935791</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="contact-info">
              <h4>College Email</h4>
              <p>se23uari071@mahindrauniversity.edu.in</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="contact-info">
              <h4>Personal Email</h4>
              <p>shruthika02475@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="section interests-section">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2>Research Interests</h2>
        </div>
        <div className="interests-grid">
          <div className="interest-card">
            <div className="interest-icon">🤖</div>
            <h3>Artificial Intelligence</h3>
            <p>Deep learning, neural networks, and intelligent systems</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">📊</div>
            <h3>Machine Learning</h3>
            <p>Predictive modeling and data-driven decision making</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">🌐</div>
            <h3>Web Development</h3>
            <p>Full-stack applications and modern web frameworks</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">⚡</div>
            <h3>Data Structures</h3>
            <p>Algorithm design and computational efficiency</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2>Skills & Technologies</h2>
        </div>
        <div className="skills-container">
          <div className="skills-category">
            <h3>Programming</h3>
            <div className="skills-list">
              <span className="skill-badge">Python</span>
              <span className="skill-badge">C</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Machine Learning</h3>
            <div className="skills-list">
              <span className="skill-badge">Logistic Regression</span>
              <span className="skill-badge">Linear Regression</span>
              <span className="skill-badge">Random Forest</span>
              <span className="skill-badge">Model Evaluation</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Libraries & Frameworks</h3>
            <div className="skills-list">
              <span className="skill-badge">Pandas</span>
              <span className="skill-badge">NumPy</span>
              <span className="skill-badge">Scikit-learn</span>
              <span className="skill-badge">Matplotlib</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Tools & Software</h3>
            <div className="skills-list">
              <span className="skill-badge">MS Excel</span>
              <span className="skill-badge">PowerPoint</span>
              <span className="skill-badge">Canva</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Brief */}
      <section className="section education-section">
        <div className="section-header">
          <span className="section-number">05</span>
          <h2>Education</h2>
        </div>
        <div className="education-card">
          <div className="education-degree">
            <h3>Bachelor of Engineering/Technology (AI Engineering)</h3>
            <p className="institution">Mahindra University</p>
            <p className="duration">Aug 2023 – Present</p>
            <p className="cgpa">CGPA: 6.5/10 (till 5th semester)</p>
          </div>
          <div className="education-degree">
            <h3>Intermediate</h3>
            <p className="institution">Meluha College, Telangana</p>
            <p className="percentage">Percentage: 96%</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
