export default function Stylesheet() {
  return (
    <div style={{minWidth: 2083, background: '#191C25', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div style={{minWidth: 2083, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{background: 'white', justifyContent: 'flex-start', alignItems: 'stretch', display: 'inline-flex', width: '100%'}}>
          <div style={{width: 224, minHeight: '100%', paddingLeft: 24, paddingRight: 24, paddingTop: 32, paddingBottom: 32, background: '#F2F0ED', borderRight: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexShrink: 0}}>
            <div style={{width: 175, height: 76, paddingBottom: 40, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{color: '#191C25', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3.60, wordWrap: 'break-word'}}>EG Studio</div>
              </div>
              <div style={{width: 175, height: 20, paddingTop: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{color: '#BC2814', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.40, wordWrap: 'break-word'}}>Component Library</div>
              </div>
            </div>
            <div style={{alignSelf: 'stretch', height: 500, position: 'relative'}}>
              {[
                'Tokens', 'Typography', 'Buttons', 'Hover States', 'Value Tags',
                'Navigation', 'Section Headings', 'Video Hero', 'Case Study Card',
                'Service Accordion', 'Team Card', 'Partner Carousel', 'Scroll & Motion', 'Dividers'
              ].map((label, i) => (
                <div key={label} style={{width: 175, height: 32, left: 0, top: i * 36, position: 'absolute'}}>
                  <div style={{left: 12, top: 8, position: 'absolute', color: 'rgba(25, 28, 37, 0.55)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word'}}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{alignSelf: 'stretch', paddingTop: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', height: 41, paddingTop: 24, borderTop: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word'}}>↑ Dark version</div>
              </div>
            </div>
            <div style={{alignSelf: 'stretch', flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingTop: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{width: 175, color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px', letterSpacing: 0.12, wordWrap: 'break-word'}}>Internal use only.<br/>Do not share externally.</div>
              </div>
            </div>
          </div>
          <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            {/* Header */}
            <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 40, paddingBottom: 40, borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                  <div style={{width: 71.25, height: 34, position: 'relative', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                    <div style={{left: 17, top: 9, position: 'absolute', color: 'rgba(25, 28, 37, 0.55)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word'}}>Dark</div>
                  </div>
                  <div style={{width: 89.35, height: 34, position: 'relative', background: '#BC2814', outline: '1px #BC2814 solid', outlineOffset: '-1px'}}>
                    <div style={{left: 17, top: 9, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word'}}>Light ✓</div>
                  </div>
                </div>
              </div>
              <div style={{width: 1747, height: 48, paddingTop: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3, wordWrap: 'break-word'}}>Design System — Light Mode</div>
              </div>
              <div style={{width: 1747, height: 71, paddingTop: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{color: '#191C25', fontSize: 56, fontFamily: 'Helvetica Neue', fontWeight: '300', lineHeight: '58.80px', wordWrap: 'break-word'}}>Component Library</div>
              </div>
              <div style={{paddingTop: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{width: 540, maxWidth: 540, position: 'relative'}}>
                  <div style={{color: 'rgba(25, 28, 37, 0.55)', fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '25.60px', letterSpacing: 0.16, wordWrap: 'break-word'}}>
                    Every component used across the EG Studio site. Click <strong>Code</strong> on any preview to see the snippet — hover and click <strong>Copy</strong> on code blocks.
                  </div>
                </div>
              </div>
            </div>

            {/* Color Tokens */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3, wordWrap: 'break-word'}}>Color Tokens</div>
              </div>
              <div style={{alignSelf: 'stretch', height: 648, paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', height: 276, position: 'relative'}}>
                  {[
                    {name: 'EG Red', token: '--eg-red', hex: '#bc2814', bg: '#BC2814', col: 0, row: 0},
                    {name: 'Red Light', token: '--eg-red-light', hex: '#e8391c', bg: '#E8391C', col: 1, row: 0},
                    {name: 'Red Dark', token: '--eg-red-dark', hex: '#8f1e0f', bg: '#8F1E0F', col: 2, row: 0},
                    {name: 'Blue Black', token: '--eg-blue-black', hex: '#191c25', bg: '#191C25', col: 3, row: 0},
                    {name: 'Blue Mid', token: '--eg-blue-mid', hex: '#252a38', bg: '#252A38', col: 4, row: 0},
                    {name: 'Blue Light', token: '--eg-blue-light', hex: '#2e3448', bg: '#2E3448', col: 0, row: 1},
                    {name: 'Sage', token: '--eg-sage', hex: '#9dbeb7', bg: '#9DBEB7', col: 1, row: 1},
                    {name: 'Sage Light', token: '--eg-sage-light', hex: '#c2d8d3', bg: '#C2D8D3', col: 2, row: 1},
                    {name: 'Sage Dark', token: '--eg-sage-dark', hex: '#6d9a92', bg: '#6D9A92', col: 3, row: 1},
                    {name: 'White', token: '--eg-white', hex: '#ffffff', bg: 'white', col: 4, row: 1},
                  ].map(({name, token, hex, bg, col, row}) => (
                    <div key={token} style={{width: 330.20, left: col * 354.20, top: row * 150, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                      <div style={{alignSelf: 'stretch', height: 64, position: 'relative', background: bg, border: '1px rgba(25, 28, 37, 0.08) solid'}} />
                      <div style={{width: 330.20, height: 28, paddingTop: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{color: '#191C25', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', lineHeight: '16px', letterSpacing: 0.12, wordWrap: 'break-word'}}>{name}</div>
                      </div>
                      <div style={{width: 330.20, height: 18, paddingTop: 2, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{color: 'rgba(25, 28, 37, 0.55)', fontSize: 12, fontFamily: 'Menlo', fontWeight: '400', lineHeight: '16px', letterSpacing: 0.12, wordWrap: 'break-word'}}>{token}</div>
                      </div>
                      <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Menlo', fontWeight: '400', lineHeight: '16px', letterSpacing: 0.12, wordWrap: 'break-word'}}>{hex}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 40, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', background: '#F0EEEB', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', height: 274, padding: 20, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                      <div style={{color: '#191C25', fontSize: 12, fontFamily: 'Menlo', fontWeight: '400', lineHeight: '19.50px', wordWrap: 'break-word'}}>
                        {'/* In CSS */'}<br/>
                        {'var(--eg-red)         /* #bc2814 */'}<br/>
                        {'var(--eg-blue-black)  /* #191c25 */'}<br/>
                        {'var(--eg-white)       /* #ffffff */'}<br/>
                        {'var(--eg-sage)        /* #9dbeb7 */'}<br/>
                        <br/>
                        {'/* In Tailwind */'}<br/>
                        {'bg-eg-red          text-eg-red'}<br/>
                        {'bg-eg-blue-black   text-eg-blue-black'}<br/>
                        {'bg-eg-sage         text-eg-sage'}<br/>
                        {'bg-eg-sage-light   text-eg-sage-light'}<br/>
                        {'border-eg-sage/20'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3, wordWrap: 'break-word'}}>Typography — Die Grotesk</div>
              </div>
              <div style={{alignSelf: 'stretch', height: 604.58, paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', height: 109, position: 'relative', borderBottom: '1px rgba(25, 28, 37, 0.08) solid'}}>
                  <div style={{left: 0, top: 59.50, position: 'absolute', color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word'}}>Heading 1</div>
                  <div style={{left: 136, top: 0, position: 'absolute', color: '#191C25', fontSize: 80, fontFamily: 'Helvetica Neue', fontWeight: '300', lineHeight: '84px', wordWrap: 'break-word'}}>Heading 1 — Stories that move brands.</div>
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', height: 77.80, position: 'relative', borderBottom: '1px rgba(25, 28, 37, 0.08) solid'}}>
                    <div style={{left: 0, top: 32, position: 'absolute', color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word'}}>Heading 2</div>
                    <div style={{left: 136, top: 0, position: 'absolute', color: '#191C25', fontSize: 48, fontFamily: 'Helvetica Neue', fontWeight: '300', lineHeight: '52.80px', wordWrap: 'break-word'}}>Heading 2 — Stories that move brands.</div>
                  </div>
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', height: 58.59, position: 'relative', borderBottom: '1px rgba(25, 28, 37, 0.08) solid'}}>
                    <div style={{left: 0, top: 14.50, position: 'absolute', color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word'}}>Heading 3</div>
                    <div style={{left: 136, top: 0, position: 'absolute', color: '#191C25', fontSize: 28, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '33.60px', wordWrap: 'break-word'}}>Heading 3 — Stories that move brands.</div>
                  </div>
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', height: 48.40, position: 'relative', borderBottom: '1px rgba(25, 28, 37, 0.08) solid'}}>
                    <div style={{left: 0, top: 5.50, position: 'absolute', color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word'}}>Heading 4</div>
                    <div style={{left: 136, top: 0, position: 'absolute', color: '#191C25', fontSize: 18, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '23.40px', wordWrap: 'break-word'}}>Heading 4 — Stories that move brands.</div>
                  </div>
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', height: 50.59, position: 'relative', borderBottom: '1px rgba(25, 28, 37, 0.08) solid'}}>
                    <div style={{left: 0, top: 6, position: 'absolute', color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word'}}>Body</div>
                    <div style={{left: 136, top: 0, position: 'absolute', color: 'rgba(25, 28, 37, 0.55)', fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '25.60px', letterSpacing: 0.16, wordWrap: 'break-word'}}>The quick brown fox jumps over the lazy dog.</div>
                  </div>
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', height: 44.20, position: 'relative', borderBottom: '1px rgba(25, 28, 37, 0.08) solid'}}>
                    <div style={{left: 0, top: 1.50, position: 'absolute', color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word'}}>Eyebrow</div>
                    <div style={{left: 136, top: 0, position: 'absolute', color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '19.20px', letterSpacing: 3, wordWrap: 'break-word'}}>Eyebrow Label</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3, wordWrap: 'break-word'}}>Buttons</div>
              </div>
              <div style={{alignSelf: 'stretch', height: 598, paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                {/* Variants on light */}
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px', letterSpacing: 0.12, wordWrap: 'break-word'}}>Variants — on light background</div>
                  <div style={{alignSelf: 'stretch', paddingTop: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', height: 112, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                      <div style={{paddingLeft: 28, paddingRight: 28, paddingTop: 12, paddingBottom: 12, left: 33, top: 33, position: 'absolute', background: '#BC2814', outline: '1px #BC2814 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.40, wordWrap: 'break-word'}}>Primary</div>
                      </div>
                      <div style={{paddingLeft: 28, paddingRight: 28, paddingTop: 12, paddingBottom: 12, left: 180.09, top: 33, position: 'absolute', outline: '1px rgba(25, 28, 37, 0.40) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                        <div style={{textAlign: 'center', color: '#191C25', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.40, wordWrap: 'break-word'}}>Outline</div>
                      </div>
                      <div style={{paddingLeft: 28, paddingRight: 28, paddingTop: 12, paddingBottom: 12, left: 323.80, top: 33, position: 'absolute', background: '#9DBEB7', outline: '1px #9DBEB7 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                        <div style={{textAlign: 'center', color: '#191C25', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.40, wordWrap: 'break-word'}}>Sage</div>
                      </div>
                      <div style={{paddingLeft: 28, paddingRight: 28, paddingTop: 12, paddingBottom: 12, left: 441.26, top: 33, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                        <div style={{textAlign: 'center', color: '#191C25', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.40, wordWrap: 'break-word'}}>Ghost</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Variants on dark */}
                <div style={{width: 1747, height: 190, paddingTop: 40, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px', letterSpacing: 0.12, wordWrap: 'break-word'}}>Variants — on dark background</div>
                  <div style={{alignSelf: 'stretch', paddingTop: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', height: 112, position: 'relative', background: '#191C25', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                      <div style={{paddingLeft: 28, paddingRight: 28, paddingTop: 12, paddingBottom: 12, left: 33, top: 33, position: 'absolute', background: '#BC2814', outline: '1px #BC2814 solid', outlineOffset: '-1px', display: 'inline-flex', alignItems: 'center'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.40, wordWrap: 'break-word'}}>Primary</div>
                      </div>
                      <div style={{paddingLeft: 28, paddingRight: 28, paddingTop: 12, paddingBottom: 12, left: 180.09, top: 33, position: 'absolute', outline: '1px rgba(255, 255, 255, 0.40) solid', outlineOffset: '-1px', display: 'inline-flex', alignItems: 'center'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.40, wordWrap: 'break-word'}}>Outline</div>
                      </div>
                      <div style={{paddingLeft: 28, paddingRight: 28, paddingTop: 12, paddingBottom: 12, left: 323.80, top: 33, position: 'absolute', background: '#9DBEB7', outline: '1px #9DBEB7 solid', outlineOffset: '-1px', display: 'inline-flex', alignItems: 'center'}}>
                        <div style={{textAlign: 'center', color: '#191C25', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.40, wordWrap: 'break-word'}}>Sage</div>
                      </div>
                      <div style={{paddingLeft: 28, paddingRight: 28, paddingTop: 12, paddingBottom: 12, left: 441.26, top: 33, position: 'absolute', display: 'inline-flex', alignItems: 'center'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.40, wordWrap: 'break-word'}}>Ghost</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sizes */}
                <div style={{width: 1747, height: 202, paddingTop: 40, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px', letterSpacing: 0.12, wordWrap: 'break-word'}}>Sizes</div>
                  <div style={{alignSelf: 'stretch', paddingTop: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', height: 124, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                      <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 33, top: 33, position: 'absolute', background: '#BC2814', display: 'inline-flex', alignItems: 'center'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word'}}>Small</div>
                      </div>
                      <div style={{paddingLeft: 28, paddingRight: 28, paddingTop: 12, paddingBottom: 12, left: 129.23, top: 33, position: 'absolute', background: '#BC2814', display: 'inline-flex', alignItems: 'center'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.40, wordWrap: 'break-word'}}>Medium</div>
                      </div>
                      <div style={{paddingLeft: 40, paddingRight: 40, paddingTop: 16, paddingBottom: 16, left: 269.45, top: 33, position: 'absolute', background: '#BC2814', display: 'inline-flex', alignItems: 'center'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '24px', letterSpacing: 1.60, wordWrap: 'break-word'}}>Large</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover States */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Hover &amp; Rollover States</div>
              </div>
              <div style={{alignSelf: 'stretch', paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px', letterSpacing: 0.12, wordWrap: 'break-word'}}>Button — rest vs hover for each variant</div>
                <div style={{alignSelf: 'stretch', paddingTop: 20}}>
                  <div style={{alignSelf: 'stretch', height: 170, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                    {/* Primary */}
                    <div style={{left: 33, top: 33, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                      <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Primary</div>
                      <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                          <div style={{width: 40, color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px'}}>Rest</div>
                          <div style={{width: 104.64, height: 34, background: '#BC2814', outline: '1px #BC2814 solid', outlineOffset: '-1px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{color: 'white', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Primary</div>
                          </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                          <div style={{width: 40, color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px'}}>Hover</div>
                          <div style={{width: 104.64, height: 34, background: '#8F1E0F', outline: '1px #8F1E0F solid', outlineOffset: '-1px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{color: 'white', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Primary</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Outline */}
                    <div style={{left: 229.64, top: 33, position: 'absolute', flexDirection: 'column', gap: 12, display: 'inline-flex'}}>
                      <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Outline</div>
                      <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                          <div style={{width: 40, color: 'rgba(25, 28, 37, 0.35)', fontSize: 12}}>Rest</div>
                          <div style={{width: 101.75, height: 34, outline: '1px rgba(25, 28, 37, 0.15) solid', outlineOffset: '-1px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{color: '#191C25', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Outline</div>
                          </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                          <div style={{width: 40, color: 'rgba(25, 28, 37, 0.35)', fontSize: 12}}>Hover</div>
                          <div style={{width: 101.75, height: 34, outline: '1px #6D9A92 solid', outlineOffset: '-1px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{color: '#191C25', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Outline</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Sage */}
                    <div style={{left: 423.39, top: 33, position: 'absolute', flexDirection: 'column', gap: 12, display: 'inline-flex'}}>
                      <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Sage</div>
                      <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                          <div style={{width: 40, color: 'rgba(25, 28, 37, 0.35)', fontSize: 12}}>Rest</div>
                          <div style={{width: 79.25, height: 34, background: '#9DBEB7', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{color: '#191C25', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Sage</div>
                          </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                          <div style={{width: 40, color: 'rgba(25, 28, 37, 0.35)', fontSize: 12}}>Hover</div>
                          <div style={{width: 79.25, height: 34, background: '#C2D8D3', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{color: '#191C25', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Sage</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nav links */}
                <div style={{width: 1747, paddingTop: 40}}>
                  <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px', letterSpacing: 0.12}}>Nav links — rest / hover / active</div>
                  <div style={{paddingTop: 20}}>
                    <div style={{padding: 32, background: 'white', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px', display: 'inline-flex', gap: 40}}>
                      {[
                        {label: 'Rest', color: 'rgba(25, 28, 37, 0.55)'},
                        {label: 'Hover', color: '#191C25'},
                        {label: 'Active', color: '#BC2814'},
                      ].map(({label, color}) => (
                        <div key={label} style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                          <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>{label}</div>
                          <div style={{color, fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Work</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Tags */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Value Tags</div>
              </div>
              <div style={{alignSelf: 'stretch', paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden', flexDirection: 'column', gap: 40, display: 'flex'}}>
                <div>
                  <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px', letterSpacing: 0.12}}>Interaction states — hover any live tag below to see the transition</div>
                  <div style={{paddingTop: 20}}>
                    <div style={{height: 199.50, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                      {/* Default tag */}
                      <div style={{left: 33, top: 33, position: 'absolute', display: 'inline-flex', flexDirection: 'column', gap: 12}}>
                        <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>① Default</div>
                        <div style={{height: 30, paddingLeft: 16, paddingRight: 16, paddingTop: 6, paddingBottom: 6, outline: '1px rgba(25, 28, 37, 0.15) solid', outlineOffset: '-1px', display: 'inline-flex', alignItems: 'center', gap: 6}}>
                          <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Creative</div>
                        </div>
                      </div>
                      {/* Hover tag */}
                      <div style={{left: 191.52, top: 33, position: 'absolute', display: 'inline-flex', flexDirection: 'column', gap: 12}}>
                        <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>② Hover</div>
                        <div style={{height: 30, paddingLeft: 16, paddingRight: 16, paddingTop: 6, paddingBottom: 6, outline: '1px #6D9A92 solid', outlineOffset: '-1px', display: 'inline-flex', alignItems: 'center', gap: 6}}>
                          <div style={{color: '#191C25', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Creative</div>
                        </div>
                      </div>
                      {/* Active tag */}
                      <div style={{left: 350, top: 32.64, position: 'absolute', display: 'inline-flex', flexDirection: 'column', gap: 12}}>
                        <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>③ Active / Open</div>
                        <div>
                          <div style={{height: 30, paddingLeft: 16, paddingRight: 16, paddingTop: 6, paddingBottom: 6, background: '#BC2814', outline: '1px #BC2814 solid', outlineOffset: '-1px', display: 'inline-flex', alignItems: 'center', gap: 6}}>
                            <div style={{color: 'white', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Creative</div>
                          </div>
                          <div style={{paddingTop: 4}}>
                            <div style={{maxWidth: 320, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                              <div style={{color: 'rgba(25, 28, 37, 0.55)', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '22.75px', wordWrap: 'break-word'}}>We bring this value to every project we take on.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* All 8 values */}
                <div>
                  <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px', letterSpacing: 0.12}}>All 8 values — click any to expand description</div>
                  <div style={{paddingTop: 12}}>
                    <div style={{height: 96, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                      {['Fun', 'Collaborative', 'Transparent', 'Creative', 'Client-Centric', 'Caring', 'Innovative', 'Respectful'].reduce<{ el: JSX.Element[], left: number }>(({el, left}, label) => {
                        const width = label.length * 7 + 56;
                        el.push(
                          <div key={label} style={{height: 30, paddingLeft: 16, paddingRight: 16, paddingTop: 6, paddingBottom: 6, left, top: 33, position: 'absolute', outline: '1px rgba(25, 28, 37, 0.15) solid', outlineOffset: '-1px', display: 'inline-flex', alignItems: 'center', gap: 6}}>
                            <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>{label}</div>
                          </div>
                        );
                        return {el, left: left + width + 8};
                      }, {el: [], left: 33}).el}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Navigation</div>
              </div>
              <div style={{alignSelf: 'stretch', paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden', flexDirection: 'column', gap: 40, display: 'flex'}}>
                <div>
                  <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px', letterSpacing: 0.12}}>NavBar — light surface</div>
                  <div style={{paddingTop: 12}}>
                    <div style={{alignSelf: 'stretch', height: 130, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                      <div style={{height: 64, paddingLeft: 32, paddingRight: 32, left: 33, top: 33, position: 'absolute', background: 'white', boxShadow: '0px 1px 0px rgba(25, 28, 37, 0.06)', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 'calc(100% - 66px)'}}>
                        <div style={{color: '#191C25', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3.60}}>EG Studio</div>
                        <div style={{display: 'flex', gap: 32}}>
                          {['Work', 'What We Do', 'About', 'Contact'].map(link => (
                            <div key={link} style={{color: 'rgba(25, 28, 37, 0.55)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>{link}</div>
                          ))}
                        </div>
                        <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>⌕ Search</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Headings */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Section Headings</div>
              </div>
              <div style={{alignSelf: 'stretch', paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden', flexDirection: 'column', gap: 40, display: 'flex'}}>
                <div>
                  <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, lineHeight: '16px', letterSpacing: 0.12}}>With eyebrow — light</div>
                  <div style={{paddingTop: 12}}>
                    <div style={{height: 150.80, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                      <div style={{left: 33, top: 33, position: 'absolute', display: 'flex', flexDirection: 'column'}}>
                        <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Our Work</div>
                        <div style={{paddingTop: 16, color: '#191C25', fontSize: 48, fontFamily: 'Helvetica Neue', fontWeight: '300', lineHeight: '52.80px'}}>Stories that move brands.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, lineHeight: '16px', letterSpacing: 0.12}}>Centered</div>
                  <div style={{paddingTop: 12}}>
                    <div style={{height: 150.80, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div style={{textAlign: 'center', color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>What We Do</div>
                        <div style={{paddingTop: 16, textAlign: 'center', color: '#191C25', fontSize: 48, fontFamily: 'Helvetica Neue', fontWeight: '300', lineHeight: '52.80px'}}>Strategy meets craft.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Hero */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Video Hero</div>
              </div>
              <div style={{alignSelf: 'stretch', paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden'}}>
                <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, lineHeight: '16px', letterSpacing: 0.12}}>2/3vh edge-to-edge — always dark overlay</div>
                <div style={{paddingTop: 12}}>
                  <div style={{height: 326, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                    <div style={{height: 260, padding: 32, left: 33, top: 33, right: 33, position: 'absolute', background: 'linear-gradient(180deg, rgba(25, 28, 37, 0.30) 0%, rgba(25, 28, 37, 0.70) 100%), linear-gradient(135deg, #191C25 0%, #252A38 50%, #191C25 100%)', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                      <div style={{paddingBottom: 12, color: '#9DBEB7', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Graphic Design Agency</div>
                      <div style={{paddingBottom: 16, color: 'white', fontSize: 48, fontFamily: 'Helvetica Neue', fontWeight: '300', lineHeight: '52.80px'}}>Stories that move people.</div>
                      <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: '#BC2814', display: 'inline-flex'}}>
                        <div style={{color: 'white', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>See Our Work</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Card */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Case Study Card</div>
              </div>
              <div style={{alignSelf: 'stretch', paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden'}}>
                <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, lineHeight: '16px', letterSpacing: 0.12}}>Left layout — light surface</div>
                <div style={{paddingTop: 12}}>
                  <div style={{height: 312.59, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                    <div style={{position: 'absolute', left: 33, top: 33, right: 33, height: 246.59, overflow: 'hidden', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px', display: 'flex'}}>
                      <div style={{width: '50%', background: 'linear-gradient(135deg, #C2D8D3 0%, #F7F6F4 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{color: 'rgba(157, 190, 183, 0.40)', fontSize: 80, fontFamily: 'Helvetica Neue', fontWeight: '300', lineHeight: '120px'}}>01</div>
                      </div>
                      <div style={{width: '50%', padding: 32, background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <div style={{paddingBottom: 12, color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Acme Corp</div>
                        <div style={{paddingBottom: 12, color: '#191C25', fontSize: 28, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '33.60px'}}>Redefining a Legacy Brand</div>
                        <div style={{paddingBottom: 20, color: 'rgba(25, 28, 37, 0.55)', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '20px', letterSpacing: 0.14}}>A full identity overhaul connecting decades of heritage to a new generation.</div>
                        <div style={{display: 'flex', gap: 8, marginBottom: 20}}>
                          {['Fun', 'Creative', 'Innovative'].map(tag => (
                            <div key={tag} style={{height: 30, paddingLeft: 16, paddingRight: 16, display: 'flex', alignItems: 'center', outline: '1px rgba(25, 28, 37, 0.15) solid', outlineOffset: '-1px'}}>
                              <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>{tag}</div>
                            </div>
                          ))}
                        </div>
                        <div style={{borderBottom: '1px rgba(25, 28, 37, 0.08) solid'}}>
                          <div style={{color: '#191C25', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>View Case Study →</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Accordion */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Service Accordion</div>
              </div>
              <div style={{alignSelf: 'stretch', paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden'}}>
                <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, lineHeight: '16px', letterSpacing: 0.12}}>Category + expandable items with deliverable pills</div>
                <div style={{paddingTop: 12}}>
                  <div style={{height: 347, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                    <div style={{position: 'absolute', left: 33, top: 33, right: 33, display: 'flex', flexDirection: 'column'}}>
                      {/* Open item */}
                      <div style={{borderBottom: '1px rgba(25, 28, 37, 0.08) solid'}}>
                        <div style={{paddingTop: 20, paddingBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                          <div style={{color: '#BC2814', fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: '500', lineHeight: '24px', letterSpacing: 0.80}}>Brand Strategy</div>
                          <div style={{color: '#6D9A92', fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: '500', lineHeight: '24px', letterSpacing: 0.80}}>−</div>
                        </div>
                        <div style={{paddingBottom: 24}}>
                          <div style={{color: 'rgba(25, 28, 37, 0.55)', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '20px', letterSpacing: 0.14}}>Positioning, audience research, and messaging frameworks.</div>
                          <div style={{paddingTop: 16, display: 'flex', gap: 8}}>
                            {['Positioning', 'Personas', 'Messaging'].map(pill => (
                              <div key={pill} style={{height: 26, paddingLeft: 13, paddingRight: 13, display: 'flex', alignItems: 'center', outline: '1px rgba(25, 28, 37, 0.15) solid', outlineOffset: '-1px'}}>
                                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>{pill}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Closed items */}
                      {['Visual Identity', 'Campaign Design'].map(item => (
                        <div key={item} style={{borderBottom: '1px rgba(25, 28, 37, 0.08) solid'}}>
                          <div style={{paddingTop: 20, paddingBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div style={{color: '#191C25', fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: '500', lineHeight: '24px', letterSpacing: 0.80}}>{item}</div>
                            <div style={{color: '#6D9A92', fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: '500', lineHeight: '24px', letterSpacing: 0.80}}>+</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Card */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Team Card</div>
              </div>
              <div style={{alignSelf: 'stretch', paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden'}}>
                <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, lineHeight: '16px', letterSpacing: 0.12}}>Hover for bio overlay</div>
                <div style={{paddingTop: 12}}>
                  <div style={{height: 367.59, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                    <div style={{position: 'absolute', left: 33, top: 33, display: 'flex', gap: 16}}>
                      {[
                        {initial: 'A', name: 'Alex Rivera', role: 'Creative Director'},
                        {initial: 'J', name: 'Jordan Kim', role: 'Brand Strategist'},
                        {initial: 'S', name: 'Sam Okafor', role: 'Art Director'},
                      ].map(({initial, name, role}) => (
                        <div key={name} style={{width: 200, overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
                          <div style={{height: 240, background: 'linear-gradient(160deg, #C2D8D3 0%, #F7F6F4 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{color: '#6D9A92', fontSize: 48, fontFamily: 'Helvetica Neue', fontWeight: '300', lineHeight: '48px', opacity: 0.50}}>{initial}</div>
                          </div>
                          <div style={{paddingTop: 16, display: 'flex', flexDirection: 'column'}}>
                            <div style={{color: '#191C25', fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '25.60px', letterSpacing: 0.16}}>{name}</div>
                            <div style={{paddingTop: 4, color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>{role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Carousel */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Partner Carousel</div>
              </div>
              <div style={{alignSelf: 'stretch', paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden'}}>
                <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, lineHeight: '16px', letterSpacing: 0.12}}>Infinite scroll — light surface</div>
                <div style={{paddingTop: 12}}>
                  <div style={{height: 132, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                    <div style={{position: 'absolute', left: 33, top: 33, right: 33, height: 66, borderTop: '1px rgba(25, 28, 37, 0.08) solid', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
                      <div style={{display: 'flex', gap: 64, paddingLeft: 24}}>
                        {['Acme Corp', 'Studio North', 'Forma', 'Parallax', 'Wren & Co', 'Lux', 'Acme Corp', 'Studio North', 'Forma', 'Parallax'].map((name, i) => (
                          <div key={i} style={{color: 'rgba(25, 28, 37, 0.25)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, whiteSpace: 'nowrap'}}>{name}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll & Motion */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Scroll &amp; Motion Utilities</div>
              </div>
              <div style={{alignSelf: 'stretch', paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden'}}>
                <div style={{background: '#F0EEEB', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                  <div style={{padding: 20, overflow: 'hidden'}}>
                    <div style={{color: '#191C25', fontSize: 12, fontFamily: 'Menlo', fontWeight: '400', lineHeight: '19.50px'}}>
                      {"import { ScrollReveal, StaggerReveal, StaggerItem } from '@/components/brand';"}<br/>
                      <br/>
                      {'// Single reveal'}<br/>
                      {'<ScrollReveal delay={0.2} direction="up">'}<br/>
                      {'  <h2>Revealed on scroll</h2>'}<br/>
                      {'</ScrollReveal>'}<br/>
                      <br/>
                      {'// Staggered list'}<br/>
                      {'<StaggerReveal>'}<br/>
                      {'  {items.map(item => ('}<br/>
                      {'    <StaggerItem key={item.id}>'}<br/>
                      {'      <Card {...item} />'}<br/>
                      {'    </StaggerItem>'}<br/>
                      {'  ))}'}<br/>
                      {'</StaggerReveal>'}
                    </div>
                  </div>
                </div>
                <div style={{paddingTop: 48}}>
                  <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>Directions available</div>
                  <div style={{paddingTop: 16, display: 'flex', gap: 8}}>
                    {['up', 'down', 'left', 'right', 'none'].map(dir => (
                      <div key={dir} style={{height: 34, paddingLeft: 17, paddingRight: 17, display: 'flex', alignItems: 'center', outline: '1px rgba(25, 28, 37, 0.15) solid', outlineOffset: '-1px'}}>
                        <div style={{color: 'rgba(25, 28, 37, 0.55)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20}}>{dir}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dividers */}
            <div style={{alignSelf: 'stretch', borderBottom: '1px rgba(25, 28, 37, 0.08) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 28}}>
                <div style={{color: '#6D9A92', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '500', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 3}}>Dividers &amp; Accents</div>
              </div>
              <div style={{alignSelf: 'stretch', paddingBottom: 56, paddingLeft: 56, paddingRight: 56, overflow: 'hidden'}}>
                <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, lineHeight: '16px', letterSpacing: 0.12}}>Divider variants + RedAccent</div>
                <div style={{paddingTop: 12}}>
                  <div style={{height: 239, position: 'relative', background: '#F7F6F4', outline: '1px rgba(25, 28, 37, 0.08) solid', outlineOffset: '-1px'}}>
                    <div style={{position: 'absolute', left: 33, top: 33, right: 33, display: 'flex', flexDirection: 'column', gap: 0}}>
                      {[
                        {label: 'sage', color: 'rgba(157, 190, 183, 0.35)', height: 1},
                        {label: 'red', color: '#BC2814', height: 1},
                        {label: 'dark', color: 'rgba(25, 28, 37, 0.12)', height: 1},
                      ].map(({label, color, height}) => (
                        <div key={label} style={{paddingTop: 24}}>
                          <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px', letterSpacing: 0.12}}>{label}</div>
                          <div style={{paddingTop: 8}}>
                            <div style={{height, background: color}} />
                          </div>
                        </div>
                      ))}
                      <div style={{paddingTop: 24}}>
                        <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px', letterSpacing: 0.12}}>RedAccent (under heading)</div>
                        <div style={{paddingTop: 8}}>
                          <div style={{width: 48, height: 2, background: '#BC2814'}} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{alignSelf: 'stretch', paddingLeft: 56, paddingRight: 56, paddingTop: 40, paddingBottom: 40, borderTop: '1px rgba(25, 28, 37, 0.08) solid'}}>
              <div style={{color: 'rgba(25, 28, 37, 0.35)', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: '16px', wordWrap: 'break-word'}}>EG Studio Component Library — Internal use only</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
