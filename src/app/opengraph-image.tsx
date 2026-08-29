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
        color: '#181818',
        background: '#fafaf8',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #d8d8d3',
          paddingBottom: '18px',
          fontSize: '22px',
          fontWeight: 600,
        }}
      >
        <span>Tyler James-Bridges</span>
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
          Software Engineer III
        </div>
        <div
          style={{
            marginTop: '32px',
            fontSize: '30px',
            lineHeight: 1.35,
            color: '#5b574f',
          }}
        >
          Weedmaps
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '1px solid #d8d8d3',
          paddingTop: '18px',
          fontSize: '18px',
          color: '#626262',
        }}
      >
        <span>
          Developer tooling · Test infrastructure · CI · Internal services
        </span>
        <span>tylerjb.dev</span>
      </div>
    </div>,
    size
  );
}
