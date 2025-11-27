import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Dawson Kinsman',
  description:
    'personal website.',
  href: 'https://dkinsman.github.io/dkinsman.github.io',
  author: 'dawson',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/photos',
    label: 'photos',
  },
  // {
  //   href: '/about',
  //   label: 'about',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/dkinsman',
    label: 'GitHub',
  },
  {
    href: 'mailto:dkinsman@msu.edu',
    label: 'Email',
  },
  {
    href: "https://www.linkedin.com/in/dawson-kinsman-a677951b4/",
    label: "LinkedIn"
  },
  {
    href:'https://orcid.org/0009-0007-5703-5027',
    label:"Library"
  }
  // {
  //   href: '/rss.xml',
  //   label: 'RSS',
  // },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  Library: "lucide:library-big"
}
