'use client';

const projects = [
  {
    id:          '01',
    title:       'DreamPitch',
    subtitle:    'Interactive Sales Deck — American Dream Mall',
    description: 'A premium interactive sales deck for American Dream Mall — 3 million sq. ft., 70% entertainment focus. Showcases retail leasing, sponsorship and event booking opportunities with animated sections and live CTA integrations. Built in 3 days with AI assistance.',
    liveUrl:     'https://dream-pitch.vercel.app/',
    repoUrl:     '',
    stack:       ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    type:        'Featured',
    featured:    true,
    stats:       [{ label: 'Built in', value: '3 days' }, { label: 'Sections', value: '7+' }, { label: 'AI-assisted', value: 'Yes' }],
  },
  {
    id:          '02',
    title:       'Bike Central',
    subtitle:    'Live Vehicle Marketplace',
    description: 'Production vehicle marketplace platform live at bikecentral.in. Handles listings, search, filters, user auth and real-time data sync. 12+ features shipped end-to-end, achieving 30% faster load times.',
    liveUrl:     'https://www.bikecentral.in/',
    repoUrl:     '',
    stack:       ['Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'JWT'],
    type:        'Production',
    featured:    false,
    stats:       [{ label: 'APIs', value: '15+' }, { label: 'Perf gain', value: '30%' }, { label: 'Status', value: 'Live' }],
  },
  {
    id:          '03',
    title:       'Car Central',
    subtitle:    'Vehicle Marketplace Platform',
    description: 'Car marketplace companion to Bike Central. Migrated from MongoDB to PostgreSQL with Prisma ORM for type-safe queries. Implemented RBAC, JWT sessions and full-stack responsive UI.',
    liveUrl:     '',
    repoUrl:     '',
    stack:       ['Next.js', 'PostgreSQL', 'Prisma', 'Express.js', 'TypeScript', 'Tailwind CSS'],
    type:        'Production',
    featured:    false,
    stats:       [{ label: 'DB migration', value: 'Done' }, { label: 'RBAC', value: 'Yes' }, { label: 'ORM', value: 'Prisma' }],
  },
  {
    id:          '04',
    title:       'Template One',
    subtitle:    'Internship UI Template — Bluecorp',
    description: 'A responsive modern UI template designed and developed during my internship at Bluecorp Software. Demonstrates component architecture, Tailwind CSS design systems and clean layout patterns.',
    liveUrl:     'https://temp-one-one.vercel.app/',
    repoUrl:     '',
    stack:       ['Next.js', 'React', 'Tailwind CSS'],
    type:        'Internship',
    featured:    false,
    stats:       [],
  },
  {
    id:          '05',
    title:       'Template Two',
    subtitle:    'Internship UI Template — Bluecorp',
    description: 'Second UI template built during internship — explores a different visual direction with advanced layout compositions, dark-mode design tokens and reusable section patterns.',
    liveUrl:     'https://temp-two-drab.vercel.app/',
    repoUrl:     '',
    stack:       ['Next.js', 'React', 'Tailwind CSS'],
    type:        'Internship',
    featured:    false,
    stats:       [],
  },
  {
    id:          '06',
    title:       'Portfolio v1',
    subtitle:    'Personal Portfolio Website',
    description: 'My previous personal portfolio built with Next.js, TypeScript and Tailwind CSS v4. Dark themed with a clean layout showcasing experience, projects and skills.',
    liveUrl:     'https://rahul-portfolio-gules-xi.vercel.app/',
    repoUrl:     '',
    stack:       ['Next.js', 'TypeScript', 'Tailwind CSS v4'],
    type:        'Personal',
    featured:    false,
    stats:       [],
  },
];

const typeStyle = (type: string) => {
  switch (type) {
    case 'Featured':    return { background: 'var(--accent-dim)', border: '1px solid var(--accent-dim)', color: 'var(--accent)' };
    case 'Production':  return { background: 'var(--accent-dim)', border: '1px solid var(--accent-dim)', color: 'var(--accent)' };
    case 'Internship':  return { background: 'var(--bg-2)',       border: '1px solid var(--border)',     color: 'var(--text-2)' };
    case 'Personal':    return { background: 'var(--bg-2)',       border: '1px solid var(--border)',     color: 'var(--text-2)' };
    default:            return {};
  }
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="label">04 — Projects</div>
          <h2 className="display-lg mt-3">
            Things I&apos;ve Built<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
        </div>

        {/* Featured project */}
        {projects.filter(p => p.featured).map(project => (
          <div
            key={project.id}
            className="card rounded-2xl p-8 mb-5"
            style={{
              borderColor: 'var(--accent)',
              boxShadow:   '0 0 0 1px var(--accent-dim), 0 8px 40px var(--accent-dim)',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 items-start">

              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color:      'var(--text-3)',
                    }}
                  >
                    {project.id}
                  </span>
                  <span className="badge" style={typeStyle(project.type)}>
                    ★ {project.type}
                  </span>
                </div>

                <h3
                  className="text-4xl font-bold tracking-tight mb-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color:      'var(--text-1)',
                  }}
                >
                  {project.title}
                </h3>
                <div
                  className="text-sm mb-5"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color:      'var(--accent)',
                  }}
                >
                  {project.subtitle}
                </div>

                <p
                  className="text-base leading-8 mb-6 max-w-lg"
                  style={{ color: 'var(--text-2)' }}
                >
                  {project.description}
                </p>

                {/* Stats */}
                {project.stats.length > 0 && (
                  <div className="flex gap-8 mb-6 flex-wrap">
                    {project.stats.map((s, si) => (
                      <div key={si}>
                        <div
                          className="text-2xl font-bold mb-0.5"
                          style={{
                            fontFamily: 'var(--font-display)',
                            color:      'var(--accent)',
                          }}
                        >
                          {s.value}
                        </div>
                        <div
                          className="text-xs tracking-widest uppercase"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            color:      'var(--text-3)',
                          }}
                        >
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, ti) => (
                    <span
                      key={ti}
                      className="badge badge-muted"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 flex-wrap">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-solid"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Right — visual card */}
              <div
                className="hidden lg:flex flex-col rounded-xl overflow-hidden"
                style={{
                  background: 'var(--bg-2)',
                  border:     '1px solid var(--border)',
                }}
              >
                {/* Window bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  {['#EF4444', '#F59E0B', '#22C55E'].map((c, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: c, opacity: 0.8 }}
                    />
                  ))}
                  <span
                    className="ml-2 text-xs"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color:      'var(--text-3)',
                    }}
                  >
                    dream-pitch.vercel.app
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-2">
                  {[
                    { c: 'var(--accent)',  t: '$ npm run build' },
                    { c: 'var(--text-3)', t: 'Creating optimized build...' },
                    { c: 'var(--accent)',  t: '✓ Compiled successfully' },
                    { c: 'var(--text-3)', t: '○ Generating static pages' },
                    { c: 'var(--accent)',  t: '✓ Build completed in 2.4s' },
                    { c: 'var(--text-3)', t: '$ vercel deploy --prod' },
                    { c: 'var(--accent)',  t: '✓ Deployed to production' },
                  ].map((line, i) => (
                    <div
                      key={i}
                      className="text-xs"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color:      line.c,
                      }}
                    >
                      {line.t}
                    </div>
                  ))}
                  <div className="flex items-center gap-1 mt-1">
                    <span
                      className="text-xs"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
                    >
                      $
                    </span>
                    <span className="cursor-blink" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.filter(p => !p.featured).map(project => (
            <div
              key={project.id}
              className="card rounded-2xl p-6 flex flex-col"
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color:      'var(--text-3)',
                  }}
                >
                  {project.id}
                </span>
                <span className="badge" style={typeStyle(project.type)}>
                  {project.type}
                </span>
              </div>

              <h3
                className="text-lg font-bold tracking-tight mb-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  color:      'var(--text-1)',
                }}
              >
                {project.title}
              </h3>

              <div
                className="text-xs mb-4"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color:      'var(--accent)',
                }}
              >
                {project.subtitle}
              </div>

              <p
                className="text-sm leading-7 mb-5 flex-1"
                style={{ color: 'var(--text-2)' }}
              >
                {project.description}
              </p>

              {/* Stats */}
              {project.stats.length > 0 && (
                <div
                  className="flex gap-5 mb-5 pb-5"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  {project.stats.map((s, si) => (
                    <div key={si}>
                      <div
                        className="text-lg font-bold"
                        style={{
                          fontFamily: 'var(--font-display)',
                          color:      'var(--accent)',
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        className="text-[10px] tracking-wider uppercase"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          color:      'var(--text-3)',
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((tech, ti) => (
                  <span
                    key={ti}
                    className="badge badge-muted text-[10px]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium transition-all duration-200 group w-fit"
                  style={{ color: 'var(--accent)', textDecoration: 'none' }}
                >
                  View Live
                  <span className="transition-transform duration-200 group-hover:translate-x-1">↗</span>
                </a>
              ) : (
                <span
                  className="text-xs"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color:      'var(--text-3)',
                  }}
                >
                  Internal / Private
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}