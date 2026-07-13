import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt =
  'Tyler James-Bridges — Software Engineer — DevEx, QA, agent infrastructure';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#181512',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(244, 241, 236, 0.06), transparent 50%)',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '4px',
              backgroundColor: '#f4f1ec',
              borderRadius: '2px',
              marginRight: '20px',
            }}
          />
          <div
            style={{
              fontSize: '28px',
              color: '#9c948b',
              letterSpacing: '0.08em',
            }}
          >
            tylerjb.dev
          </div>
        </div>
        <div
          style={{
            fontSize: '88px',
            fontWeight: 700,
            color: '#f4f1ec',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '28px',
          }}
        >
          Tyler James-Bridges
        </div>
        <div
          style={{
            fontSize: '36px',
            color: '#9c948b',
            lineHeight: 1.4,
          }}
        >
          Software Engineer — DevEx, QA, agent infrastructure
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
