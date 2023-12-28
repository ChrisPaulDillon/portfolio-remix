import { BsFolderFill } from 'react-icons/bs'
import {
  MdHome,
  MdOutlineBiotech,
  MdPermContactCalendar,
  MdWork
} from 'react-icons/md'
import { RiQuestionnaireFill } from 'react-icons/ri'

export type NavItemType = {
  icon: any
  href: string
  label: string
  onClose?: () => void
  isScrolling?: boolean
}

export const NAV_LINKS: NavItemType[] = [
  { icon: MdHome, href: '/', label: 'Home' },
  { icon: RiQuestionnaireFill, href: '/aboutme', label: 'About Me' },
  { icon: BsFolderFill, href: '/portfolio', label: 'Portfolio' },
  { icon: MdOutlineBiotech, href: '/technology', label: 'Technologies' },
  { icon: MdWork, href: '/experience', label: 'Experience' },
  { icon: MdPermContactCalendar, href: '/contact', label: 'Contact' }
]
