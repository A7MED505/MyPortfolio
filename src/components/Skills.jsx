const categories = [
  {
    title: '⚡ Frontend',
    skills: [
      { name: 'HTML & CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: '🛠️ Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'REST APIs', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: '🔧 Tools & Others',
    tags: ['Git & GitHub', 'VS Code', 'Figma', 'Vite', 'npm'],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>

        <div className="skills-grid">
          {categories.map(cat => (
            <div key={cat.title} className="card skill-category">
              <h4>{cat.title}</h4>

              {cat.skills
                ? cat.skills.map(skill => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))
                : (
                  <div className="skill-tags">
                    {cat.tags.map(tag => (
                      <span key={tag} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
