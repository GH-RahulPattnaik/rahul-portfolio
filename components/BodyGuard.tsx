'use client';

export default function BodyGuard({ children }: { children: React.ReactNode }) {
  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      style={{ userSelect: 'none' }}
    >
      {children}
    </div>
  );
}