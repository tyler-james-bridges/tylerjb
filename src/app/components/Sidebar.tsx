"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { createPortal } from "react-dom";
import { navItems, socialLinks } from "./nav-config";

interface SidebarProps {
  isMobile: boolean;
}

export default function Sidebar({ isMobile }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCrtShutdown, setShowCrtShutdown] = useState(false);
  const [showHackerMode, setShowHackerMode] = useState(false);
  const [hackerLines, setHackerLines] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setIsScrolled(e.currentTarget.scrollTop > 0);
  };

  const handleRedButtonClick = () => {
    setShowCrtShutdown(true);
    // Reset after animation completes
    setTimeout(() => {
      setShowCrtShutdown(false);
    }, 2500);
  };

  const hackerMessages = [
    "$ sudo access --mainframe tylerjb.dev",
    "[CONNECTING] Establishing secure tunnel...",
    "[OK] Connection established",
    "$ decrypt --key=TYLER_2025 /secrets/",
    "[DECRYPTING] ████████░░░░░░░░ 42%",
    "[DECRYPTING] ████████████░░░░ 69%",
    "[DECRYPTING] ████████████████ 100%",
    "[SUCCESS] Decryption complete",
    "$ cat /secrets/about_tyler.txt",
    "> SUBJECT: Tyler James-Bridges",
    "> STATUS: Debugging something, probably",
    "> THREAT LEVEL: Mass texter",
    "> SKILLS: TypeScript, Playwright, Percussion",
    "> WARNING: Knows too much about NFTs",
    "$ access --level=root /hidden/",
    "[ALERT] Unauthorized access detected!",
    "[TRACE] Initiating counter-hack...",
    "$ run escape_protocol.sh",
    "[EXECUTING] ░░░░░░░░░░░░░░░░",
    "[EXECUTING] ████░░░░░░░░░░░░",
    "[EXECUTING] ████████░░░░░░░░",
    "[EXECUTING] ████████████████",
    "[SUCCESS] Escaped successfully. Close call!",
    "",
    "> Session terminated. Have a nice day :)"
  ];

  const handleYellowButtonClick = () => {
    setShowHackerMode(true);
    setHackerLines([]);

    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < hackerMessages.length) {
        setHackerLines(prev => [...prev, hackerMessages[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowHackerMode(false);
          setHackerLines([]);
        }, 1500);
      }
    }, 200);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div
      className={`${
        isMobile ? "w-full" : "w-[320px] border-r border-muted-foreground/20"
      } h-dvh flex flex-col bg-muted dark:bg-muted`}
    >
      {/* Header with traffic lights */}
      <div
        className={`px-4 py-3 flex items-center justify-between ${
          isScrolled ? "border-b shadow-sm" : ""
        }`}
      >
        {/* Traffic light buttons */}
        <div className="flex items-center gap-2 p-2">
          <button
            onClick={handleRedButtonClick}
            className="group relative"
            aria-label="Close"
          >
            <div className="traffic-light traffic-light-red" />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-xs text-black/70">
              ×
            </span>
          </button>
          <button
            onClick={handleYellowButtonClick}
            className="group relative"
            aria-label="Minimize"
          >
            <div className="traffic-light traffic-light-yellow" />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-xs text-black/70">
              −
            </span>
          </button>
          <button
            onClick={() => router.push("/playground")}
            className="group relative"
            aria-label="Maximize"
          >
            <div className="traffic-light traffic-light-green" />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-xs text-black/70">
              +
            </span>
          </button>
        </div>

        {/* Theme toggle */}
        <ThemeToggle />
      </div>

      {/* Scrollable content */}
      <div
        className="flex-1 overflow-y-auto scrollbar-thin px-2"
        onScroll={handleScroll}
      >
        {/* Profile section */}
        <div className="px-4 py-4 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-muted-foreground/20">
              <img
                src="/images/profile.jpg"
                alt="Tyler James-Bridges"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-foreground">Tyler James-Bridges</div>
              <div className="text-sm text-muted-foreground">Software Engineer</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          <p className="px-4 py-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Pages
          </p>
          {navItems.map((item) => {
            const active = isActive(item.href);
            // For drums, force a full reload to reset game state
            if (item.href === '/drums') {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`sidebar-nav-item mx-2 ${active ? "active" : ""}`}
                >
                  <span className="text-base">{item.emoji}</span>
                  <span className={active ? "font-medium" : ""}>{item.label}</span>
                </a>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`sidebar-nav-item mx-2 ${active ? "active" : ""}`}
              >
                <span className="text-base">{item.emoji}</span>
                <span className={active ? "font-medium" : ""}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Social links */}
        <div className="mt-6">
          <p className="px-4 py-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Connect
          </p>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="sidebar-nav-item mx-2"
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-muted-foreground/20">
        <p className="text-xs text-muted-foreground text-center">
          tylerjb.dev • {new Date().getFullYear()}
        </p>
      </div>

      {/* CRT Shutdown Effect Overlay */}
      {mounted && showCrtShutdown && createPortal(
        <div className="crt-shutdown-overlay">
          <div className="screen" />
          <div className="nice-try">NICE TRY 😏</div>
        </div>,
        document.body
      )}

      {/* Hacker Mode Overlay */}
      {mounted && showHackerMode && createPortal(
        <div className="hacker-overlay">
          <div className="hacker-scanline" />
          <div className="hacker-text">
            {hackerLines.map((line, i) => (
              <div key={i}>
                {line?.startsWith('$') ? (
                  <span className="command">{line}</span>
                ) : line?.startsWith('[OK]') || line?.startsWith('[SUCCESS]') ? (
                  <span className="success">{line}</span>
                ) : line?.startsWith('[ALERT]') || line?.startsWith('[TRACE]') ? (
                  <span className="error">{line}</span>
                ) : line?.startsWith('[') ? (
                  <span className="warning">{line}</span>
                ) : (
                  <span>{line || ''}</span>
                )}
              </div>
            ))}
            <span className="hacker-cursor" />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
