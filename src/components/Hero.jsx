export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Available for work</div>

          <h1>
            Hi, I'm <span className="highlight">Ahmed</span>
            <br />
            Web Developer
          </h1>

          <p className="hero-subtitle">
            I build fast, responsive, and beautiful web experiences.
            Passionate about clean code and modern technologies like React, Node.js, and more.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              🚀 View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              ✉️ Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll">Scroll</div>
    </section>
  )
}
