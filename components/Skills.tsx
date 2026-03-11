'use client';

const groups = [
  { cat: 'Languages',  items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
  { cat: 'Front-End',  items: ['Next.js', 'React.js', 'Tailwind CSS', 'Responsive Design'] },
  { cat: 'Back-End',   items: ['Node.js', 'RESTful APIs'] },
  { cat: 'Database',   items: ['MongoDB'] },
  { cat: 'Tools',      items: ['Git', 'GitHub'] },
  { cat: 'Concepts',   items: ['Full Stack Dev', 'API Integration', 'Data Management'] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg)', borderTop: '2px solid var(--border)', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <span className="gs-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>02 / Skills</span>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)' }} />
          <h2 className="gs-display" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1 }}>
            What I Use
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2px', background: 'var(--border)' }}>
          {groups.map(g => (
            <div key={g.cat}
              style={{ background: 'var(--bg)', padding: '1.75rem', transition: 'background 0.2s', cursor: 'default' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-alt)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.1rem' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--accent)' }} />
                <span className="gs-mono" style={{ fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>{g.cat}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {g.items.map(item => (
                  <span key={item}
                    style={{ padding: '0.3rem 0.7rem', border: '1.5px solid var(--border-light)', fontSize: '0.85rem', color: 'var(--text)', background: 'var(--bg)', cursor: 'default', transition: 'all 0.18s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.background = 'var(--accent)'; (e.currentTarget as HTMLSpanElement).style.color = '#fff'; (e.currentTarget as HTMLSpanElement).style.borderColor = 'var(--accent)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.background = 'var(--bg)'; (e.currentTarget as HTMLSpanElement).style.color = 'var(--text)'; (e.currentTarget as HTMLSpanElement).style.borderColor = 'var(--border-light)'; }}
                  >{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}