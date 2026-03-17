'use client';

const projects = [
  {
    num: '01',
    title: 'E-Commerce Website Templates',
    type: 'Internship Project',
    desc: 'Developed and replicated multiple real-world e-commerce templates inspired by Shopify and MyDukaan using Next.js, Tailwind CSS, and MongoDB. Built scalable UI components and integrated APIs for realistic product, cart, and checkout functionalities.',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'API Integration'],
    featured: true,
  },
  {
    num: '02',
    title: 'Rahul Meet (Google Meet Clone)',
    type: 'Advanced Personal Project',
    desc: 'Rebuilt a modern Google Meet-like video conferencing UI using Next.js, TypeScript, and Tailwind CSS. Designed a pixel-perfect, responsive interface inspired by the latest Google Meet UI.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'UI Engineering'],
    featured: false,
  },
  {
    num: '03',
    title: 'BikeCentral (Industry Project)',
    type: 'Professional Experience',
    desc: 'Contributed to data management and UI improvements for BikeCentral, a real-world platform for tracking bike models in India. Optimized structured datasets and enhanced user interface for better usability.',
    tags: ['Data Management', 'UI Development', 'Next.js'],
    featured: true,
    link: 'https://www.bikecentral.in/',
  },
  {
    num: '04',
    title: 'CarCentral (Upcoming Platform)',
    type: 'Ongoing Project',
    desc: 'Currently working on data management and structuring for CarCentral, a platform similar to BikeCentral. Preparing scalable architecture and datasets for upcoming launch.',
    tags: ['MongoDB', 'Data Structuring', 'Scalable Systems'],
    featured: false,
  },
  {
    num: '05',
    title: 'Smart Notice Board',
    type: 'College Project',
    desc: 'Built a responsive notice board system using HTML, CSS, and JavaScript for managing and displaying announcements efficiently.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg)', borderTop: '2px solid var(--border)', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <span className="gs-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>04 / Projects</span>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)' }} />
          <h2 className="gs-display" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1 }}>
            Things I&apos;ve Built
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'var(--border)', border: '2px solid var(--border)' }}>
          {projects.map((p, i) => (
            <div key={i}
              style={{ background: 'var(--bg)', padding: '2rem', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', transition: 'background 0.2s', cursor: 'default', borderLeft: '5px solid transparent' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-alt)'; (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'var(--accent)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--bg)'; (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'transparent'; }}
            >
              {/* Number */}
              <div className="gs-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, color: 'var(--border-light)', lineHeight: 1, minWidth: '65px', textAlign: 'right', userSelect: 'none' }}>
                {p.num}
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem', alignItems: 'flex-start' }}>
                  <h3 className="gs-display" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', fontWeight: 700, color: 'var(--text)', lineHeight: 1.1 }}>
                    {p.title}
                  </h3>

                  {p.featured && (
                    <span className="gs-mono" style={{ fontSize: '0.6rem', padding: '0.25rem 0.65rem', background: 'var(--accent)', color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>
                      Featured
                    </span>
                  )}
                </div>

                <p className="gs-mono" style={{ fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.65rem' }}>
                  {p.type}
                </p>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1rem', maxWidth: '640px' }}>
                  {p.desc}
                </p>

                {/* 🔗 BikeCentral Link */}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gs-mono"
                    style={{
                      display: 'inline-block',
                      fontSize: '0.7rem',
                      marginBottom: '1rem',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      letterSpacing: '0.08em'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
                  >
                    Visit Site ↗
                  </a>
                )}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.tags.map(t => (
                    <span key={t} className="gs-mono"
                      style={{ fontSize: '0.65rem', padding: '0.25rem 0.6rem', border: '1.5px solid var(--border-light)', color: 'var(--text-muted)', letterSpacing: '0.04em', transition: 'all 0.18s', cursor: 'default' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.background = 'var(--accent)'; (e.currentTarget as HTMLSpanElement).style.color = '#fff'; (e.currentTarget as HTMLSpanElement).style.borderColor = 'var(--accent)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.background = 'transparent'; (e.currentTarget as HTMLSpanElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLSpanElement).style.borderColor = 'var(--border-light)'; }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <a href="https://github.com/GH-RahulPattnaik" target="_blank" rel="noopener noreferrer" className="gs-mono hover-lift"
            style={{ display: 'inline-block', padding: '0.7rem 2rem', border: '2px solid var(--border)', fontSize: '0.72rem', color: 'var(--text)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
          >
            View All on GitHub ↗
          </a>
        </div>

      </div>
    </section>
  );
}