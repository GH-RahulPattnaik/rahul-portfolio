'use client';

const stats = [
  { value: '2+',  label: 'Years Experience' },
  { value: '3+',  label: 'Projects Built'   },
  { value: '5',   label: 'Shopify Templates' },
  { value: '4',   label: 'Languages Spoken' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

        {/* Left */}
        <div>
          <p className="font-mono" style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>01 — About</p>
          <h2 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', lineHeight: 1, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '2rem' }}>Who I Am</h2>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}>
            {stats.map(stat => (
              <div key={stat.label} style={{ background: 'var(--bg)', padding: '1.5rem' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.3rem' }}>{stat.value}</div>
                <div className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          {[
            "I'm a dedicated UI Developer with hands-on experience building and deploying engaging web applications. I completed my B.Tech in Electrical & Computer Engineering from Gandhi Institute for Education & Technology, Khurda.",
            null,
            "Currently at Bluecorp Software Pvt Ltd, I build intuitive interfaces for vehicle marketplace platforms — Bike Central and Car Central — managing data pipelines and implementing seamless API integrations.",
          ].map((para, i) =>
            para ? (
              <p key={i} style={{ lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: '1.4rem', fontSize: '1rem' }}
                dangerouslySetInnerHTML={{ __html: para.replace('Bluecorp Software Pvt Ltd', '<strong style="color:var(--text)">Bluecorp Software Pvt Ltd</strong>') }}
              />
            ) : null
          )}
          <p style={{ lineHeight: 1.85, color: 'var(--text-muted)', fontSize: '1rem' }}>
            Fluent in {['Odia','Hindi','Tamil','English'].map((l,i,a) => <span key={l}><span style={{ color: 'var(--text)' }}>{l}</span>{i < a.length-1 ? ', ' : ''}</span>)} and always eager to take on new challenges in dynamic environments.
          </p>

          {/* Links */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {[
              { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/rahul-pattnaik-9016241b0/' },
              { label: 'GitHub ↗',   href: 'https://github.com/GH-RahulPattnaik' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="font-mono"
                style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.06em', borderBottom: '1px solid var(--border)', paddingBottom: '2px', transition: 'color 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}