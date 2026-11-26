import { useState, type ReactNode } from 'react'

export const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
)
const ArrowUR = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M5.5 4H12v6.5" /></svg>
)
const Check = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5l3.2 3L13 4.5" /></svg>
)
const Moon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"><path d="M13.5 9.5A5.5 5.5 0 016.5 2.5a5.5 5.5 0 107 7z" /></svg>
)
const Sun = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><circle cx="8" cy="8" r="3" /><path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M3.4 12.6l1-1M11.6 4.4l1-1" /></svg>
)
const Plus = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><path d="M8 2v12M2 8h12" /></svg>
)
const Play = () => (
  <span className="lt-play"><svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 1l7 4-7 4z" fill="currentColor" /></svg></span>
)

/** Text wordmark with a small CSS/SVG glyph. Not a copy of the live logo. */
export function Wordmark({ size = 20 }: { size?: number }) {
  return (
    <span className="lt-wordmark" style={{ fontSize: size }}>
      <svg width={size * 0.95} height={size * 0.7} viewBox="0 0 20 14" aria-hidden="true"><path d="M1 13 L9 1 L19 13 L14 13 L9 6.5 L6 13 Z" fill="currentColor" /></svg>
      latted
    </span>
  )
}
export function AppIcon({ size = 52 }: { size?: number }) {
  return (
    <span className="lt-appicon" style={{ width: size, height: size }}>
      <span style={{ width: size * 0.62, height: size * 0.62 }}>
        <svg viewBox="0 0 20 20" width="62%" height="62%"><path d="M3 16 L10 4 L17 16 L13 16 L10 10.5 L7 16 Z" fill="#fdfdfc" /></svg>
      </span>
    </span>
  )
}

const CLIPS = [
  { label: 'skincare', a: '#e9d8cf', b: '#c79b8a', h: 416, y: 20, skin: '#e8b99a' },
  { label: 'fitness', a: '#d96a3b', b: '#5b2a1b', h: 416, y: 0, skin: '#8a5a3d', dark: true },
  { label: 'pantry', a: '#cfd2cc', b: '#7d827a', h: 370, y: 20, skin: '#d9a98b' },
  { label: 'assistant', a: '#cdb8a5', b: '#3b4a63', h: 416, y: 0, skin: '#c98f72', dark: true },
  { label: 'snacks', a: '#b9a393', b: '#6f5a4b', h: 416, y: 20, skin: '#e0b399' },
]

function Clip({ c }: { c: (typeof CLIPS)[number] }) {
  return (
    <div className="lt-clip" style={{ height: c.h, marginTop: c.y, background: `linear-gradient(170deg, ${c.a}, ${c.b})` }}>
      <svg viewBox="0 0 120 200" preserveAspectRatio="xMidYMax slice" className="lt-clip-fig" aria-hidden="true">
        <circle cx="60" cy="88" r="22" fill={c.skin} />
        <path d="M14 200 C14 150 34 124 60 124 C86 124 106 150 106 200 Z" fill={c.dark ? '#1c1b19' : '#fdfaf6'} opacity="0.88" />
      </svg>
      <span className="lt-clip-label">{c.label}</span>
      <Play />
    </div>
  )
}

const TABS = ['Localize', 'Multiply', 'Create', 'Edit', 'Repeat'] as const
const TAB_ICON: Record<string, ReactNode> = {
  Localize: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"><path d="M2 4h7M5.5 2v2M3.5 4c.5 2.5 2.5 4.5 5 5.5M8 4c-.5 2.5-2.5 4.5-5 5.5M9 14l2.5-6L14 14M9.8 12h3.4" /></svg>,
  Multiply: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"><circle cx="5" cy="5" r="2" /><circle cx="11.5" cy="6" r="1.6" /><path d="M1.5 13c0-2.5 1.5-4 3.5-4s3.5 1.5 3.5 4M10 10.3c2 0 4.5.8 4.5 2.7" /></svg>,
  Create: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"><path d="M8 1.5l1.4 4.1 4.1 1.4-4.1 1.4L8 12.5 6.6 8.4 2.5 7l4.1-1.4z" /></svg>,
  Edit: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"><path d="M10.5 2.5l3 3L6 13H3v-3z" /></svg>,
  Repeat: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"><rect x="2" y="3" width="12" height="10" rx="1.5" /><path d="M2 6.5h12" /></svg>,
}
const TAB_COPY: Record<(typeof TABS)[number], [string, string]> = {
  Localize: ['One video. More places to grow.', 'Take your story into new markets. Adapt the language while keeping the idea, the look, and your brand intact.'],
  Multiply: ['One brief. Many angles.', 'Try new hooks, characters and openings on the same idea, so you can see what lands before you commit.'],
  Create: ['From a thought to a first cut.', 'Start with a prompt, a product link or a reference. Composer plans the scenes, voice and music for you.'],
  Edit: ['Keep going after the first draft.', 'Message Composer to change the hook, or open the timeline and adjust it yourself. Your context stays with the project.'],
  Repeat: ['Do it again, on a schedule.', 'Save what worked as a workflow, then run it again with your own review checkpoints.'],
}

