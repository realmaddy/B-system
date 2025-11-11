"use client";

import {
  Home,
  ListChecks,
  ClipboardList,
  Film,
  PlaySquare,
  Users,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // ✅ تفادي مشاكل الـ hydration
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const links = [
    { name: "HOME", icon: <Home className="w-5 h-5" />, href: "/" },
    { name: "TASKS", icon: <ListChecks className="w-5 h-5" />, href: "/tasks" },
    { name: "REQUESTS", icon: <ClipboardList className="w-5 h-5" />, href: "/requests" },
    { name: "MOVIES", icon: <Film className="w-5 h-5" />, href: "/films" },
    { name: "SERIES", icon: <PlaySquare className="w-5 h-5" />, href: "/series" },
    { name: "USERS", icon: <Users className="w-5 h-5" />, href: "/users" },
    { name: "ROLES", icon: <Shield className="w-5 h-5" />, href: "/roles" },
  ];

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-card border-r border-border h-screen flex flex-col transition-all duration-300 sticky top-0`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg h-9 w-9 flex items-center justify-center text-sm shadow-sm">
            BS
          </div>
          {!collapsed && (
            <h1 className="font-semibold text-foreground text-sm tracking-tight">
              Bot System
            </h1>
          )}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-md hover:bg-muted text-muted-foreground"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3">
        <ul className="space-y-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 text-[15px] font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 shadow-sm"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  <span className="flex-shrink-0">{link.icon}</span>
                  {!collapsed && <span>{link.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <footer className="px-5 py-4 border-t border-border text-[11px] text-muted-foreground flex items-center justify-between">
        {!collapsed ? (
          <>
            <p>
              © 2025 <span className="font-medium">Bot System</span>
            </p>
            <ModeToggle />
          </>
        ) : (
          <div className="flex flex-col items-center gap-2 w-full">
            <p className="text-[10px]">©</p>
            <ModeToggle />
          </div>
        )}
      </footer>
    </aside>
  );
}
