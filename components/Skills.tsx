'use client';

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript',        level: 85 },
      { name: 'HTML5 / CSS3',      level: 92 },
      { name: 'SQL',               level: 70 },
      { name: 'Python (basics)',   level: 45 },
    ],
  },
  {
    category: 'Frontend',
    icon: '</>',
    skills: [
      { name: 'Next.js 14+',       level: 90 },
      { name: 'React.js',          level: 88 },
      { name: 'Tailwind CSS v4',   level: 92 },
      { name: 'Framer Motion',     level: 68 },
      { name: 'shadcn/ui',         level: 75 },
    ],
  },
  {
    category: 'Backend',
    icon: '~/.',
    skills: [
      { name: 'Node.js',           level: 82 },
      { name: 'Express.js',        level: 80 },
      { name: 'RESTful APIs',      level: 88 },
      { name: 'JWT / RBAC',        level: 78 },
      { name: 'Server Actions',    level: 75 },
    ],
  },
  {
    category: 'Database',
    icon: '[ ]',
    skills: [
      { name: 'MongoDB',           level: 82 },
      { name: 'PostgreSQL',        level: 72 },
      { name: 'Prisma ORM',        level: 74 },
      { name: 'MongoDB Atlas',     level: 78 },
      { name: 'Aggregation',       level: 65 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '>>',
    skills: [
      { name: 'Git / GitHub',      level: 88 },
      { name: 'Vercel / CI-CD',    level: 82 },
      { name: 'Core Web Vitals',   level: 75 },
      { name: 'Docker (basics)',   level: 50 },
      { name: 'Sentry (basics)',   level: 50 },
    ],
  },
  {
    category: 'AI / Mobile',
    icon: '**',
    skills: [
      { name: 'OpenAI API',        level: 75 },
      { name: 'Prompt Engineering',level: 78 },
      { name: 'Flutter',           level: 60 },
      { name: 'Hugging Face',      level: 40 },
    ],
  },
];

const coreTags = [
  'Full-stack Ownership',
  'SSR / SSG / App Router',
  'Server Components',
  'Performance Optimization',
  'Production Debugging',
  'Agile / Sprints',
  'AI-integrated Products',
  'Mobile App (Flutter)',
  'Responsive Design',
  'REST API Design',
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="label">02 — Skills</div>
          <h2 className="display-lg mt-3">
            Tech Stack<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {skillGroups.map((group, gi) => (
            <div key={gi} className="card rounded-2xl p-6">

              {/* Card header */}
              <div
                className="flex items-center gap-3 mb-6 pb-4"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                  style={{
                    fontFamily:  'var(--font-mono)',
                    background:  'var(--accent-dim)',
                    color:       'var(--accent)',
                    border:      '1px solid var(--accent-dim)',
                  }}
                >
                  {group.icon}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color:      'var(--text-1)',
                  }}
                >
                  {group.category}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-4">
                {group.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="text-xs"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          color:      'var(--text-2)',
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-xs font-medium"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          color:      'var(--accent)',
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Bar */}
                    <div
                      className="w-full h-1 rounded-full overflow-hidden"
                      style={{ background: 'var(--border-2)' }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width:      `${skill.level}%`,
                          background: 'var(--accent)',
                          boxShadow:  '0 0 8px var(--accent-glow)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core concepts */}
        <div
          className="card rounded-2xl p-6"
        >
          <div
            className="text-xs tracking-widest uppercase mb-4"
            style={{
              fontFamily: 'var(--font-mono)',
              color:      'var(--text-3)',
            }}
          >
            Core Concepts & Practices
          </div>
          <div className="flex flex-wrap gap-2">
            {coreTags.map((tag, i) => (
              <span
                key={i}
                className="badge"
                style={
                  i % 2 === 0
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
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}