function PhoneMini({ tone = 0, label }: { tone?: number; label?: string }) {
  const tones = ['#2e5bd6', '#c9a98f', '#7d8f7a', '#c46a52', '#6c6f8f', '#b9a063']
  return (
    <div className="lt-phone">
      <div className="lt-phone-screen" style={{ background: `linear-gradient(180deg, ${tones[tone % 6]}, #1f2937)` }}>
        <i /><i style={{ width: '60%' }} />
      </div>
      {label && <small>{label}</small>}
    </div>
  )
}

function TabVisual({ tab }: { tab: (typeof TABS)[number] }) {
  if (tab === 'Localize')
    return (
      <div className="lt-vis lt-vis-loc">
        <PhoneMini tone={0} label="Original video" />
        <div className="lt-langs">
          {['ES Spanish', 'FR French', 'DE German'].map((l, i) => (
            <div key={l} className="lt-lang"><PhoneMini tone={i + 1} /><small>{l}</small></div>
          ))}
        </div>
      </div>
    )
  if (tab === 'Multiply')
    return (
      <div className="lt-vis lt-vis-grid">
        {[0, 1, 2, 3, 4, 5].map((i) => <PhoneMini key={i} tone={i} label={`Hook ${i + 1}`} />)}
      </div>
    )
  if (tab === 'Create')
    return (
      <div className="lt-vis lt-vis-create">
        <div className="lt-bubble">A launch video for my new product, with three different hooks</div>
        <div className="lt-scenes">{[0, 1, 2, 3].map((i) => <div key={i} className="lt-scene"><PhoneMini tone={i + 2} /><small>Scene {i + 1}</small></div>)}</div>
      </div>
    )
  if (tab === 'Edit')
    return (
      <div className="lt-vis lt-vis-edit">
        <PhoneMini tone={3} />
        <div className="lt-timeline">
          {[['Video', [30, 22, 38]], ['Voice', [60, 30]], ['Music', [100]]].map(([n, segs]) => (
            <div key={n as string} className="lt-track"><b>{n as string}</b>
              <div>{(segs as number[]).map((w, i) => <span key={i} style={{ width: `${w}%` }} />)}</div>
            </div>
          ))}
        </div>
      </div>
    )
  return (
    <div className="lt-vis lt-vis-repeat">
      {[['Every weekday', '08:00', 'Review before publishing'], ['Every Monday', '09:30', 'Weekly batch of 5 hooks'], ['First of the month', '10:00', 'Refresh the top ads']].map(([a, b, c]) => (
        <div key={a} className="lt-run"><span className="lt-dot" /><div><b>{a}</b><small>{c}</small></div><em>{b}</em></div>
      ))}
    </div>
  )
}

const AUD = {
  'For brands': ['Your product. More ways to want it.', 'Turn product details into UGC, launch films, and social ads. Try new hooks while keeping your brand in focus.', ['Product demos and lifestyle stories', 'New hooks, characters, and languages', 'Creative for organic and paid channels'], 'Try this idea'],
  'For apps': ['Show the product. Skip the shoot.', 'Turn screens and features into short demos and store-ready clips. Test new openings as your product changes.', ['Feature walkthroughs and launch clips', 'Localised versions for each market', 'Variations to test across channels'], 'Try this idea'],
  'For creative teams': ['More variations. Less rework.', 'Keep research, production and edits in one project, so a revision never means starting from scratch.', ['One project for scenes, assets and timeline', 'Reusable workflows and review steps', 'Faster rounds of feedback'], 'Try this idea'],
} as const

