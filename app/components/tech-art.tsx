export function TechArt() {
  return (
    <div
      className="tech-art"
      role="img"
      aria-label="A developer workspace with Python code, a data chart, and an exploring technology status"
    >
      <div className="art-halo" />
      <div className="orbital orbital-a" />
      <div className="orbital orbital-b" />
      <span className="orbit-spark">✳</span>
      <div className="art-coordinate">IDEAS → CODE → POSSIBILITIES</div>
      <div className="art-cross art-cross-a" aria-hidden="true" />
      <div className="art-cross art-cross-b" aria-hidden="true" />

      <div className="art-stamp" aria-hidden="true">
        <svg viewBox="0 0 220 220">
          <defs>
            <path id="art-stamp-path" d="M110,110 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" />
          </defs>
          <text>
            <textPath href="#art-stamp-path">CURIOSITY · CODE · POSSIBILITY · </textPath>
          </text>
        </svg>
        <span>✳</span>
      </div>

      <div className="main-terminal">
        <div className="terminal-top">
          <div className="terminal-dots">
            <i /><i /><i />
          </div>
          <span>the_next_chapter.py</span>
          <span>↗</span>
        </div>
        <div className="terminal-tabs">
          <span>my_world.py</span>
          <span>curiosity.md</span>
          <span>+</span>
        </div>
        <div className="terminal-code">
          <div><b>01</b><span className="comment"># A little introduction</span></div>
          <div><b>02</b><span className="purple">class</span> <span className="gold">Shristi</span>:</div>
          <div><b>03</b>&nbsp; location = <span className="mint">&quot;Patna, India&quot;</span></div>
          <div><b>04</b>&nbsp; interests = [</div>
          <div><b>05</b>&nbsp;&nbsp;&nbsp; <span className="mint">&quot;technology&quot;</span>,</div>
          <div><b>06</b>&nbsp;&nbsp;&nbsp; <span className="mint">&quot;data science&quot;</span>,</div>
          <div><b>07</b>&nbsp;&nbsp;&nbsp; <span className="mint">&quot;building things&quot;</span></div>
          <div><b>08</b>&nbsp; ]</div>
          <div><b>09</b>&nbsp; mindset = <span className="mint">&quot;always learning&quot;</span></div>
          <div><b>10</b>&nbsp;</div>
          <div><b>11</b>&nbsp; <span className="purple">def</span> <span className="gold">next_step</span>(self):</div>
          <div><b>12</b>&nbsp;&nbsp;&nbsp; <span className="purple">return</span> <span className="mint">&quot;keep exploring&quot;</span><span className="code-cursor" /></div>
        </div>
        <div className="terminal-bottom">
          <span>⑂ main</span>
          <span>✓ Curiosity compiled</span>
          <span>Python</span>
        </div>
      </div>

      <div className="data-widget">
        <div><span className="widget-dot" /> GROWTH MINDSET</div>
        <svg viewBox="0 0 170 67" aria-hidden="true">
          <defs>
            <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#7d9c8b" stopOpacity=".28" />
              <stop offset="1" stopColor="#7d9c8b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 63 22 48 43 52 65 31 87 38 110 16 135 22 165 4V67H0Z" fill="url(#chart-fill)" />
          <path d="m0 63 22-15 21 4 22-21 22 7 23-22 25 6 30-18" fill="none" stroke="#7d9c8b" strokeWidth="2" />
          <circle cx="165" cy="4" r="3" fill="#a8854e" />
        </svg>
        <span>Small steps. Every day.</span>
      </div>

      <div className="floating-tech-tag">
        <span>&lt;/&gt;</span> Built on curiosity <i>✧</i>
      </div>

      <div className="art-footnote">EXPLORING, EXPERIMENTING, EVOLVING.</div>
    </div>
  );
}
