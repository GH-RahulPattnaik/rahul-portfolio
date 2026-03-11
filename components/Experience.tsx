'use client';

const work = [
  {
    role: 'UI Developer', company: 'Bluecorp Software Pvt Ltd', location: 'Hyderabad',
    period: 'Jun 2024 — Present', type: 'Full-Time', current: true,
    points: [
      'Manages and integrates project data for Bike Central and Car Central vehicle marketplace products within MongoDB.',
      'Develops intuitive and responsive interfaces using Next.js and Tailwind CSS.',
      'Implements API integrations enhancing platform functionality and user experience.',
    ],
  },
  {
    role: 'Intern', company: 'Bluecorp Software Pvt Ltd', location: 'Hyderabad',
    period: 'Dec 2023 — Jun 2024', type: 'Internship', current: false,
    points: [
      'Gained hands-on experience in Next.js for UI development, API design, and MongoDB.',
      'Developed a foundational understanding of full-stack development and data handling.',
    ],
  },
];

const edu = [
  { deg: 'B.Tech — Electrical & Computer Engineering', inst: 'Gandhi Institute for Education & Technology, Khurda', yr: '2019 — 2023' },
  { deg: 'Higher Secondary Education', inst: 'Sri Kumaran Hr Sec School', yr: '2017 — 2019' },
  { deg: 'Matriculation', inst: 'Bala Bhavan Global School', yr: '2016 — 2017' },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-alt)', borderTop: '2px solid var(--border)', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <span className="gs-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>03 / Experience</span>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)' }} />
          <h2 className="gs-display" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1 }}>
            Where I&apos;ve Worked
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

          {/* Work */}
          <div>
            <p className="gs-mono" style={{ fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--text-faint)', textTransform: 'uppercase', marginBottom: '2rem', borderBottom: '2px solid var(--border)', paddingBottom: '0.6rem' }}>Work History</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {work.map((w, i) => (
                <div key={i} className="hover-lift" style={{ border: '2px solid var(--border)', padding: '1.5rem', background: 'var(--bg)', borderLeft: `5px solid ${w.current ? 'var(--accent)' : 'var(--border)'}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.3rem' }}>
                    <h3 className="gs-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>{w.role}</h3>
                    <span className="gs-mono" style={{ fontSize: '0.6rem', padding: '0.2rem 0.6rem', border: `1.5px solid ${w.current ? 'var(--accent)' : 'var(--border-light)'}`, color: w.current ? 'var(--accent)' : 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {w.current ? '● ' : ''}{w.type}
                    </span>
                  </div>
                  <p className="gs-mono" style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>{w.company} · {w.location}</p>
                  <p className="gs-mono" style={{ fontSize: '0.7rem', color: 'var(--accent)', marginBottom: '1rem' }}>{w.period}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {w.points.map((pt, j) => (
                      <li key={j} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0, fontSize: '0.65rem', marginTop: '0.3rem' }}>◆</span>
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="gs-mono" style={{ fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--text-faint)', textTransform: 'uppercase', marginBottom: '2rem', borderBottom: '2px solid var(--border)', paddingBottom: '0.6rem' }}>Education</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {edu.map((e, i) => (
                <div key={i} className="hover-lift" style={{ border: '2px solid var(--border)', padding: '1.5rem', background: 'var(--bg)', cursor: 'default', transition: 'all 0.2s' }}
                  onMouseEnter={ev => (ev.currentTarget.style.borderColor = 'var(--accent)')}
                  onMouseLeave={ev => (ev.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <p className="gs-mono" style={{ fontSize: '0.68rem', color: 'var(--accent)', marginBottom: '0.4rem', letterSpacing: '0.08em' }}>{e.yr}</p>
                  <h3 className="gs-display" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem', lineHeight: 1.3 }}>{e.deg}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{e.inst}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}