const FAQ: [string, string][] = [
  ['Is Latted just an AI video generator?', 'No. Generating a clip is one step. Latted puts research, production and editing in one workspace, so what you make stays an editable project.'],
  ['How does Latted keep content consistent with my brand?', 'You give it your site, assets and standing instructions, and it works from those each time. You can review everything before it goes anywhere.'],
  ['Can I edit what Latted creates?', 'Yes. You can message Composer to change a scene or a hook, or edit the timeline yourself.'],
  ['Can workflows publish automatically?', 'Workflows keep your next batch moving on a schedule, with review checkpoints where you want them. Check the docs for what is supported today.'],
  ['Can Latted create both organic content and paid ads?', 'Yes. The same project can become organic video or paid creative, with new hooks and languages.'],
  ['What happens after I submit my first prompt?', 'Composer plans the video, generates the scenes, voice and music, and assembles a project you can review and refine.'],
]


function Onboard() {
  return (
    <section className="lt-wrap lt-sec" id="onboard">
      <p className="lt-kicker" style={{ textAlign: 'center' }}>Your first five minutes</p>
      <h2 className="lt-h2c">Latted already knows the brand.</h2>
      <p className="lt-lead">A short path from your site to a storyboard. You only sign up when you press render, and your draft is already saved.</p>
      <div className="lt-panel up-onboard">
        <div className="m-steps">
          {['Your site', 'Brand kit', 'Pick hooks', 'Storyboard'].map((s, i) => (
            <span key={s} className={i === 2 ? 'on' : i < 2 ? 'done' : ''}><em>{i + 1}</em>{s}</span>
          ))}
        </div>
        <div className="m-kit">
          <div><b>Brand kit found</b><span><i className="sw" style={{ background: '#22231f' }} /><i className="sw" style={{ background: '#c46a52' }} /><i className="sw" style={{ background: '#e9d8cf' }} /><i className="sw" style={{ background: '#6c8f7a' }} /></span></div>
          <div><b>Tone</b><span className="m-chips"><span>Warm</span><span>Direct</span></span></div>
        </div>
        <p className="m-label">Choose three hooks to try</p>
        <div className="m-hooks">
          {[['Problem first', '"Still scrolling for ad ideas?"', true], ['Result first', '"Seven videos before lunch."', true], ['Question', '"What would you make today?"', false], ['Social proof', 'Add this once you have real reviews', false]].map(([t, q, on]) => (
            <div key={t as string} className={on ? 'on' : ''}><b>{t as string}</b><span>{q as string}</span></div>
          ))}
        </div>
        <div className="m-foot"><span>Draft saved. Nothing to sign up for yet.</span><a href="#start" className="lt-btn lt-btn-sm">Preview storyboard <Arrow /></a></div>
      </div>
    </section>
  )
}

function ShareSection() {
  return (
    <section className="lt-wrap lt-sec" id="share">
      <p className="lt-kicker" style={{ textAlign: 'center' }}>Review and invite</p>
      <h2 className="lt-h2c">Share a cut. Invite the next person.</h2>
      <p className="lt-lead">A review link for teammates, a small end card on exports, and a give and get credit offer in the same place.</p>
      <div className="lt-panel up-onboard m-share">
        <div className="m-sharebox">
          <div className="m-thumb"><span /></div>
          <div>
            <b>Spring launch, version 3</b>
            <p>Anyone with the link can watch and comment on scenes.</p>
            <div className="m-copy"><span>latted.example/review/spring-launch</span><span className="lt-btn lt-btn-sm">Copy link</span></div>
            <label><input type="checkbox" defaultChecked readOnly /> Add a small "Made with Latted" end card</label>
          </div>
        </div>
        <div className="m-ref">
          <AppIcon size={28} />
          <div><b>Give a friend $10, get $10</b><p>Suggested to match the $10 starter credit. The exact amount is Latted's call.</p></div>
        </div>
        <div className="m-mail"><small>Daily Catch Up email, new footer</small><p>Forward this to a teammate who reviews creative. They can comment without signing up.</p></div>
      </div>
    </section>
  )
}

