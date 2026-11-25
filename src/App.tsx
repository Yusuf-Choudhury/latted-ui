import { useEffect } from 'react'
import { Rebuild, Arrow } from './Rebuild'
import { Upgrades } from './Upgrades'

const EMAIL = 'Yusuf@yusuf-choudhury.com'

export default function App() {
  useEffect(() => { document.title = 'Latted: a 1:1 rebuild and growth ideas, by Yusuf' }, [])
  return (
    <div className="pitch">
      <div className="pitch-banner">Concept rebuild by Yusuf Choudhury for an application. Not affiliated with Latted.</div>
      <header className="pitch-nav">
        <div className="pitch-wrap pitch-nav-in">
          <a href="#top" className="pitch-brand"><span className="pitch-dot" />For Latted</a>
          <nav>
            <a href="#rebuild">01 The rebuild</a>
            <a href="#ideas">02 What I would add</a>
            <a href="#hi">03 Say hi</a>
          </nav>
          <a className="lt-btn lt-btn-sm" href="#rebuild">See the rebuild</a>
        </div>
      </header>

      <section className="pitch-hero" id="top">
        <div className="pitch-wrap">
          <span className="pitch-chip"><i /> Made for the Latted team</span>
          <h1>I rebuilt Latted<br />to show <span>how I work.</span></h1>
          <p className="pitch-lead">A 1:1 concept by Yusuf, a UK founder, applying for the GTM Intern role. First the rebuild, then five ideas to grow what you have built.</p>
          <div className="lt-cta-row left">
            <a href="#rebuild" className="lt-btn">See the rebuild <Arrow /></a>
            <a href="#ideas" className="lt-btn lt-btn-ghost">Jump to the ideas <Arrow /></a>
          </div>
          <p className="pitch-meta">Latted · Y Combinator W24 · San Francisco · Content engine for organic and paid growth</p>
          <div className="pitch-notice">
            {[['Where I noticed a gap', 'The prompt box sits below the hero. Starting from the top could be quicker.'], ['Where I saw an opening', 'The $10 starter credit and the daily Catch Up email are natural places for sharing.'], ['What I would like to do', 'Turn Explore\'s ad breakdowns into public pages, and run focused outbound.']].map(([t, d], i) => (
              <div key={t} style={{ transform: `rotate(${[-1.2, 0.8, -0.6][i]}deg)` }}><b>{t}</b><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <div className="pitch-divide" id="rebuild-head">
        <div className="pitch-wrap"><p className="pitch-kicker">01 The rebuild</p>
          <p className="pitch-small">Everything below this line, down to the next section, is my own code. The clips are drawn with CSS and SVG, and the logo is a text wordmark. Try the tabs, the questions and the dark mode toggle.</p></div>
      </div>

      <Rebuild />
      <Upgrades />

      <section className="hi" id="hi">
        <div className="pitch-wrap">
          <p className="pitch-kicker">03 Say hi</p>
          <h2 className="pitch-h2">Happy to walk you through any of this on a call.</h2>
          <p className="pitch-lead">I would love to help Latted grow as your GTM intern.</p>
          <a className="lt-btn" href={`mailto:${EMAIL}?subject=Latted%20GTM%20Intern`}>{EMAIL} <Arrow /></a>
        </div>
      </section>

      <footer className="pitch-foot">
        <div className="pitch-wrap">Concept rebuild by Yusuf Choudhury for an application. Not affiliated with Latted.</div>
      </footer>
    </div>
  )
}
