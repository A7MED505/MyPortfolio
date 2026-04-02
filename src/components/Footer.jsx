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
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              🐙
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              💼
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Twitter">
              🐦
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
