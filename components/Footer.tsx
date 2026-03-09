export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 1.5rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)' }}>
          Rahul<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <p className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
          © {year} Rahul Pattnaik — Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}