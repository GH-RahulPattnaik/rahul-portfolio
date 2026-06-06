'use client';

import { useState } from 'react';

const contactLinks = [
  {
    label: 'Email',
    value: 'rpattnaik2001@gmail.com',
    href:  'mailto:rpattnaik2001@gmail.com',
    icon:  '✉',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rahul-pattnaik-9016241b0/',
    href:  'https://www.linkedin.com/in/rahul-pattnaik-9016241b0/',
    icon:  '⬡',
  },
  {
    label: 'GitHub',
    value: 'github.com/GH-RahulPattnaik',
    href:  'https://github.com/GH-RahulPattnaik',
    icon:  '◈',
  },
  {
    label: 'Location',
    value: 'Berhampur, Odisha · Remote OK',
    href:  '',
    icon:  '◎',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('rpattnaik2001@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="label">05 — Contact</div>
          <h2 className="display-lg mt-3">
            Get In Touch<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — message + CTA */}
          <div className="flex flex-col gap-8">

            {/* Heading */}
            <div>
              <p className="text-base leading-8 mb-4" style={{ color: 'var(--text-2)' }}>
                I&apos;m currently open to{' '}
                <span className="font-semibold" style={{ color: 'var(--text-1)' }}>
                  full-time remote roles
                </span>{' '}
                and select freelance projects. If you have a high-ownership
                position in a product team — or just want to talk tech —
                my inbox is open.
              </p>
              <p className="text-base leading-8" style={{ color: 'var(--text-2)' }}>
                Targeting roles in{' '}
                <span className="font-semibold" style={{ color: 'var(--accent)' }}>
                  Pune · Remote · WFH
                </span>{' '}
                with a minimum of{' '}
                <span className="font-bold" style={{ color: 'var(--text-1)' }}>
                  24 LPA
                </span>
                . Immediately available for remote — 1–2 months notice for on-site.
              </p>
            </div>

            {/* Email copy */}
            <div
              className="flex items-stretch rounded-xl overflow-hidden"
              style={{ border: '1px solid var(--border-2)' }}
            >
              <div
                className="flex-1 px-4 py-3 text-sm"
                style={{
                  fontFamily:  'var(--font-mono)',
                  color:       'var(--text-2)',
                  background:  'var(--bg-card)',
                  borderRight: '1px solid var(--border)',
                }}
              >
                rpattnaik2001@gmail.com
              </div>
              <button
                onClick={copyEmail}
                className="px-4 py-3 text-xs font-medium transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily:  'var(--font-mono)',
                  background:  copied ? 'var(--accent-dim)' : 'transparent',
                  color:       copied ? 'var(--accent)' : 'var(--text-3)',
                  border:      'none',
                  whiteSpace:  'nowrap',
                }}
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="mailto:rpattnaik2001@gmail.com"
                className="btn btn-solid"
              >
                Send Email ↗
              </a>
              <a
                href="/Rahul_Pattnaik_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Download CV ↗
              </a>
            </div>

            {/* Availability card */}
            <div
              className="rounded-xl p-4 flex items-center gap-3"
              style={{
                background: 'var(--accent-dim)',
                border:     '1px solid var(--accent-dim)',
              }}
            >
              <div className="relative shrink-0">
                <span
                  className="w-2.5 h-2.5 rounded-full block"
                  style={{ background: 'var(--accent)' }}
                />
                <span
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: 'var(--accent)', opacity: 0.4 }}
                />
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-2)' }}
              >
                <span className="font-semibold" style={{ color: 'var(--accent)' }}>
                  Available now
                </span>{' '}
                for remote roles · 1–2 months notice for on-site ·{' '}
                <span style={{ color: 'var(--text-1)' }}>Min 24 LPA</span>
              </p>
            </div>
          </div>

          {/* Right — contact links card */}
          <div className="card rounded-2xl overflow-hidden">

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
                contact.info
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

            {/* Links */}
            <div className="p-6 flex flex-col">
              {contactLinks.map((link, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-4"
                  style={{
                    borderBottom: i < contactLinks.length - 1
                      ? '1px solid var(--border)'
                      : 'none',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base shrink-0"
                    style={{
                      background: 'var(--accent-dim)',
                      color:      'var(--accent)',
                      border:     '1px solid var(--accent-dim)',
                    }}
                  >
                    {link.icon}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <span
                      className="text-xs tracking-widest uppercase mb-0.5"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color:      'var(--text-3)',
                      }}
                    >
                      {link.label}
                    </span>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="text-sm font-medium truncate transition-colors duration-200 no-underline"
                        style={{ color: 'var(--text-1)' }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)';
                        }}
                      >
                        {link.value}
                      </a>
                    ) : (
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--text-1)' }}
                      >
                        {link.value}
                      </span>
                    )}
                  </div>

                  {/* Arrow */}
                  {link.href && (
                    <span
                      className="text-sm shrink-0"
                      style={{ color: 'var(--text-3)' }}
                    >
                      ↗
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}