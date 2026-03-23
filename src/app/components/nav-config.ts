import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  Mail,
  Github,
  Linkedin,
  Twitter,
  LucideIcon,
} from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  shortLabel?: string;
  icon: LucideIcon;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/experience', label: 'Experience', icon: Briefcase },
  { href: '/projects', label: 'Projects', icon: FolderKanban },
  { href: '/contact', label: 'Contact', icon: Mail },
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
