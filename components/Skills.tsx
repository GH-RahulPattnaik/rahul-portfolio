'use client';

const skillGroups = [
  { category: 'Languages',  skills: ['JavaScript', 'HTML5', 'CSS3', 'TypeScript'] },
  { category: 'Front-End',  skills: ['Next.js', 'React.js', 'Tailwind CSS', 'Responsive Design'] },
  { category: 'Back-End',   skills: ['Node.js', 'RESTful APIs'] },
  { category: 'Database',   skills: ['MongoDB'] },
  { category: 'Tools',      skills: ['Git', 'GitHub'] },
  { category: 'Concepts',   skills: ['Full Stack Development', 'API Integration', 'Data Management'] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <p className="font-mono" style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>02 — Skills</p>
        <h2 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', lineHeight: 1, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '3.5rem' }}>What I Work With</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}>
          {skillGroups.map(group => (
            <div
              key={group.category}
              style={{ background: 'var(--bg-secondary)', padding: '2rem', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-secondary)')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--accent)', flexShrink: 0 }} />
                <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{group.category}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.skills.map(skill => (
                  <span key={skill} style={{ padding: '0.3rem 0.75rem', border: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--text)', background: 'var(--bg)', whiteSpace: 'nowrap' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}