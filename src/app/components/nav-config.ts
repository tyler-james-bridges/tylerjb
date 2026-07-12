export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: '/projects', label: 'Work' },
  { href: '/experience', label: 'Experience' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Writing' },
  { href: '/drums', label: 'Drums' },
  { href: '/contact', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/tyler-james-bridges',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/tyler-james-bridges-4344abab',
    label: 'LinkedIn',
  },
];
