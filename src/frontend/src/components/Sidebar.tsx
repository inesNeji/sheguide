import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  CalendarClock,
  FileText,
  LayoutDashboard,
  Scale,
  Sparkles,
  Users,
} from "lucide-react";

const navItems = [
  {
    to: "/",
    label: "Dashboard",
    icon: LayoutDashboard,
    ocid: "nav.dashboard_link",
  },
  {
    to: "/buddies",
    label: "She Buddies",
    icon: Users,
    ocid: "nav.buddies_link",
  },
  {
    to: "/deadlines",
    label: "Deadlines",
    icon: CalendarClock,
    ocid: "nav.deadlines_link",
  },
  {
    to: "/forms",
    label: "Form Filler",
    icon: FileText,
    ocid: "nav.forms_link",
  },
  {
    to: "/rights",
    label: "Know Your Rights",
    icon: Scale,
    ocid: "nav.rights_link",
  },
];

const stages = [
  {
    label: "Arrival & Immigration",
    color: "bg-destructive",
    progress: 50,
    colorClass: "text-destructive",
  },
  {
    label: "Settling In",
    color: "bg-accent",
    progress: 25,
    colorClass: "text-accent",
  },
  {
    label: "Professional Integration",
    color: "bg-primary",
    progress: 10,
    colorClass: "text-primary",
  },
];

export function Sidebar() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <aside className="w-64 shrink-0 flex flex-col h-screen bg-foreground text-primary-foreground sticky top-0 overflow-y-auto">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-white">
            SheGuide
          </span>
        </div>
        <p className="text-xs text-white/50 mt-1 font-body">
          Your German Journey Companion
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = currentPath === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              data-ocid={item.ocid}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth",
                isActive
                  ? "bg-primary text-primary-foreground shadow-card-sm"
                  : "text-white/70 hover:bg-white/10 hover:text-white",
              )}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Journey Stage Progress */}
      <div className="px-4 py-4 border-t border-white/10">
        <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 font-display">
          Journey Progress
        </p>
        <div className="space-y-3">
          {stages.map((stage) => (
            <div key={stage.label}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-white/70 font-body">
                  {stage.label}
                </span>
                <span className="text-xs font-semibold text-white/60">
                  {stage.progress}%
                </span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-700",
                    stage.color,
                  )}
                  style={{ width: `${stage.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/10">
        <p className="text-xs text-white/30 text-center font-body">
          © {new Date().getFullYear()}{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            className="hover:text-white/60 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </aside>
  );
}