function TeardownsSection() {
  return (
    <section className="lt-wrap lt-sec" id="teardowns">
      <p className="lt-kicker" style={{ textAlign: 'center' }}>Ad teardowns</p>
      <h2 className="lt-h2c">What Explore already knows, published.</h2>
      <p className="lt-lead">Public pages per category, written so people and AI assistants can quote them. Each one starts with a short answer, then hook, structure and pacing.</p>
      <div className="lt-panel up-onboard m-page">
        <small>Ad teardowns / Skincare</small>
        <h3 className="up-teardown-h">How do skincare video ads open?</h3>
        <p className="m-answer"><b>Short answer</b> Most start by showing a problem on camera in the first seconds, then move to a routine, then a result. Below are the patterns, with what to copy.</p>
        <div className="m-pat">
          {[['Hook', 'Problem on camera'], ['Structure', 'Problem, routine, result'], ['Pacing', 'Fast cuts, then a held shot']].map(([a, b]) => <div key={a}><small>{a}</small><b>{b}</b></div>)}
        </div>
        <div className="m-foot"><span className="m-chips"><span>Answer first</span><span>FAQ markup</span><span>llms.txt</span></span><a href="#start" className="lt-btn lt-btn-sm">Use in Composer <Arrow /></a></div>
        <small className="m-note">Example copy for the layout only. Real pages would use real Explore data.</small>
      </div>
    </section>
  )
}

