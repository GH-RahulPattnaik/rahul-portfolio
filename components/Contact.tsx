'use client';

const contacts = [
  { label: 'Email',    value: 'rpattnaik2001@gmail.com',  href: 'https://mail.google.com/mail/?view=cm&to=rpattnaik2001@gmail.com&su=Hello Rahul — Let\'s Connect' },
  { label: 'Phone',    value: '+91 9940751910',            href: 'tel:+919940751910' },
  { label: 'LinkedIn', value: 'rahul-pattnaik',           href: 'https://www.linkedin.com/in/rahul-pattnaik-9016241b0/' },
  { label: 'GitHub',   value: 'GH-RahulPattnaik',         href: 'https://github.com/GH-RahulPattnaik' },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg-alt)', borderTop: '2px solid var(--border)', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <span className="gs-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>05 / Contact</span>
          <div style={{ flex: 1, height: '2px', background: 'var(--border)' }} />
          <h2 className="gs-display" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1 }}>
            Get In Touch
          </h2>
        </div>

        {/* Big CTA */}
        <div style={{ border: '2px solid var(--border)', padding: '3rem 2rem', marginBottom: '2rem', textAlign: 'center', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'var(--accent)' }} />
          <h3 className="gs-display" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: '1.2rem' }}>
            Let&apos;s Build<br />
            <span style={{ WebkitTextStroke: '2px var(--text)', color: 'transparent' }}>Together.</span>
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Open to full-time roles, freelance projects and interesting collaborations. Remote-friendly, open to relocation.
          </p>
          <a href="https://mail.google.com/mail/?view=cm&to=rpattnaik2001@gmail.com&su=Hello Rahul — Let's Connect" target="_blank" rel="noopener noreferrer" className="gs-mono hover-lift"
            style={{ display: 'inline-block', padding: '0.9rem 2.5rem', background: 'var(--text)', color: 'var(--bg)', border: '2px solid var(--border)', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--bg)'; }}
          >Send Me an Email →</a>
        </div>

        {/* Contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px', background: 'var(--border)', border: '2px solid var(--border)' }}>
          {contacts.map(c => (
            <a key={c.label} href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{ display: 'block', padding: '1.5rem', background: 'var(--bg)', textDecoration: 'none', transition: 'background 0.2s', borderTop: '3px solid transparent' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent)'; (e.currentTarget as HTMLAnchorElement).style.borderTopColor = 'var(--border)'; (e.currentTarget as HTMLAnchorElement).querySelectorAll('p').forEach(p => (p as HTMLElement).style.color = '#fff'); }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--bg)'; (e.currentTarget as HTMLAnchorElement).style.borderTopColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).querySelectorAll('p').forEach(p => (p as HTMLElement).style.color = ''); }}
            >
              <p className="gs-mono" style={{ fontSize: '0.6rem', color: 'var(--accent)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{c.label}</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text)', wordBreak: 'break-all' }}>{c.value}</p>
            </a>
          ))}
        </div>

        <p className="gs-mono" style={{ marginTop: '1.5rem', fontSize: '0.68rem', color: 'var(--text-faint)', textAlign: 'center', letterSpacing: '0.08em' }}>
          📍 Berhampur, Odisha, India — Open to Remote & Relocation
        </p>

      </div>
    </section>
  );
}