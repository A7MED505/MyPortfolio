const projects = [
  {
    emoji: '🛒',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce app with product listings, cart, authentication, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB'],
    demo: '#',
    github: '#',
  },
  {
    emoji: '📝',
    title: 'Task Manager App',
    description:
      'A productivity app with drag-and-drop boards, real-time updates, and team collaboration.',
    tags: ['React', 'Firebase', 'Tailwind'],
    demo: '#',
    github: '#',
  },
  {
    emoji: '🌤️',
    title: 'Weather Dashboard',
    description:
      'A weather app fetching real-time data from OpenWeatherMap API with beautiful visualizations.',
    tags: ['JavaScript', 'REST API', 'CSS'],
    demo: '#',
    github: '#',
  },
  {
    emoji: '💬',
    title: 'Real-Time Chat App',
    description:
      'A chat application with rooms, user authentication, and real-time messaging using Socket.io.',
    tags: ['Node.js', 'Socket.io', 'React'],
    demo: '#',
    github: '#',
  },
  {
    emoji: '📊',
    title: 'Analytics Dashboard',
    description:
      'An admin dashboard with charts, data tables, and user management for business analytics.',
    tags: ['React', 'Recharts', 'REST API'],
    demo: '#',
    github: '#',
  },
  {
    emoji: '🎨',
    title: 'Portfolio Website',
    description:
      'This very portfolio! Built with React and Vite, featuring dark/light mode and smooth UX.',
    tags: ['React', 'Vite', 'CSS'],
    demo: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.title} className="project-card">
              <div className="project-image">{project.emoji}</div>
              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-links">
                  <a href={project.demo} className="project-link">
                    🔗 Live Demo
                  </a>
                  <a href={project.github} className="project-link">
                    📂 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
