export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>

        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-placeholder">
              <img
                src={import.meta.env.BASE_URL + 'images/MyProfile.jpeg'}
                alt="Ahmed profile"
                className="about-profile-image"
                loading="lazy"
              />
            </div>
            <div className="about-tag">2+ Years Exp.</div>
          </div>

          <div className="about-text">
            <h3>Turning ideas into digital reality</h3>
            <p>
              I'm a passionate Web Developer who loves building clean, 
              efficient, and user-friendly web applications. I enjoy working 
              across the full stack — from designing pixel-perfect UIs to 
              architecting scalable back-end systems.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, 
              contributing to open-source projects, or sharpening my skills 
              through personal projects.
            </p>

            <div className="about-info">
              <div className="about-info-item">
                <span className="label">📛 Name:</span>
                <span className="value">Ahmed</span>
              </div>
              <div className="about-info-item">
                <span className="label">📧 Email:</span>
                <span className="value">ahmed.mathil82@gmail.com</span>
              </div>
              <div className="about-info-item">
                <span className="label">📍 Location:</span>
                <span className="value">Saudi Arabia</span>
              </div>
              <div className="about-info-item">
                <span className="label">🎓 Degree:</span>
                <span className="value">Computer Engineering</span>
              </div>
              <div className="about-info-item">
                <span className="label">💼 Status:</span>
                <span className="value">Open to Work</span>
              </div>
              <div className="about-info-item">
                <span className="label">🌐 Languages:</span>
                <span className="value">Arabic, English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
