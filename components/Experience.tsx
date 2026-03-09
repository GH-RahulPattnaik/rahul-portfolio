'use client';

const experiences = [
  {
    role: 'UI Developer',
    company: 'Bluecorp Software Pvt Ltd',
    location: 'Hyderabad',
    period: 'Jun 2024 — Present',
    type: 'Full-Time',
    current: true,
    points: [
      'Manages and integrates project data for Bike Central and Car Central vehicle marketplace products within MongoDB for seamless content delivery.',
      'Develops intuitive and responsive user interfaces using Next.js and Tailwind CSS.',
      'Collaborates with the team to implement API integrations, enhancing platform functionality and user experience.',
    ],
  },
  {
    role: 'Intern',
    company: 'Bluecorp Software Pvt Ltd',
    location: 'Hyderabad',
    period: 'Dec 2023 — Jun 2024',
    type: 'Internship',
    current: false,
    points: [
      'Gained hands-on experience in Next.js for UI development, API design, and MongoDB for NoSQL database management.',
      'Developed a foundational understanding of full-stack development and efficient data handling.',
    ],
  },
];

const education = [
  { degree: 'B.Tech — Electrical & Computer Engineering', institution: 'Gandhi Institute for Education & Technology, Khurda', period: '2019 — 2023' },
  { degree: 'Higher Secondary Education', institution: 'Sri Kumaran Hr Sec School', period: '2017 — 2019' },
  { degree: 'Matriculation', institution: 'Bala Bhavan Global School', period: '2016 — 2017' },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>

      <p className="font-mono" style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>03 — Experience</p>
      <h2 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', lineHeight: 1, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '3.5rem' }}>Where I&apos;ve Worked</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

        {/* Work */}
        <div>
          <p className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2rem' }}>— Work</p>
          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'var(--border)' }} />
            {experiences.map((exp, idx) => (
              <div key={idx} style={{ position: 'relative', marginBottom: idx < experiences.length - 1 ? '3rem' : 0 }}>
                <div style={{ position: 'absolute', left: '-1.75rem', top: '0.35rem', width: '10px', height: '10px', background: exp.current ? 'var(--accent)' : 'var(--bg)', border: '2px solid var(--accent)', borderRadius: '50%' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.3rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>{exp.role}</h3>
                  <span className="font-mono" style={{ fontSize: '0.62rem', color: exp.current ? 'var(--accent)' : 'var(--text-muted)', border: `1px solid ${exp.current ? 'var(--accent)' : 'var(--border)'}`, padding: '0.2rem 0.5rem', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{exp.type}</span>
                </div>
                <p className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>{exp.company}, {exp.location}</p>
                <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--accent)', marginBottom: '1rem' }}>{exp.period}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {exp.points.map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.25rem', fontSize: '0.7rem' }}>▸</span>
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <p className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2rem' }}>— Education</p>
          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'var(--border)' }} />
            {education.map((edu, idx) => (
              <div key={idx} style={{ position: 'relative', marginBottom: idx < education.length - 1 ? '2.5rem' : 0 }}>
                <div style={{ position: 'absolute', left: '-1.75rem', top: '0.35rem', width: '10px', height: '10px', background: 'var(--bg)', border: '2px solid var(--accent)', borderRadius: '50%' }} />
                <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>{edu.period}</p>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.25rem', lineHeight: 1.4 }}>{edu.degree}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}