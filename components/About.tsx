'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-alt)', borderTop: '2px solid var(--border)', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <span className="gs-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>01 / About</span>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)' }} />
          <h2 className="gs-display" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1 }}>
            Who I Am
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

          {/* Left – photo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="hover-lift" style={{ position: 'relative', aspectRatio: '4/5', border: '2px solid var(--border)', overflow: 'hidden' }}>
              <Image src="/about-pic.jpg" alt="Rahul Pattnaik" fill style={{ objectFit: 'cover' }} />
              {/* Accent strip */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'var(--accent)' }} />
            </div>

            {/* Location + links */}
            <div style={{ border: '2px solid var(--border)', padding: '1.2rem', background: 'var(--bg)' }}>
              <p className="gs-mono" style={{ fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Connect</p>
              {[
                { l: 'LinkedIn ↗', h: 'https://www.linkedin.com/in/rahul-pattnaik-9016241b0/' },
                { l: 'GitHub ↗',   h: 'https://github.com/GH-RahulPattnaik' },
                { l: 'Email ↗',    h: 'https://mail.google.com/mail/?view=cm&to=rpattnaik2001@gmail.com&su=Hello Rahul — Let\'s Connect&body=Hi Rahul,%0A%0AI came across your portfolio and would like to get in touch.' },
              ].map(link => (
                <a key={link.l} href={link.h} target="_blank" rel="noopener noreferrer" className="gs-mono"
                  style={{ display: 'flex', justifyContent: 'space-between', padding: '0.55rem 0', borderBottom: '1px solid var(--border-light)', fontSize: '0.82rem', color: 'var(--text)', textDecoration: 'none', transition: 'color 0.2s, padding-left 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.paddingLeft = '0.5rem'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.paddingLeft = '0'; }}
                >{link.l}</a>
              ))}
            </div>
          </div>

          {/* Right – bio */}
          <div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              I&apos;m a dedicated UI Developer with hands-on experience building and deploying engaging web applications. I hold a B.Tech in Electrical &amp; Computer Engineering from Gandhi Institute for Education &amp; Technology, Khurda.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Currently at <strong style={{ color: 'var(--text)' }}>Bluecorp Software Pvt Ltd</strong>, I develop intuitive interfaces for Bike Central and Car Central — vehicle marketplace platforms — while managing MongoDB data and implementing seamless API integrations.
            </p>

            {/* Stat row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--border)', border: '2px solid var(--border)', marginBottom: '2.5rem' }}>
              {[['2+', 'Years Experience'], ['3+', 'Projects Built'], ['5', 'Shopify Templates'], ['4', 'Languages Spoken']].map(([n, l]) => (
                <div key={l} style={{ background: 'var(--bg)', padding: '1.25rem', cursor: 'default', transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
                >
                  <span className="gs-display" style={{ display: 'block', fontSize: '2.2rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1, marginBottom: '0.2rem' }}>{n}</span>
                  <span className="gs-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{l}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div>
              <p className="gs-mono" style={{ fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Languages Spoken</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Odia', 'Hindi', 'Tamil', 'English'].map(lang => (
                  <span key={lang} className="gs-mono"
                    style={{ padding: '0.4rem 1rem', border: '2px solid var(--border)', fontSize: '0.8rem', color: 'var(--text)', background: 'var(--bg)', cursor: 'default', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.background = 'var(--accent)'; (e.currentTarget as HTMLSpanElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLSpanElement).style.color = '#fff'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.background = 'var(--bg)'; (e.currentTarget as HTMLSpanElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLSpanElement).style.color = 'var(--text)'; }}
                  >{lang}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}