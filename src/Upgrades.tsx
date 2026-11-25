import type { ReactNode } from 'react'
import { AppIcon, Arrow } from './Rebuild'

function Idea({ n, tag, title, noticed, change, measure, children }: {
  n: string; tag: string; title: string; noticed: string; change: string; measure: string; children: ReactNode
}) {
  return (
    <article className="up-idea">
      <div className="up-copy">
        <span className="up-num">{n}</span>
        <span className="up-tag">{tag}</span>
        <h3>{title}</h3>
        <dl>
          <dt>What I noticed</dt><dd>{noticed}</dd>
          <dt>What I would change</dt><dd>{change}</dd>
          <dt>How I would judge it</dt><dd>{measure}</dd>
        </dl>
      </div>
      <div className="lt up-mock">
        <span className="up-concept">Concept</span>
        {children}
      </div>
    </article>
  )
}

const Sw = ({ c }: { c: string }) => <i className="sw" style={{ background: c }} />

export function Upgrades() {
  return (
    <section className="up" id="ideas">
      <div className="pitch-wrap">
        <p className="pitch-kicker">02 What I would add</p>
        <h2 className="pitch-h2">Five growth ideas, each built as a real UI section.</h2>
        <p className="pitch-lead">
          These come from reading the live site and Latted's Y Combinator launch post. I have not seen your analytics, so treat each one as a
          hypothesis to test, not a promise. No made-up numbers here.
        </p>

        <Idea n="1" tag="Landing page" title="Let people start from the hero, not after it."
          noticed="The hero has two buttons and a row of example clips, while the prompt box, the thing people actually use, sits further down the page."
          change="Put a single field in the hero: paste your site, see ideas. Show the first storyboard before asking for a sign-up, while keeping the $10 credit and no card message."
          measure="Share of visitors who reach a first storyboard, and share of those who then sign up.">
          <div className="m-hero">
            <p className="lt-eyebrow">Automate growth</p>
            <h4>Paste your site.<br /><span>Get your first ad ideas.</span></h4>
            <div className="m-url"><span>yourbrand.com</span><b className="lt-btn lt-btn-sm">Show me ideas <Arrow /></b></div>
            <div className="m-chips"><span>Skincare brand</span><span>Mobile game</span><span>Software product</span></div>
            <small>$10 free credit. No card required.</small>
            <div className="m-slot">Space for customer logos, only once Latted has approved them</div>
          </div>
        </Idea>

        <Idea n="2" tag="Onboarding" title="Make the first five minutes feel like Latted already knows the brand."
          noticed="Engines start from a website, competitors, countries and a budget. That is the strongest part of the product, and a new user could meet it on day one."
          change="A four step flow: site, brand kit, three hook choices, storyboard. The sign-up prompt appears only when they press render, with their work already saved."
          measure="Time from landing to first exported video, and where people drop off between steps.">
          <div className="m-steps">
            {['Your site', 'Brand kit', 'Pick hooks', 'Storyboard'].map((s, i) => <span key={s} className={i === 2 ? 'on' : i < 2 ? 'done' : ''}><em>{i + 1}</em>{s}</span>)}
          </div>
          <div className="m-kit"><div><b>Brand kit found</b><span><Sw c="#22231f" /><Sw c="#c46a52" /><Sw c="#e9d8cf" /><Sw c="#6c8f7a" /></span></div><div><b>Tone</b><span className="m-chips"><span>Warm</span><span>Direct</span></span></div></div>
          <p className="m-label">Choose three hooks to try</p>
          <div className="m-hooks">
            {[['Problem first', '"Still scrolling for ad ideas?"', true], ['Result first', '"Seven videos before lunch."', true], ['Question', '"What would you make today?"', false], ['Social proof', 'Needs your real reviews', false]].map(([t, q, on]) => (
              <div key={t as string} className={on ? 'on' : ''}><b>{t as string}</b><span>{q as string}</span></div>
            ))}
          </div>
          <div className="m-foot"><span>Draft saved. Nothing to sign up for yet.</span><b className="lt-btn lt-btn-sm">Preview storyboard <Arrow /></b></div>
        </Idea>

        <Idea n="3" tag="Share and referral loops" title="Turn every video, and every Catch Up email, into an invitation."
          noticed="Teams review videos together, and Engines already email a daily Catch Up to a whole team. Both are moments where one person shows the product to another."
          change="A review link where teammates comment on scenes without an account, an optional small end card on exports, and a give and get credit offer in the same spot."
          measure="Invites sent per active project, and how many invited people create a project of their own.">
          <div className="m-share">
            <div className="m-sharebox">
              <div className="m-thumb"><span /></div>
              <div>
                <b>Spring launch, version 3</b>
                <p>Anyone with the link can watch and comment on scenes.</p>
                <div className="m-copy"><span>latted.example/review/spring-launch</span><b className="lt-btn lt-btn-sm">Copy link</b></div>
                <label><input type="checkbox" defaultChecked readOnly /> Add a small "Made with Latted" end card</label>
              </div>
            </div>
            <div className="m-ref">
              <AppIcon size={28} />
              <div><b>Give a friend $10, get $10</b><p>Suggested to match the $10 starter credit. The exact amount is Latted's call.</p></div>
              <b className="lt-btn lt-btn-sm lt-btn-ghost">Invite</b>
            </div>
            <div className="m-mail"><small>Daily Catch Up email, new footer</small><p>Forward this to a teammate who reviews creative. They can comment without signing up.</p></div>
          </div>
        </Idea>

        <Idea n="4" tag="Content, SEO and AEO" title="Publish what Explore already knows, in a form people and AI assistants can quote."
          noticed="Explore breaks down why an ad works: the hook, the structure and the pacing. That analysis is exactly what people search for, and it is also what AI assistants quote when asked how to write a good ad."
          change="Public teardown pages per category, each starting with a one paragraph answer, then hook, structure and pacing, then a Use in Composer button. Add comparison pages, workflow templates and a listing for the Claude, ChatGPT and Codex connection."
          measure="Pages indexed, mentions in AI answers for target questions, and sign-ups that start from a teardown page.">
          <div className="m-page">
            <small>Ad teardowns / Skincare</small>
            <h4>How do skincare video ads open?</h4>
            <p className="m-answer"><b>Short answer</b> Most start by showing a problem on camera in the first seconds, then move to a routine, then a result. Below are the patterns, with what to copy.</p>
            <div className="m-pat">
              {[['Hook', 'Problem on camera'], ['Structure', 'Problem, routine, result'], ['Pacing', 'Fast cuts, then a held shot']].map(([a, b]) => <div key={a}><small>{a}</small><b>{b}</b></div>)}
            </div>
            <div className="m-foot"><span className="m-chips"><span>Answer first</span><span>FAQ markup</span><span>llms.txt</span></span><b className="lt-btn lt-btn-sm">Use in Composer <Arrow /></b></div>
            <small className="m-note">Example copy for the layout only. Real pages would use real Explore data.</small>
          </div>
        </Idea>

        <Idea n="5" tag="Outbound and ICP" title="Send people a better version of their own ad, not a pitch."
          noticed="Your launch post names two groups clearly: small teams with a product and no marketing team, and growth or creative leads who run many Meta and TikTok ads."
          change="Start with the second group. Spot active advertisers in the Meta Ad Library, make three new hooks for one of their live ads, and send those first. Keep a tight list, then widen."
          measure="Reply rate and meetings per segment, and how many replies turn into a first project.">
          <div className="m-icp">
            <div className="m-row m-head"><span>Segment</span><span>Signal</span><span>First offer</span></div>
            {[['Growth leads at apps and games', 'Many live ads, often refreshed', 'Three new hooks for a live ad'], ['DTC brands with small teams', 'Steady ad spend, few variants', 'Same ad in two new markets'], ['Founders with no marketing hire', 'New launch, thin social presence', 'A launch film from their site']].map(([a, b, c]) => (
              <div className="m-row" key={a}><b>{a}</b><span>{b}</span><span>{c}</span></div>
            ))}
            <div className="m-mailbox">
              <small>Draft first message</small>
              <b>Three new hooks for your current [product] ad</b>
              <p>Hi [name], I watched your latest Meta ad and made three alternative openings in Latted, in case they are useful. [link]. If you want the Spanish version too, I can send it.</p>
            </div>
          </div>
        </Idea>

        <div className="up-plan">
          <h3>If I joined, my first month</h3>
          <div className="up-plan-grid">
            {[['Week 1', 'Learn the product and the customers. Use Explore, Composer and an Engine myself, and write down every moment of friction.'], ['Week 2', 'Ship the smallest test of idea 1 or 2 with your team, and set up simple tracking for it.'], ['Week 3', 'Draft the first ten teardown pages and a short list of 50 target accounts for idea 5.'], ['Week 4', 'Review what the tests show, drop what did not work, and plan the next month with you.']].map(([w, t]) => (
              <div key={w}><b>{w}</b><p>{t}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
