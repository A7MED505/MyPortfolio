export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-logo">&lt;Ahmed /&gt;</span>
          <span className="footer-copy">
            © {new Date().getFullYear()} Ahmed. Built with React & ❤️
          </span>
          <div className="footer-socials">
            <a href="https://github.com/A7MED505" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              🐙
            </a>
            <a href="https://www.linkedin.com/in/ahmed-al-mathil-80a085275/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              💼
            </a>
            <a href="" target="_blank" rel="noreferrer" className="social-link" aria-label="Twitter">
              🐦
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
