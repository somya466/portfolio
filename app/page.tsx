import { Arrow, Motion } from "./components/shell";
import { MiniIcon } from "./components/artwork";
import { TechArt } from "./components/tech-art";
import { Explorations, ContactDraft } from "./components/interactive";

const marqueeItems = ["PYTHON", "JAVASCRIPT", "WEB DEVELOPMENT", "DATA SCIENCE", "A LITTLE LAW", "ENDLESS CURIOSITY"];

const tools = [
  ["Py", "Python", "My starting point for programming, problem-solving, and exploring data science.", "PROGRAMMING"],
  ["JS", "JavaScript", "Learning to bring ideas to life with interactive experiences on the web.", "INTERACTIVITY"],
  ["</>", "HTML & CSS", "Structuring content and creating thoughtful, responsive web experiences.", "WEB FOUNDATIONS"],
];

const chapters = [
  ["Curiosity first", "Good questions lead to interesting places.", "✧"],
  ["Learn by doing", "Small experiments. Real understanding.", "⌘"],
  ["Keep moving", "A little better than yesterday.", "↗"],
];

export default function Home() {
  return (
    <main id="main">
      <Motion />
      <div id="top" />

      {/* ---------------------------------------------------------------- Hero */}
      <section className="hero-shell">
        <div className="hero-grid-lines" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, index) => <span key={index} />)}
        </div>
        <div className="hero-aura hero-aura-a" aria-hidden="true" />
        <div className="hero-aura hero-aura-b" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-frame" aria-hidden="true" />

        <div className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" /> TECHNOLOGY. CURIOSITY. POSSIBILITY.
              <span className="eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="hero-title">
              <span className="reveal-line"><span>Curious mind.</span></span>
              <span className="reveal-line"><span><em>Builder at heart.</em></span></span>
            </h1>

            <p className="hero-intro">Hi, I’m Shristi. <span>↗</span></p>
            <p className="hero-description">
              Exploring code, finding stories in data, and turning<br className="desktop-break" />
              a little curiosity into something meaningful.<br className="desktop-break" />
              A tech enthusiast with a different perspective.
            </p>

            <div className="hero-actions">
              <a href="#explorations" className="button primary" data-magnetic>
                Explore my world
                <span className="button-icon"><Arrow diagonal /></span>
              </a>
              <a href="#about" className="text-link">A little about me <Arrow /></a>
            </div>

            <div className="hero-location">
              <span className="location-symbol">⌖</span> Based in Patna, India
              <span className="location-separator" /> Currently learning &amp; building
            </div>
          </div>

          <div className="hero-art-wrap" data-parallax="0.055">
            <TechArt />
          </div>
        </div>

        <div className="hero-bottom wrap">
          <a href="#about" className="scroll-cue">
            <span className="mouse-icon"><i /></span> SCROLL TO DISCOVER
          </a>
          <span className="hero-note">A background in law. A future full of possibilities.</span>
          <span className="hero-edition">PERSONAL PORTFOLIO <i>’26</i></span>
        </div>

        <span className="hero-side" aria-hidden="true">PORTFOLIO / PATNA, INDIA</span>
      </section>

      <div className="interest-strip" aria-label="Interests and tools">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" aria-hidden={copy === 1 ? true : undefined} key={copy}>
              {marqueeItems.map((item) => (
                <span key={item}>{item}<i>✧</i></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* --------------------------------------------------------------- About */}
      <section id="about" className="section about-section" data-scroll-section>
        <span className="about-watermark" aria-hidden="true" data-parallax="0.045">SHRISTI</span>

        <div className="wrap">
          <div className="section-index" data-reveal="fade">
            <span>01 / THE PERSON BEHIND THE CODE</span>
            <span>MEET SHRISTI</span>
          </div>

          <div className="about-layout">
            <div className="about-heading" data-reveal="mask">
              <h2 className="display">
                <span className="reveal-line"><span>Not one label.</span></span>
                <span className="reveal-line"><span><em>Many possibilities.</em></span></span>
              </h2>
              <div className="about-signature">Shristi <span>✧</span></div>
            </div>

            <div className="about-story" data-reveal="up">
              <p className="lead" data-words>I’m drawn to the moment an idea starts to become something real.</p>
              <p data-words>I’m a first-year B.A. LL.B. student at Mona Law College, Patna, with a growing interest in technology and data science. Outside my legal studies, you’ll find me exploring Python, JavaScript, and the possibilities of the web.</p>
              <p data-words>My science background in Physics, Chemistry, and Biology taught me to ask why. Coding gives me a new way to ask, “What if?” I’m at the beginning of this journey — learning, experimenting, and finding my own direction.</p>
              <a href="/shristi-kumari-profile.txt" download className="text-link profile-link">
                Download my profile <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="about-principles">
            {chapters.map(([title, description, glyph], index) => (
              <div className="principle" key={title} data-reveal="up">
                <span className="principle-index" aria-hidden="true">0{index + 1}</span>
                <span className="principle-glyph" aria-hidden="true">{glyph}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- Toolkit */}
      <section id="skills" className="section skills-section" data-scroll-section>
        <div className="skills-grid-lines" aria-hidden="true" />
        <div className="wrap">
          <div className="section-index" data-reveal="fade">
            <span>02 / THE GROWING TOOLKIT</span>
            <span>ALWAYS A STUDENT</span>
          </div>

          <div className="section-heading">
            <h2 className="display" data-reveal="mask">
              <span className="reveal-line"><span>A little logic.</span></span>
              <span className="reveal-line"><span><em>A lot to build with.</em></span></span>
            </h2>
            <p data-reveal="up">The tools I’m exploring, and the human<br className="desktop-break" /> skills that connect the dots.</p>
          </div>

          <div className="toolkit-grid">
            {tools.map(([symbol, title, description, label], index) => (
              <div className="tool-card-wrap" key={title} data-reveal="up">
                <article className="tool-card" data-tilt>
                  <div className="tool-top">
                    <span className="tool-index" aria-hidden="true">0{index + 1}</span>
                    <span className="tool-arrow" aria-hidden="true">↗</span>
                  </div>
                  <span className="tool-symbol" aria-hidden="true">{symbol}</span>
                  <span className="card-category">{label}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="tool-status"><span /> In my learning toolkit</div>
                </article>
              </div>
            ))}
          </div>

          <div className="toolkit-meta" data-reveal="up">
            <div className="human-skills">
              <span>THE HUMAN SIDE</span>
              <p>Communication <i>·</i> <span>Developing: critical thinking, research &amp; adaptability</span></p>
            </div>
            <div className="learning-line">
              <span className="status-dot" />
              <strong>Next on my radar</strong>
              <span>Data analysis</span>
              <span>Data visualisation</span>
              <span>Legal technology</span>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Explorations */}
      <section id="explorations" className="section explorations-section" data-scroll-section>
        <div className="exploration-aura" aria-hidden="true" data-parallax="0.04" />
        <span className="exploration-ghost" aria-hidden="true" data-parallax="0.07">IDEAS</span>

        <div className="wrap">
          <div className="section-index" data-reveal="fade">
            <span>03 / THE IDEA NOTEBOOK</span>
            <span>THINKING OUT LOUD</span>
          </div>

          <div className="section-heading">
            <h2 className="display" data-reveal="mask">
              <span className="reveal-line"><span>Ideas worth</span></span>
              <span className="reveal-line"><span><em>getting curious about.</em></span></span>
            </h2>
            <p data-reveal="up">A few directions I’d like to take.<br className="desktop-break" /> Learning ideas, waiting to become something.</p>
          </div>

          <Explorations />

          <div className="editorial-note" data-reveal="up">
            <span aria-hidden="true">↳</span>
            <p>These are project concepts, not completed work. I’ll add real builds and reflections as my skills grow.</p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Education */}
      <section id="education" className="section education-section" data-scroll-section>
        <div className="wrap">
          <div className="section-index" data-reveal="fade">
            <span>04 / THE JOURNEY SO FAR</span>
            <span>ROOTS &amp; NEW DIRECTIONS</span>
          </div>

          <div className="education-layout">
            <div className="education-heading" data-reveal="mask">
              <h2 className="display">
                <span className="reveal-line"><span>Different chapters.</span></span>
                <span className="reveal-line"><span><em>One curious mind.</em></span></span>
              </h2>
              <p>Science built the foundation.<br />Law adds perspective.<br />Technology opens possibilities.</p>
              <span className="education-art" aria-hidden="true">{ "{ § }" }</span>
            </div>

            <div className="timeline" data-timeline>
              <span className="timeline-fill" aria-hidden="true" />

              <article className="timeline-item current" data-reveal="up">
                <span className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-label">THE CURRENT CHAPTER <span className="badge">First year</span></div>
                  <h3>B.A. LL.B.</h3>
                  <p className="school-name">Mona Law College, Patna</p>
                  <p>Beginning my integrated arts and law degree while independently exploring programming and data science.</p>
                  <p className="affiliation">Affiliated to Patliputra University, Patna.</p>
                  <a href="https://www.7nishchay-yuvaupmission.bihar.gov.in/listofcollegedetail" target="_blank" rel="noopener noreferrer" className="source-link">
                    Bihar government college listing <Arrow diagonal />
                  </a>
                </div>
              </article>

              <article className="timeline-item" data-reveal="up">
                <span className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-label">SENIOR SECONDARY <span className="badge neutral">First division</span></div>
                  <h3>Class 12 · Science</h3>
                  <p>Physics, Chemistry &amp; Biology (PCB). A foundation in observation, analysis, and asking better questions.</p>
                </div>
              </article>

              <article className="timeline-item" data-reveal="up">
                <span className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-label">SECONDARY SCHOOL <span className="badge neutral">First division</span></div>
                  <h3>Class 10</h3>
                  <p>A strong academic foundation, completed with first division.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- Contact */}
      <section id="contact" className="section contact-section" data-scroll-section>
        <div className="contact-aura" aria-hidden="true" data-parallax="0.035" />
        <span className="contact-ghost" aria-hidden="true" data-parallax="0.05">HELLO</span>

        <div className="wrap">
          <div className="section-index" data-reveal="fade">
            <span>05 / WHAT’S NEXT?</span>
            <span>LET’S FIND OUT</span>
          </div>

          <div className="contact-layout">
            <div className="contact-copy">
              <div className="eyebrow" data-reveal="fade">
                <span className="status-dot" /> OPEN TO LEARNING &amp; COLLABORATION
              </div>

              <h2 className="display" data-reveal="mask">
                <span className="reveal-line"><span>Good things start</span></span>
                <span className="reveal-line"><span>with <em>a hello.</em></span></span>
              </h2>

              <p data-reveal="up">A coding idea, a shared curiosity, or a chance to learn from each other. I’d love to connect with fellow learners and thoughtful people in tech.</p>

              <div className="contact-interests" data-reveal="up">
                <span><MiniIcon kind="tech" /> Beginner-friendly collaborations</span>
                <span><MiniIcon kind="data" /> Data science &amp; new ideas</span>
              </div>

              <div className="contact-notice" data-reveal="up">
                <strong>Contact details are coming soon.</strong>
                <p>Until then, prepare an introduction to share later. Your message stays on your device and isn’t sent or stored by this site.</p>
              </div>
            </div>

            <ContactDraft />
          </div>
        </div>
      </section>
    </main>
  );
}
