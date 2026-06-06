'use client';

const experiences = [
  {
    role:     'Full Stack Developer / UI Developer',
    company:  'Bluecorp Software Pvt Ltd',
    location: 'Hyderabad',
    period:   'Jun 2024 – Present',
    type:     'Full-time',
    current:  true,
    points: [
      'Owned and shipped 12+ production features end-to-end for vehicle marketplace platforms (Bike Central, Car Central), reducing page load time by 30% and increasing user engagement by 25%.',
      'Built and integrated 15+ RESTful APIs using Node.js, Express.js and TypeScript; designed MongoDB schemas and migrated one project to PostgreSQL with Prisma ORM for type-safe database operations.',
      'Collaborated daily with product and design teams to deliver responsive, pixel-perfect UI components with Tailwind CSS and shadcn-inspired patterns.',
      'Implemented JWT authentication, role-based access control and real-time data syncing; debugged production issues across the full stack to ensure 99.9% reliability.',
      'Participated in Agile sprints, code reviews and CI/CD pipelines on Vercel; introduced performance monitoring with Core Web Vitals.',
    ],
    stack: ['Next.js', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Vercel'],
  },
  {
    role:     'UI Developer Intern',
    company:  'Bluecorp Software Pvt Ltd',
    location: 'Hyderabad',
    period:   'Dec 2023 – Jun 2024',
    type:     'Internship',
    current:  false,
    points: [
      'Shipped responsive UI components used by real customers from day one; built a reusable component library that accelerated feature development by 40%.',
      'Gained production expertise in full-stack JavaScript, API design patterns and NoSQL data modeling while working directly with senior engineers.',
    ],
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="label">03 — Experience</div>
          <h2 className="display-lg mt-3">
            Work History<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div
            className="absolute left-1.75 top-2 bottom-2 w-px hidden md:block"
            style={{
              background: 'linear-gradient(to bottom, var(--accent), var(--border), transparent)',
            }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-8">

                {/* Dot */}
                <div className="relative hidden md:flex flex-col items-center shrink-0 pt-1">
                  <div
                    className="w-4 h-4 rounded-full shrink-0 relative z-10"
                    style={{
                      background:  exp.current ? 'var(--accent)' : 'var(--bg-card)',
                      border:      `2px solid ${exp.current ? 'var(--accent)' : 'var(--border-2)'}`,
                      boxShadow:   exp.current ? '0 0 16px var(--accent-glow)' : 'none',
                    }}
                  >
                    {exp.current && (
                      <span
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{
                          background: 'var(--accent)',
                          opacity:    0.3,
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div
                  className="card rounded-2xl p-7 flex-1"
                  style={{
                    borderColor: exp.current ? 'var(--accent)' : 'var(--border)',
                    boxShadow:   exp.current
                      ? '0 0 0 1px var(--accent-dim), 0 8px 40px var(--accent-dim)'
                      : 'none',
                  }}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3
                        className="text-xl font-bold tracking-tight mb-1"
                        style={{
                          fontFamily: 'var(--font-display)',
                          color:      'var(--text-1)',
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div
                        className="flex items-center gap-2 text-sm"
                        style={{ color: 'var(--text-2)' }}
                      >
                        <span>{exp.company}</span>
                        <span style={{ color: 'var(--text-3)' }}>·</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span
                        className="badge"
                        style={
                          exp.type === 'Full-time'
                            ? {
                                background: 'var(--accent-dim)',
                                border:     '1px solid var(--accent-dim)',
                                color:      'var(--accent)',
                              }
                            : {
                                background: 'var(--bg-2)',
                                border:     '1px solid var(--border)',
                                color:      'var(--text-2)',
                              }
                        }
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: exp.type === 'Full-time' ? 'var(--accent)' : 'var(--text-3)' }}
                        />
                        {exp.type}
                      </span>
                      <span
                        className="text-xs font-medium"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          color:      exp.current ? 'var(--accent)' : 'var(--text-3)',
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="divider mb-5" />

                  {/* Points */}
                  <ul className="flex flex-col gap-3 mb-6">
                    {exp.points.map((point, pi) => (
                      <li key={pi} className="flex gap-3 items-start">
                        <span
                          className="mt-2 w-1 h-1 rounded-full shrink-0"
                          style={{ background: 'var(--accent)' }}
                        />
                        <span
                          className="text-sm leading-7"
                          style={{ color: 'var(--text-2)' }}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech, ti) => (
                      <span
                        key={ti}
                        className="badge badge-muted text-xs"
                        style={{
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}