function FromAdsSection() {
  return (
    <section className="lt-wrap lt-sec" id="from-ads">
      <p className="lt-kicker" style={{ textAlign: 'center' }}>For teams already running ads</p>
      <h2 className="lt-h2c">Start from an ad you already have live.</h2>
      <p className="lt-lead">Paste a Meta Ad Library link, or pick a live ad from Explore, and get three new hooks for it. Built for growth leads who refresh creative often.</p>
      <div className="lt-panel up-onboard">
        <div className="lt-url" style={{ margin: '0 auto 18px', maxWidth: 520 }}>
          <input defaultValue="adlibrary.example/your-live-ad" aria-label="Ad Library link" readOnly />
          <span className="lt-btn lt-btn-sm">Make three hooks <Arrow /></span>
        </div>
        <div className="m-icp">
          <div className="m-row m-head"><span>Segment</span><span>Signal</span><span>First offer</span></div>
          {[['Growth leads at apps and games', 'Many live ads, often refreshed', 'Three new hooks for a live ad'], ['DTC brands with small teams', 'Steady ad spend, few variants', 'Same ad in two new markets'], ['Founders with no marketing hire', 'New launch, thin social presence', 'A launch film from their site']].map(([a, b, c]) => (
            <div className="m-row" key={a}><b>{a}</b><span>{b}</span><span>{c}</span></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Rebuild({ variant = 'faithful' }: { variant?: 'faithful' | 'upgraded' }) {
  const upgraded = variant === 'upgraded'
  const [dark, setDark] = useState(false)
  const [tab, setTab] = useState<(typeof TABS)[number]>('Localize')
  const [aud, setAud] = useState<keyof typeof AUD>('For brands')
  const [open, setOpen] = useState<number | null>(null)
  const [site, setSite] = useState('yourbrand.com')
  const [started, setStarted] = useState(false)
  const a = AUD[aud]
  const go = (id: string) => `#${id}`
  return (
    <div className={`lt ${dark ? 'lt-dark' : ''} ${upgraded ? 'lt-up' : ''}`} id="top">
      <header className="lt-header">
        <div className="lt-wrap lt-header-in">
          <a href={go('top')} className="lt-logo"><Wordmark /></a>
          <nav>
            <a href={go('how')}>Product</a>
            <a href={go('audience')}>Use cases</a>
            <a href={go('gallery')}>Examples</a>
            {upgraded && <a href={go('teardowns')}>Teardowns</a>}
            <a href={go('faq')} className="lt-dd">Resources <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M2 3.5l3 3 3-3" /></svg></a>
            <a href={go('final')}>Pricing</a>
          </nav>
          <div className="lt-header-r">
            <button className="lt-icon" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun /> : <Moon />}</button>
            <a href={go('top')} className="lt-link">Sign in</a>
            <a href={go('start')} className="lt-btn lt-btn-sm">Start creating <Arrow /></a>
          </div>
        </div>
      </header>

      <section className="lt-hero" id="start">
        <p className="lt-eyebrow">Automate growth</p>
        <h1>Your content engine.<br /><span>Always creating.</span></h1>
        <p className="lt-sub">Turn one idea into videos, ads, and entire campaigns.<br />Create, edit, and scale in one place.</p>
        {upgraded ? (
          <form className="lt-start" onSubmit={(e) => { e.preventDefault(); setStarted(true) }}>
            <div className="lt-url">
              <input value={site} onChange={(e) => setSite(e.target.value)} aria-label="Your website" />
              <button type="submit" className="lt-btn lt-btn-sm">Show me ideas <Arrow /></button>
            </div>
            <div className="m-chips lt-start-chips">
              {['Skincare brand', 'Mobile game', 'Software product'].map((c) => (
                <button type="button" key={c} onClick={() => { setSite(c.toLowerCase().replace(' ', '') + '.com'); setStarted(true) }}><span>{c}</span></button>
              ))}
            </div>
            <p className="lt-credit">$10 free credit. No card required.</p>
            {started && (
              <div className="lt-story" id="storyboard">
                <p className="lt-kicker">First storyboard, before any sign-up</p>
                <div className="lt-scenes lt-story-row">
                  {['Hook: the problem on camera', 'Routine or product in use', 'The result, then a clear ask'].map((s, i) => (
                    <div key={s} className="lt-scene"><PhoneMini tone={i + 2} /><small>{s}</small></div>
                  ))}
                </div>
                <a href={go('onboard')} className="lt-btn lt-btn-sm">Keep going, still no account needed <Arrow /></a>
              </div>
            )}
          </form>
        ) : (
          <div className="lt-cta-row">
            <a href={go('composer')} className="lt-btn">Start creating <Arrow /></a>
            <a href={go('how')} className="lt-btn lt-btn-ghost">See how it works <Arrow /></a>
          </div>
        )}
        <div className="lt-clips" id="gallery">{CLIPS.map((c) => <Clip key={c.label} c={c} />)}</div>
        <div className="lt-wrap lt-gallery"><a href={go('gallery')}>Explore the gallery <ArrowUR /></a></div>
      </section>

      {upgraded && <Onboard />}

      <section className="lt-wrap lt-sec" id="how">
        <h2 className="lt-h2c">One idea. An entire content engine.</h2>
        <p className="lt-lead">From the first brief to the next campaign,<br />keep your creative process in one place.</p>
        <div className="lt-tabs" role="tablist">
          {TABS.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>{TAB_ICON[t]}{t}</button>
          ))}
        </div>
        <div className="lt-panel lt-feature">
          <div className="lt-feature-copy"><h3>{TAB_COPY[tab][0]}</h3><p>{TAB_COPY[tab][1]}</p></div>
          <TabVisual tab={tab} />
        </div>
      </section>

      <hr className="lt-hr lt-wrap" />

      <section className="lt-wrap lt-composer" id="composer">
        <div>
          <p className="lt-kicker">Meet your creative partner</p>
          <h2>You bring the idea.<br />Latted gets to work.</h2>
          <p className="lt-body">A product link, a reference, a half-formed thought. Give Composer a starting point and make something worth watching.</p>
          <p className="lt-check"><Check /> Your first $10 in credits is on us.</p>
        </div>
        <div className="lt-panel lt-compbox">
          <div className="lt-comp-h"><AppIcon size={22} /> <b>What are we creating?</b></div>
          <div className="lt-input">
            <p>A launch video for my new product, with three different hooks...</p>
            <div className="lt-input-f">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"><path d="M13 7.5l-5 5a3.2 3.2 0 01-4.5-4.5l5.5-5.5a2.1 2.1 0 013 3L6 11a1 1 0 01-1.5-1.5L9.5 4.5" /></svg>
              <span className="lt-pill">Auto · Auto · Standard <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M2 3.5l3 3 3-3" /></svg></span>
              <span className="lt-send"><Arrow /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="lt-wrap lt-sec" id="audience">
        <h2 className="lt-h2c lt-h2s">Built for the way you grow.</h2>
        <p className="lt-lead">One content engine. Your kind of creative.</p>
        <div className="lt-audience">
          <div className="lt-aud-copy">
            <div className="lt-aud-tabs">
              {(Object.keys(AUD) as (keyof typeof AUD)[]).map((k) => <button key={k} className={aud === k ? 'on' : ''} onClick={() => setAud(k)}>{k}</button>)}
            </div>
            <h3>{a[0]}</h3>
            <p>{a[1]}</p>
            <ul>{a[2].map((x) => <li key={x}><Check /> {x}</li>)}</ul>
            <a href={go('start')} className="lt-try">{a[3]} <Arrow /></a>
          </div>
          <div className="lt-aud-vis">
            <div className="lt-clip lt-clip-big" style={{ background: 'linear-gradient(165deg,#b9a393,#6f5a4b)' }}>
              <svg viewBox="0 0 120 200" preserveAspectRatio="xMidYMax slice" className="lt-clip-fig" aria-hidden="true"><circle cx="60" cy="88" r="22" fill="#e0b399" /><path d="M14 200 C14 150 34 124 60 124 C86 124 106 150 106 200 Z" fill="#fdfaf6" opacity="0.88" /></svg>
              <span className="lt-clip-label">snacks</span><Play />
            </div>
            <small>A little inspiration for your next brief.</small>
          </div>
        </div>
      </section>

      {upgraded && (
        <>
          <ShareSection />
          <TeardownsSection />
          <FromAdsSection />
        </>
      )}

      <section className="lt-wrap lt-sec" id="workflows">
        <div className="lt-panel lt-workflows">
          <h2>Don't start from scratch.<br /><span>Start from what works.</span></h2>
          <p>Save your process as a workflow. Set a schedule, add review checkpoints, and keep your next batch moving.</p>
          <a href={go('top')} className="lt-ex">Explore workflows <ArrowUR /></a>
          <div className="lt-steps">
            {[['01', 'Set the direction', 'Your brand, your audience, your brief.'], ['02', 'Create & adapt', 'Fresh videos. More angles to explore.'], ['03', 'Review & repeat', 'Your standards, built into the process.']].map(([n, t, d]) => (
              <div key={n}><small>{n}</small><b>{t}</b><span>{d}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="lt-wrap lt-faq" id="faq">
        <div>
          <h2>A few things<br />you might be<br />wondering.</h2>
          <p className="lt-small">More questions? <a href={go('top')}>Head to the docs <ArrowUR /></a></p>
        </div>
        <div className="lt-faq-list">
          {FAQ.map(([q, ans], i) => (
            <div key={q} className={`lt-q ${open === i ? 'open' : ''}`}>
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}><span>{q}</span><Plus /></button>
              {open === i && <p>{ans}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="lt-final" id="final">
        <div className="lt-wrap lt-final-in">
          <AppIcon />
          <h2>Your next big thing<br />starts with one idea.</h2>
          <p>Let's make it happen.</p>
          <a href={go('top')} className="lt-btn">Start creating <Arrow /></a>
          <small>$10 free credit. No card required.</small>
        </div>
      </section>

      <footer className="lt-footer">
        <div className="lt-wrap">
          <div className="lt-foot-top">
            <div>
              <Wordmark />
              <p>The content engine for organic and paid growth.</p>
              <a href={go('start')} className="lt-btn lt-btn-sm">Start creating <Arrow /></a>
            </div>
            <div className="lt-foot-cols">
              <div><b>Product</b><a href={go('how')}>Product</a><a href={go('audience')}>Use cases</a><a href={go('gallery')}>Examples</a><a href={go('final')}>Pricing</a></div>
              <div><b>Resources</b>{upgraded && <a href={go('teardowns')}>Teardowns</a>}<a href={go('faq')}>Documentation</a><a href={go('top')}>Blog</a><a href={go('top')}>Sign in</a></div>
            </div>
          </div>
          <div className="lt-foot-bot"><span>© 2026 Latted (concept)</span><span><a href={go('top')}>Privacy policy</a><a href={go('top')}>Terms of service</a><button className="lt-icon" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun /> : <Moon />}</button></span></div>
        </div>
      </footer>
    </div>
  )
}
