import { Link } from 'react-router-dom'
import { Arrow } from './Rebuild'
import { EMAIL, NOTE, PageTitle } from './Note'

const IDEAS = [
  {
    id: 'hero',
    n: '1',
    tag: 'Landing page',
    title: 'Let people start from the hero, not after it.',
    noticed: 'The hero has two buttons and a row of example clips, while the prompt box, the thing people actually use, sits further down the page.',
    change: 'Put a single field in the hero: paste your site, see ideas. Show the first storyboard before asking for a sign-up, while keeping the $10 credit and no card message.',
    measure: 'Share of visitors who reach a first storyboard, and share of those who then sign up.',
    original: '/#start',
    upgraded: '/upgraded#start',
  },
  {
    id: 'onboard',
    n: '2',
    tag: 'Onboarding',
    title: 'Make the first five minutes feel like Latted already knows the brand.',
    noticed: 'Engines start from a website, competitors, countries and a budget. That is the strongest part of the product, and a new user could meet it on day one.',
    change: 'A four step flow: site, brand kit, three hook choices, storyboard. The sign-up prompt appears only when they press render, with their work already saved.',
    measure: 'Time from landing to first exported video, and where people drop off between steps.',
    original: '/#composer',
    upgraded: '/upgraded#onboard',
  },
  {
    id: 'share',
    n: '3',
    tag: 'Share and referral loops',
    title: 'Turn every video, and every Catch Up email, into an invitation.',
    noticed: 'Teams review videos together, and Engines already email a daily Catch Up to a whole team. Both are moments where one person shows the product to another.',
    change: 'A review link where teammates comment on scenes without an account, an optional small end card on exports, and a give and get credit offer in the same spot.',
    measure: 'Invites sent per active project, and how many invited people create a project of their own.',
    original: '/#final',
    upgraded: '/upgraded#share',
  },
  {
    id: 'teardowns',
    n: '4',
    tag: 'Content, SEO and AEO',
    title: 'Publish what Explore already knows, in a form people and AI assistants can quote.',
    noticed: "Explore breaks down why an ad works: the hook, the structure and the pacing. That analysis is exactly what people search for, and it is also what AI assistants quote when asked how to write a good ad.",
    change: 'Public teardown pages per category, each starting with a one paragraph answer, then hook, structure and pacing, then a Use in Composer button. Add comparison pages, workflow templates and a listing for the Claude, ChatGPT and Codex connection.',
    measure: 'Pages indexed, mentions in AI answers for target questions, and sign-ups that start from a teardown page.',
    original: '/#how',
    upgraded: '/upgraded#teardowns',
  },
  {
    id: 'from-ads',
    n: '5',
    tag: 'Outbound and ICP',
    title: 'Send people a better version of their own ad, not a pitch.',
    noticed: 'Your launch post names two groups clearly: small teams with a product and no marketing team, and growth or creative leads who run many Meta and TikTok ads.',
    change: 'Start with the second group. Spot active advertisers in the Meta Ad Library, make three new hooks for one of their live ads, and send those first. Keep a tight list, then widen. The upgraded site also lets a growth lead paste a live ad and get three hooks on the page itself.',
    measure: 'Reply rate and meetings per segment, and how many replies turn into a first project.',
    original: '/#audience',
    upgraded: '/upgraded#from-ads',
  },
]

export function ForLatted() {
  return (
    <div className="pitch">
      <PageTitle title="For Latted | a rebuild and walkthrough, by Yusuf" />
      <div className="note-banner">{NOTE}</div>
      <header className="pitch-nav">
        <div className="pitch-wrap pitch-nav-in">
          <a href="#top" className="pitch-brand"><span className="pitch-dot" />For Latted</a>
          <nav>
            <a href="#path">01 The path</a>
            <a href="#changes">02 The upgrades</a>
            <a href="#hi">03 Say hi</a>
          </nav>
          <Link className="lt-btn lt-btn-sm" to="/">See the original</Link>
        </div>
      </header>

      <section className="pitch-hero" id="top">
        <div className="pitch-wrap">
          <span className="pitch-chip"><i /> Made for the Latted team</span>
          <h1>From the original<br />to an <span>upgraded Latted.</span></h1>
          <p className="pitch-lead">
            A 1:1 concept by Yusuf, a UK founder, applying for the GTM Intern role. This page walks through five changes,
            each built into a full upgraded version of the site. These are hypotheses to test, not promises. I have not seen your analytics, and I have not invented any numbers.
          </p>
          <div className="lt-cta-row left">
            <Link to="/" className="lt-btn">Open the original <Arrow /></Link>
            <Link to="/upgraded" className="lt-btn lt-btn-ghost">Open the upgraded site <Arrow /></Link>
          </div>
          <p className="pitch-meta">Latted · Y Combinator W24 · San Francisco · Content engine for organic and paid growth</p>
        </div>
      </section>

      <section className="pitch-divide" id="path">
        <div className="pitch-wrap">
          <p className="pitch-kicker">01 The path</p>
          <h2 className="pitch-h2">Two full sites, then this walkthrough.</h2>
          <div className="path-grid">
            <Link to="/" className="path-card">
              <b>The original</b>
              <p>A close rebuild of Latted's live site: the same layout, type feel and colours, all coded from scratch. No logos, images, fonts or videos taken from the live site.</p>
              <span>Open / <Arrow /></span>
            </Link>
            <Link to="/upgraded" className="path-card">
              <b>The upgraded version</b>
              <p>The same site, with the five changes below built in: a start-from-the-hero field, a first-five-minutes flow, review and referral, public teardowns, and a start-from-your-live-ad path.</p>
              <span>Open /upgraded <Arrow /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="up" id="changes">
        <div className="pitch-wrap">
          <p className="pitch-kicker">02 The upgrades</p>
          <h2 className="pitch-h2">Five changes, each with a place to see it live.</h2>
          <p className="pitch-lead" style={{ margin: '18px 0 8px' }}>
            For each one: what I noticed on the original, what I would change, and how I would judge it. Then a link to that moment on both sites.
          </p>
          {IDEAS.map((idea) => (
            <article className="up-idea" key={idea.id} id={idea.id}>
              <div className="up-copy">
                <span className="up-num">{idea.n}</span>
                <span className="up-tag">{idea.tag}</span>
                <h3>{idea.title}</h3>
                <dl>
                  <dt>What I noticed</dt><dd>{idea.noticed}</dd>
                  <dt>What I would change</dt><dd>{idea.change}</dd>
                  <dt>How I would judge it</dt><dd>{idea.measure}</dd>
                </dl>
                <div className="idea-links">
                  <Link to={idea.original} className="lt-btn lt-btn-sm lt-btn-ghost">On the original</Link>
                  <Link to={idea.upgraded} className="lt-btn lt-btn-sm">On the upgraded site <Arrow /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hi" id="hi">
        <div className="pitch-wrap">
          <p className="pitch-kicker">03 Say hi</p>
          <h2 className="pitch-h2">Happy to walk you through any of this on a call.</h2>
          <p className="pitch-lead">I would love to help Latted grow as your GTM intern.</p>
          <div className="lt-cta-row left">
            <a className="lt-btn" href={`mailto:${EMAIL}?subject=Latted%20GTM%20Intern`}>{EMAIL} <Arrow /></a>
            <Link to="/upgraded" className="lt-btn lt-btn-ghost">See the upgraded site <Arrow /></Link>
          </div>
        </div>
      </section>

      <footer className="pitch-foot">
        <div className="pitch-wrap">{NOTE}</div>
      </footer>
    </div>
  )
}
