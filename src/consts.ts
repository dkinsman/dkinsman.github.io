import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Dawson Kinsman',
  description:
    'personal website.',
  href: 'https://dkinsman.github.io',
  author: 'dawson',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/research',
    label: 'research',
  },
  {href:'/files/resume.pdf',
    label:'resume'
  },
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/photos',
    label: 'photos',
  },
  
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/dkinsman',
    label: 'github',
  },
  {
    href: 'mailto:dkinsman@msu.edu',
    label: 'email',
  },
  {
    href: "https://www.linkedin.com/in/dawson-kinsman-a677951b4/",
    label: "linkedin"
  },
  {
    href:'https://orcid.org/0009-0007-5703-5027',
    label:"orcid"
  }
  // {
  //   href: '/rss.xml',
  //   label: 'RSS',
  // },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  github: 'lucide:github',
  linkedin: 'lucide:linkedin',
  email: 'lucide:mail',
  RSS: 'lucide:rss',
  orcid: "lucide:library-big"
}
