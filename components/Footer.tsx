'use client';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--bg-alt)', borderTop: '2px solid var(--border)', padding: '2.5rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', background: 'var(--accent)', flexShrink: 0 }} />
          <span className="gs-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>
            Rahul Pattnaik
          </span>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {[['LinkedIn', 'https://www.linkedin.com/in/rahul-pattnaik-9016241b0/'], ['GitHub', 'https://github.com/GH-RahulPattnaik']].map(([l, h]) => (
            <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="gs-mono"
              style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >{l} ↗</a>
          ))}
        </div>

        <p className="gs-mono" style={{ fontSize: '0.65rem', color: 'var(--text-faint)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          © {year} Rahul Pattnaik · Next.js · Tailwind · TypeScript
        </p>

      </div>
    </footer>
  );
}