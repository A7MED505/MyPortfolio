const experiences = [
  {
    emoji: '💼',
    title: 'Frontend Developer',
    company: 'Tech Company — Full-time',
    date: '2023 – Present',
    description:
      'Built and maintained responsive React applications. Collaborated with designers and backend engineers to deliver high-quality products. Improved page performance by 40% through code splitting and lazy loading.',
  },
  {
    emoji: '🚀',
    title: 'Junior Web Developer',
    company: 'Startup Studio — Full-time',
    date: '2022 – 2023',
    description:
      'Developed client-facing websites using HTML, CSS, and JavaScript. Integrated third-party APIs and implemented RESTful services. Participated in agile sprints and code reviews.',
  },
  {
    emoji: '🎓',
    title: 'Web Development Intern',
    company: 'Digital Agency — Internship',
    date: '2021 – 2022',
    description:
      'Assisted in building landing pages and UI components. Learned best practices in Git, version control, and team collaboration. Created reusable component libraries.',
  },
  {
    emoji: '🎓',
    title: 'B.Sc. Computer Science',
    company: 'University of Technology',
    date: '2017 – 2021',
    description:
      'Graduated with honors. Specialized in software engineering and web technologies. Capstone project: a full-stack social platform.',
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">My <span>Experience</span></h2>

        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.title} className="timeline-item">
              <div className="timeline-dot">{exp.emoji}</div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-title">{exp.title}</span>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
