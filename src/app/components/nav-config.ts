export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: '/experience', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/drums', label: 'Drums' },
  { href: '/about', label: 'About' },
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
