'use client';

import Image from 'next/image';

const facts = [
  { label: 'Name',     value: 'Rahul Pattnaik' },
  { label: 'Role',     value: 'Full Stack Developer' },
  { label: 'Company',  value: 'Bluecorp Software Pvt Ltd' },
  { label: 'Location', value: 'Berhampur, Odisha' },
  { label: 'Exp',      value: '2.5+ Years' },
  { label: 'Status',   value: 'Open to Work ✦' },
];

const education = [
  {
    degree: 'B.Tech — Electrical & Computer Engineering',
    school: 'Gandhi Institute for Education & Technology, Khurda',
    year:   '2019 – 2023',
    active: true,
  },
  {
    degree: 'Higher Secondary Education',
    school: 'Sri Kumaran Hr Sec School, Tiruppur',
    year:   '2019',
    active: false,
  },
  {
    degree: 'Matriculation',
    school: 'Bala Bhavan Global School, Tiruppur',
    year:   '2017',
    active: false,
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="label">01 — About Me</div>
          <h2 className="display-lg mt-3">
            Who am I<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
        </div>

        {/* Top grid — bio + facts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Left — bio */}
          <div className="flex flex-col gap-6">

            {/* Avatar + intro */}
            <div className="flex items-center gap-5">
              <div
                className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0"
                style={{ border: '1px solid var(--border-2)' }}
              >
                <Image
                  src="/about-pic.jpg"
                  alt="Rahul Pattnaik"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div
                  className="text-lg font-bold tracking-tight mb-0.5"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color:      'var(--text-1)',
                  }}
                >
                  Rahul Pattnaik
                </div>
                <div
                  className="text-sm"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color:      'var(--accent)',
                  }}
                >
                  Full Stack Developer
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: 'var(--text-3)' }}
                >
                  Berhampur, Odisha · India
                </div>
              </div>
            </div>

            {/* Bio text */}
            <p className="text-base leading-8" style={{ color: 'var(--text-2)' }}>
              I&apos;m a product-minded Full Stack Engineer with{' '}
              <span className="font-semibold" style={{ color: 'var(--text-1)' }}>
                2.5+ years
              </span>{' '}
              of experience shipping real features at{' '}
              <span className="font-semibold" style={{ color: 'var(--accent)' }}>
                Bluecorp Software
              </span>
              . I work across the entire stack — designing schemas, building APIs,
              and crafting pixel-perfect UIs.
            </p>

            <p className="text-base leading-8" style={{ color: 'var(--text-2)' }}>
              I actively integrate{' '}
              <span className="font-semibold" style={{ color: 'var(--text-1)' }}>
                OpenAI APIs
              </span>{' '}
              into products and explore AI-powered tooling. Outside work I build
              side projects and am always chasing roles where{' '}
              <span className="font-semibold" style={{ color: 'var(--accent)' }}>
                speed, quality and impact
              </span>{' '}
              matter.
            </p>

            {/* Languages */}
            <div>
              <div
                className="text-xs tracking-widest uppercase mb-3"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color:      'var(--text-3)',
                }}
              >
                Languages Spoken
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { lang: 'English', level: 'Professional' },
                  { lang: 'Odia',    level: 'Native' },
                  { lang: 'Hindi',   level: 'Conversational' },
                  { lang: 'Tamil',   level: 'Professional' },
                ].map((l, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm"
                    style={{
                      background:  'var(--bg-card)',
                      border:      '1px solid var(--border)',
                      color:       'var(--text-2)',
                      fontFamily:  'var(--font-body)',
                    }}
                  >
                    <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>◆</span>
                    <span className="font-medium" style={{ color: 'var(--text-1)' }}>
                      {l.lang}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: 'var(--text-3)' }}
                    >
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — facts card */}
          <div
            className="card rounded-2xl overflow-hidden"
          >
            {/* Card header */}
            <div
              className="px-6 py-4 flex items-center justify-between"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color:      'var(--text-3)',
                }}
              >
                quick.info
              </span>
              <div className="flex items-center gap-1.5">
                {['#EF4444', '#F59E0B', '#22C55E'].map((c, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: c, opacity: 0.7 }}
                  />
                ))}
              </div>
            </div>

            {/* Facts list */}
            <div className="px-6 py-5 flex flex-col gap-4">
              {facts.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 pb-4"
                  style={{
                    borderBottom: i < facts.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <span
                    className="text-xs tracking-wider uppercase"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color:      'var(--text-3)',
                      minWidth:   '70px',
                    }}
                  >
                    {f.label}
                  </span>
                  <span
                    className="text-sm font-medium text-right"
                    style={{
                      color:      f.label === 'Status' ? 'var(--accent)' : 'var(--text-1)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div
            className="text-xs tracking-widest uppercase mb-6"
            style={{
              fontFamily: 'var(--font-mono)',
              color:      'var(--text-3)',
            }}
          >
            Education
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="card rounded-2xl p-6"
                style={{
                  borderColor: edu.active ? 'var(--accent)' : 'var(--border)',
                  boxShadow:   edu.active ? '0 0 0 1px var(--accent-dim)' : 'none',
                }}
              >
                <div
                  className="text-xs mb-3 font-medium"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color:      'var(--accent)',
                  }}
                >
                  {edu.year}
                </div>
                <div
                  className="text-sm font-bold mb-1 leading-snug"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color:      'var(--text-1)',
                  }}
                >
                  {edu.degree}
                </div>
                <div
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--text-3)' }}
                >
                  {edu.school}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}