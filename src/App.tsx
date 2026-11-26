import { Navigate, Route, Routes } from 'react-router-dom'
import { ForLatted } from './ForLatted'
import { NOTE, NoteBanner, NoteLinks, PageTitle } from './Note'
import { Rebuild } from './Rebuild'

function OriginalPage() {
  return (
    <>
      <PageTitle title="Latted | concept rebuild by Yusuf" />
      <NoteBanner><NoteLinks current="original" /></NoteBanner>
      <Rebuild variant="faithful" />
    </>
  )
}

function UpgradedPage() {
  return (
    <>
      <PageTitle title="Latted, upgraded | concept by Yusuf" />
      <NoteBanner><NoteLinks current="upgraded" /></NoteBanner>
      <Rebuild variant="upgraded" />
    </>
  )
}

function NotFound() {
  return (
    <div className="pitch" style={{ padding: '80px 24px' }}>
      <PageTitle title="Page not found | Latted concept" />
      <p className="pitch-lead">{NOTE}</p>
      <p style={{ margin: '18px 0' }}>That page is not here.</p>
      <p><a href="/">Original</a> · <a href="/upgraded">Upgraded</a> · <a href="/for-latted">Walkthrough</a></p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OriginalPage />} />
      <Route path="/upgraded" element={<UpgradedPage />} />
      <Route path="/for-latted" element={<ForLatted />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
