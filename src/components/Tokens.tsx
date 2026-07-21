const COLOR_TOKENS = [
  { name: 'EG Red',      token: '--eg-red',        hex: '#bc2814', bg: '#BC2814' },
  { name: 'Red Light',   token: '--eg-red-light',   hex: '#e8391c', bg: '#E8391C' },
  { name: 'Red Dark',    token: '--eg-red-dark',    hex: '#8f1e0f', bg: '#8F1E0F' },
  { name: 'Blue Black',  token: '--eg-blue-black',  hex: '#191c25', bg: '#191C25' },
  { name: 'Blue Mid',    token: '--eg-blue-mid',    hex: '#252a38', bg: '#252A38' },
  { name: 'Blue Light',  token: '--eg-blue-light',  hex: '#2e3448', bg: '#2E3448' },
  { name: 'Sage',        token: '--eg-sage',        hex: '#9dbeb7', bg: '#9DBEB7' },
  { name: 'Sage Light',  token: '--eg-sage-light',  hex: '#c2d8d3', bg: '#C2D8D3' },
  { name: 'Sage Dark',   token: '--eg-sage-dark',   hex: '#6d9a92', bg: '#6D9A92' },
  { name: 'White',       token: '--eg-white',       hex: '#ffffff', bg: 'white' },
];

export default function Tokens() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {COLOR_TOKENS.map(({ name, token, hex, bg }) => (
        <div key={token} style={{ display: 'flex', flexDirection: 'column', width: 160 }}>
          <div style={{ height: 64, background: bg, border: '1px rgba(25, 28, 37, 0.08) solid' }} />
          <div style={{ paddingTop: 12, color: '#191C25', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: 500, lineHeight: '16px' }}>{name}</div>
          <div style={{ paddingTop: 2, color: 'rgba(25, 28, 37, 0.55)', fontSize: 12, fontFamily: 'Menlo', fontWeight: 400, lineHeight: '16px' }}>{token}</div>
          <div style={{ color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Menlo', fontWeight: 400, lineHeight: '16px' }}>{hex}</div>
        </div>
      ))}
    </div>
  );
}
