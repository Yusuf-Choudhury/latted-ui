import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

export const NOTE = 'Concept rebuild by Yusuf Choudhury for an application. Not affiliated with Latted.'
export const EMAIL = 'Yusuf@yusuf-choudhury.com'

export function PageTitle({ title }: { title: string }) {
  useEffect(() => { document.title = title }, [title])
  return null
}

export function NoteBanner({ children }: { children?: ReactNode }) {
  return (
    <div className="note-banner">
      <span>{NOTE}</span>
      {children ? <span className="note-links">{children}</span> : null}
    </div>
  )
}

export function NoteLinks({ current }: { current: 'original' | 'upgraded' | 'walkthrough' }) {
  return (
    <>
      {current !== 'original' && <Link to="/">Original</Link>}
      {current !== 'upgraded' && <Link to="/upgraded">Upgraded</Link>}
      {current !== 'walkthrough' && <Link to="/for-latted">Walkthrough</Link>}
    </>
  )
}
