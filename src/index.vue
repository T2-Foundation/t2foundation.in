<template>
  <div class="landing-page">
    <header class="header" v-motion-slide-visible-once-top>
      <div class="logo">T2 Foundation</div>
      <nav class="nav">
        <a href="#mission">Mission</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    
    <section class="hero" v-motion-slide-visible-once-bottom>
      <div class="hero-container">
        <div class="hero-image" v-motion-slide-visible-once-left>
          <img src="./assets/hero-image.jpg" alt="T2 Foundation" />
        </div>
        <div class="hero-content" v-motion-slide-visible-once-right>
          <h1>T2 Foundation</h1>
          <p>Innovating Tech for Social Impact</p>
          <div class="cta-button" @click="scrollToSection('mission')">Learn More</div>
        </div>
      </div>
    </section>
    
    <section id="mission" class="mission section" v-motion-fade-visible>
      <h2>Our Mission</h2>
      <div class="content">
        <p>
          The T2 Foundation is dedicated to leveraging technology to create positive social change. 
          We develop innovative solutions to address real-world challenges, focusing on accessibility, 
          sustainability, and community empowerment.
        </p>
        <p>
          Through our projects, we aim to bridge digital divides, promote tech education, and 
          provide resources to underserved communities.
        </p>
      </div>
    </section>
    
    <section id="projects" class="projects section">
      <h2 v-motion-slide-visible-once-left>Our Projects</h2>
      
      <div class="project-card" v-motion-slide-visible>
        <div class="project-image">
          <img src="./assets/referall-image.svg" alt="ReferAll Project" />
        </div>
        <div class="project-info">
          <h3>ReferAll</h3>
          <p>
            A platform connecting individuals seeking career opportunities with 
            mentors who can provide referrals and guidance in the tech industry.
          </p>
          <div class="project-button">Learn More</div>
        </div>
      </div>
      
      <div class="projects-coming-soon" v-motion-slide-visible-once-right>
        <h3>More Projects Coming Soon</h3>
        <p>We're constantly working on new initiatives. Stay tuned!</p>
      </div>
    </section>
    
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">T2 Foundation</div>
        <div class="footer-links">
          <a href="#mission">Mission</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="footer-social">
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
        </div>
      </div>
      <div class="footer-copyright">
        &copy; {{ new Date().getFullYear() }} T2 Foundation. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
/* Base Styles */
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --text-color: #333;
  --light-color: #ffffff;
  --accent-color: #e74c3c;
  --transition: all 0.5s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
  line-height: 1.6;
}

.landing-page {
  max-width: 100%;
  overflow-x: hidden;
}

/* Header Styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
}

.nav a {
  margin-left: 2rem;
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: var(--transition);
}

.nav a:hover {
  color: var(--primary-color);
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0;
  background-color: #ffffff;
}

.hero-container {
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
  align-items: center;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  max-height: 500px;
}

.hero-content {
  flex: 1;
  text-align: right;
  padding-left: 2rem;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.cta-button:hover {
  background-color: var(--secondary-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Section Styles */
.section {
  padding: 5rem 10%;
  min-height: 50vh;
}

.section h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--secondary-color);
}

/* Mission Section */
.mission {
  background-color: white;
}

.mission .content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.mission p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

/* Projects Section */
.projects {
  background-color: var(--light-color);
}

.project-card {
  display: flex;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.project-image {
  flex: 1;
  min-height: 300px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image img {
  max-width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.project-info {
  flex: 1;
  padding: 2rem;
}

.project-info h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.project-info p {
  margin-bottom: 1.5rem;
}

.project-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition);
}

.project-button:hover {
  background-color: var(--secondary-color);
}

.projects-coming-soon {
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Footer */
.footer {
  background-color: var(--secondary-color);
  color: white;
  padding: 3rem 10% 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-links a {
  margin-right: 1.5rem;
  color: white;
  text-decoration: none;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--primary-color);
}

.footer-social a {
  margin-left: 1rem;
  color: white;
  font-size: 1.2rem;
  transition: var(--transition);
}

.footer-social a:hover {
  color: var(--primary-color);
}

.footer-copyright {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 992px) {
  .hero-container {
    flex-direction: column-reverse;
    padding-top: 80px;
  }

  .hero-content {
    text-align: center;
    padding-left: 0;
    margin-bottom: 2rem;
  }

  .hero p {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-image {
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 1rem 5%;
    flex-direction: column;
  }
  
  .logo {
    margin-bottom: 1rem;
  }
  
  .nav a {
    margin: 0 1rem;
    font-size: 0.9rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .section {
    padding: 3rem 5%;
  }
  
  .project-card {
    flex-direction: column;
  }
  
  .project-image {
    min-height: 200px;
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-logo, .footer-links {
    margin-bottom: 1.5rem;
  }
  
  .footer-links a {
    margin: 0 0.75rem;
  }
}
</style>