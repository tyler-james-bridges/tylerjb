import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  Mail,
  Drum,
  Github,
  Linkedin,
  Twitter,
  LucideIcon,
} from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  shortLabel?: string; // For mobile nav
  emoji: string;
  icon: LucideIcon;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Home', emoji: '🏠', icon: Home },
  {
    href: '/about',
    label: 'About Me',
    shortLabel: 'About',
    emoji: '👤',
    icon: User,
  },
  { href: '/experience', label: 'Experience', emoji: '💼', icon: Briefcase },
  { href: '/projects', label: 'Projects', emoji: '🚀', icon: FolderKanban },
  { href: '/contact', label: 'Contact', emoji: '✉️', icon: Mail },
  { href: '/drums', label: 'Drums', emoji: '🥁', icon: Drum },
];

export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/tyler-james-bridges',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/tyler-james-bridges-4344abab',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  { href: 'https://x.com/tmoney_145', label: 'X', icon: Twitter },
];
