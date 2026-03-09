'use client';

const contactLinks = [
  { label: 'Email',    value: 'rpattnaik2001@gmail.com',  href: 'mailto:rpattnaik2001@gmail.com' },
  { label: 'Phone',    value: '+91 9940751910',            href: 'tel:+919940751910' },
  { label: 'LinkedIn', value: 'rahul-pattnaik-9016241b0', href: 'https://www.linkedin.com/in/rahul-pattnaik-9016241b0/' },
  { label: 'GitHub',   value: 'GH-RahulPattnaik',         href: 'https://github.com/GH-RahulPattnaik' },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>

      <p className="font-mono" style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>05 — Contact</p>

      <h2 style={{ fontSize: 'clamp(3rem, 10vw, 6.5rem)', lineHeight: 0.92, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '4rem' }}>
        Let&apos;s Work<br /><span style={{ color: 'var(--accent)' }}>Together</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', marginBottom: '3.5rem' }}>
        {contactLinks.map(item => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={{ background: 'var(--bg)', padding: '2rem', textDecoration: 'none', display: 'block', transition: 'background 0.2s, border-left-color 0.2s', borderLeft: '3px solid transparent' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--bg-secondary)'; (e.currentTarget as HTMLAnchorElement).style.borderLeftColor = 'var(--accent)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--bg)'; (e.currentTarget as HTMLAnchorElement).style.borderLeftColor = 'transparent'; }}
          >
            <p className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{item.label}</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text)', wordBreak: 'break-all' }}>{item.value}</p>
          </a>
        ))}
      </div>

      <p className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
        📍 Based in Berhampur, Odisha — open to remote &amp; relocate
      </p>
    </section>
  );
}