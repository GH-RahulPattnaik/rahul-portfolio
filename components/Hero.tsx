'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const roles = [
  'Full Stack Developer',
  'Next.js Engineer',
  'UI Developer',
  'Flutter Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting]   = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 65);
      return () => clearTimeout(t);
    }
    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 35);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(r => (r + 1) % roles.length);
    }
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-16 overflow-hidden"
    >
      {/* Background accent blob */}
      <div
        className="absolute top-1/4 right-0 w-150 h-150 rounded-full pointer-events-none opacity-[0.04] blur-[120px]"
        style={{ background: 'var(--accent)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-100 h-100 rounded-full pointer-events-none opacity-[0.03] blur-[100px]"
        style={{ background: 'var(--accent)' }}
      />

      <div className="max-w-280 mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* Left */}
          <div>

            {/* Available badge */}
            <div className="animate-fade-up flex items-center gap-2 mb-8 w-fit">
              <span
                className="relative flex h-2 w-2"
              >
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: 'var(--accent)' }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: 'var(--accent)' }}
                />
              </span>
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color:      'var(--text-2)',
                }}
              >
                Available for hire
              </span>
            </div>

            {/* Name */}
            <h1
              className="animate-fade-up delay-1 mb-4 leading-none"
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      'clamp(3rem, 8vw, 6rem)',
                fontWeight:    700,
                letterSpacing: '-0.04em',
                color:         'var(--text-1)',
                lineHeight:    1,
              }}
            >
              Rahul<br />
              <span style={{ color: 'var(--accent)' }}>Pattnaik</span>
            </h1>

            {/* Typewriter */}
            <div
              className="animate-fade-up delay-2 flex items-center gap-2 mb-6"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize:   'clamp(1rem, 2.5vw, 1.25rem)',
                color:      'var(--text-2)',
              }}
            >
              <span style={{ color: 'var(--accent)' }}>~/</span>
              <span>{displayed}</span>
              <span className="cursor-blink" />
            </div>

            {/* Bio */}
            <p
              className="animate-fade-up delay-3 mb-10 max-w-130 text-base leading-8"
              style={{ color: 'var(--text-2)' }}
            >
              2.5+ years building production-grade apps with{' '}
              <span
                className="font-semibold"
                style={{ color: 'var(--text-1)' }}
              >
                Next.js, React & Node.js
              </span>
              . Reduced load times by 30%, shipped 15+ APIs, and integrated
              AI into real products. Open to high-ownership remote roles.
            </p>

            {/* CTA */}
            <div className="animate-fade-up delay-4 flex gap-3 flex-wrap mb-14">
              <a
                href="#projects"
                className="btn btn-solid"
                onClick={e => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects →
              </a>
              <a
                href="#contact"
                className="btn btn-ghost"
                onClick={e => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-up delay-5 flex gap-10 flex-wrap">
              {[
                { value: '2.5+', label: 'Years Exp' },
                { value: '12+',  label: 'Features Shipped' },
                { value: '15+',  label: 'APIs Built' },
                { value: '30%',  label: 'Perf Gain' },
              ].map((stat, i) => (
                <div key={i}>
                  <div
                    className="font-bold leading-none mb-1"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize:   'clamp(1.5rem, 3vw, 2rem)',
                      color:      'var(--accent)',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color:      'var(--text-3)',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="hidden lg:block relative w-70 h-90 shrink-0">

            {/* Accent border frame */}
            <div
              className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
              style={{ border: '2px solid var(--accent)', opacity: 0.3 }}
            />

            {/* Photo */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border-2)' }}
            >
              <Image
                src="/hero-pic.png"
                alt="Rahul Pattnaik"
                fill
                className="object-cover object-top"
                style={{ filter: 'grayscale(15%) contrast(1.05)' }}
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>

            {/* Open to work badge */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full text-xs whitespace-nowrap"
              style={{
                fontFamily:  'var(--font-mono)',
                background:  'var(--bg-card)',
                border:      '1px solid var(--border-2)',
                color:       'var(--text-2)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  background: 'var(--accent)',
                  boxShadow:  '0 0 6px var(--accent)',
                }}
              />
              Open to work
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-[0.6rem] tracking-[0.2em] uppercase"
          style={{
            fontFamily: 'var(--font-mono)',
            color:      'var(--text-3)',
          }}
        >
          scroll
        </span>
        <div
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </div>
    </section>
  );
}