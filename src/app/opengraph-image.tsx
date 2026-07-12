import { ImageResponse } from 'next/og';

export const alt =
  'Tyler James-Bridges — software engineer, former QA, and percussion educator';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '68px 76px',
        color: '#1b1a17',
        background: '#f3efe6',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '2px solid #1b1a17',
          paddingBottom: '18px',
          fontFamily: 'monospace',
          fontSize: '20px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        <span style={{ color: '#0b8a7c' }}>Tyler James-Bridges</span>
        <span>Arizona</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            maxWidth: '950px',
            fontSize: '92px',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.045em',
          }}
        >
          I build tools for people who build software.
        </div>
        <div
          style={{
            marginTop: '32px',
            fontSize: '30px',
            lineHeight: 1.35,
            color: '#5b574f',
          }}
        >
          Tyler James-Bridges · Software Engineer III
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(27,26,23,.25)',
          paddingTop: '18px',
          fontFamily: 'monospace',
          fontSize: '18px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#5b574f',
        }}
      >
        <span>Developer tooling · Playwright · Open source</span>
        <span>tylerjb.dev</span>
      </div>
    </div>,
    size
  );
}
