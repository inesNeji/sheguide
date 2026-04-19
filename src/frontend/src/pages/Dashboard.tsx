import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  CalendarClock,
  FileText,
  Home,
  Plane,
  Scale,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import {
  useBuddies,
  useDeadlines,
  useUserProfile,
} from "../hooks/use-mock-data";
import { DeadlineStatus } from "../types";

// ── Stage data ──────────────────────────────────────────────────────────────
const stages = [
  {
    label: "Arrival & Immigration",
    sublabel: "Visas, registration & first steps",
    icon: Plane,
    progress: 50,
    bg: "bg-[oklch(0.58_0.19_25)]",
    bar: "bg-white/60",
    barTrack: "bg-white/20",
  },
  {
    label: "Settling In",
    sublabel: "Housing, banking & daily life",
    icon: Home,
    progress: 25,
    bg: "bg-[oklch(0.62_0.14_162)]",
    bar: "bg-white/60",
    barTrack: "bg-white/20",
  },
  {
    label: "Professional Integration",
    sublabel: "Career, credentials & networking",
    icon: Briefcase,
    progress: 10,
    bg: "bg-[oklch(0.65_0.08_185)]",
    bar: "bg-white/60",
    barTrack: "bg-white/20",
  },
];

// ── Deadline status styling ──────────────────────────────────────────────────
const statusBadge: Record<DeadlineStatus, string> = {
  [DeadlineStatus.urgent]:
    "bg-[oklch(0.58_0.19_25)]/15 text-[oklch(0.45_0.19_25)] border border-[oklch(0.58_0.19_25)]/30",
  [DeadlineStatus.upcoming]:
    "bg-[oklch(0.72_0.12_79)]/15 text-[oklch(0.52_0.14_76)] border border-[oklch(0.72_0.12_79)]/30",
  [DeadlineStatus.completed]:
    "bg-[oklch(0.62_0.14_162)]/15 text-[oklch(0.52_0.14_162)] border border-[oklch(0.62_0.14_162)]/30",
};

const statusDotClass: Record<DeadlineStatus, string> = {
  [DeadlineStatus.urgent]: "bg-[oklch(0.58_0.19_25)]",
  [DeadlineStatus.upcoming]: "bg-[oklch(0.72_0.12_79)]",
  [DeadlineStatus.completed]: "bg-[oklch(0.62_0.14_162)]",
};

const statusLabel: Record<DeadlineStatus, string> = {
  [DeadlineStatus.urgent]: "Urgent",
  [DeadlineStatus.upcoming]: "Soon",
  [DeadlineStatus.completed]: "Relaxed",
};

function getDueDateLabel(dueDate: string): string {
  const diff = Math.ceil(
    (new Date(dueDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24),
  );
  if (diff < 0) return "Completed";
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  if (diff <= 7) return `in ${diff} days`;
  if (diff <= 14) return "in 2 weeks";
  if (diff <= 30) return "in 1 month";
  return `in ${Math.ceil(diff / 30)} months`;
}

// ── Feature grid ────────────────────────────────────────────────────────────
const features = [
  {
    icon: Users,
    title: "She Buddy",
    description: "Find your peer mentor",
    href: "/buddies",
    accent: "text-[oklch(0.65_0.08_185)]",
    iconBg: "bg-[oklch(0.65_0.08_185)]/10",
    ocid: "dashboard.feature.buddies_card",
  },
  {
    icon: CalendarClock,
    title: "Deadline Tracker",
    description: "Stay on top of key dates",
    href: "/deadlines",
    accent: "text-[oklch(0.58_0.19_25)]",
    iconBg: "bg-[oklch(0.58_0.19_25)]/10",
    ocid: "dashboard.feature.deadlines_card",
  },
  {
    icon: FileText,
    title: "Form Pre-Filler",
    description: "Auto-complete German forms",
    href: "/forms",
    accent: "text-[oklch(0.62_0.14_162)]",
    iconBg: "bg-[oklch(0.62_0.14_162)]/10",
    ocid: "dashboard.feature.forms_card",
  },
  {
    icon: Scale,
    title: "Rights Tool",
    description: "Know your legal rights",
    href: "/rights",
    accent: "text-[oklch(0.52_0.14_76)]",
    iconBg: "bg-[oklch(0.52_0.14_76)]/10",
    ocid: "dashboard.feature.rights_card",
  },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const { topMatches } = useBuddies();
  const { urgent, upcoming } = useDeadlines();
  const user = useUserProfile();

  const featuredDeadlines = [...urgent, ...upcoming].slice(0, 3);
  const firstName = user.fullName.split(" ")[0];

  return (
    <div
      className="p-6 md:p-8 max-w-6xl mx-auto space-y-10"
      data-ocid="dashboard.page"
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative rounded-2xl overflow-hidden bg-card border border-border p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6"
        data-ocid="dashboard.hero.section"
      >
        {/* background gradient accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 95% 50%, oklch(0.65 0.08 185 / 0.10), transparent)",
          }}
        />
        <div className="flex-1 relative">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
              <Sparkles className="w-3 h-3" />
              Your SheGuide
            </span>
          </div>
          <h1 className="text-display-lg text-foreground">
            Willkommen, {firstName}! 👋
          </h1>
          <p className="text-body-md text-muted-foreground mt-2 max-w-lg">
            Your personalised guide to thriving in Germany — from first steps to
            career growth. We&apos;re with you every step of the way.
          </p>
          <div className="mt-5 flex gap-3 flex-wrap">
            <Link to="/buddies">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 transition-smooth"
                data-ocid="dashboard.hero.find_buddy_button"
              >
                <Users className="w-4 h-4" />
                Find a She Buddy
              </Button>
            </Link>
            <Link to="/deadlines">
              <Button
                variant="outline"
                className="gap-2 transition-smooth"
                data-ocid="dashboard.hero.view_deadlines_button"
              >
                <CalendarClock className="w-4 h-4" />
                View Deadlines
              </Button>
            </Link>
          </div>
        </div>
        {/* Stats pill row */}
        <div className="flex md:flex-col gap-3 shrink-0">
          {[
            { label: "Days in Germany", value: "49" },
            { label: "Pending Tasks", value: urgent.length.toString() },
            { label: "Buddy Matches", value: "8" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-muted/60 rounded-xl px-4 py-3 text-center min-w-[90px]"
            >
              <p className="text-display-md text-primary leading-none">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Journey Stages ──────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        data-ocid="dashboard.stages.section"
      >
        <h2 className="text-display-md text-foreground mb-4">
          Your German Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              data-ocid={`dashboard.stage.item.${i + 1}`}
            >
              <Card
                className={cn(
                  "relative overflow-hidden p-5 cursor-pointer hover:scale-[1.02] transition-smooth border-0",
                  stage.bg,
                )}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-display font-bold text-white text-sm leading-tight">
                      {stage.label}
                    </p>
                    <p className="text-white/75 text-xs mt-0.5 leading-tight">
                      {stage.sublabel}
                    </p>
                    <p className="text-white/90 text-xs font-semibold mt-2">
                      {stage.progress}% Complete
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <stage.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div
                  className={cn(
                    "mt-4 h-1.5 rounded-full overflow-hidden",
                    stage.barTrack,
                  )}
                >
                  <motion.div
                    className={cn("h-full rounded-full", stage.bar)}
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.progress}%` }}
                    transition={{
                      delay: 0.35 + i * 0.1,
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── She Buddy + Deadlines row ────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* She Buddy Peer Matching — wider */}
        <motion.section
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          data-ocid="dashboard.buddies.section"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-display-md text-foreground">
                She Buddy Peer Matching
              </h2>
            </div>
            <Link to="/buddies">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary gap-1 transition-smooth"
                data-ocid="dashboard.buddies.see_all_link"
              >
                See all <ArrowRight className="w-3 h-3" />
              </Button>
            </Link>
          </div>

          {/* Horizontal carousel */}
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth -mx-1 px-1">
            {topMatches.map((match, i) => (
              <Card
                key={match.profile.id.toString()}
                className="snap-start shrink-0 w-56 p-4 border hover:shadow-card-sm transition-smooth flex flex-col gap-3"
                data-ocid={`dashboard.buddy.item.${i + 1}`}
              >
                {/* Avatar + score ring */}
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center font-display font-bold text-primary text-sm">
                      {match.profile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    {/* teal ring */}
                    <svg
                      className="absolute -inset-1 w-14 h-14 -rotate-90"
                      viewBox="0 0 56 56"
                      aria-hidden="true"
                    >
                      <circle
                        cx="28"
                        cy="28"
                        r="25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="text-muted"
                      />
                      <circle
                        cx="28"
                        cy="28"
                        r="25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeDasharray={`${(Number(match.score) / 100) * 157} 157`}
                        strokeLinecap="round"
                        className="text-primary"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm truncate">
                      {match.profile.name}
                    </p>
                    <span className="text-[11px] font-bold text-primary">
                      {match.score.toString()}% Match
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-xs text-muted-foreground truncate">
                    From {match.profile.countryOfOrigin}, {match.profile.city}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    <span className="font-medium text-foreground">
                      Interests:{" "}
                    </span>
                    {match.profile.professionalField}, languages & more
                  </p>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-xs"
                  data-ocid={`dashboard.buddy.connect_button.${i + 1}`}
                >
                  Connect
                </Button>
              </Card>
            ))}

            {/* "View all" filler card */}
            <Card
              className="snap-start shrink-0 w-40 border-dashed border-2 flex flex-col items-center justify-center gap-2 p-4 cursor-pointer hover:bg-muted/30 transition-smooth"
              data-ocid="dashboard.buddies.view_all_card"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground text-center font-medium">
                View all 8 matches
              </p>
            </Card>
          </div>
        </motion.section>

        {/* Smart Deadline Tracker */}
        <motion.section
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          data-ocid="dashboard.deadlines.section"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-primary" />
              <h2 className="text-display-md text-foreground">Deadlines</h2>
            </div>
            <Link to="/deadlines">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary gap-1 transition-smooth"
                data-ocid="dashboard.deadlines.see_all_link"
              >
                See all <ArrowRight className="w-3 h-3" />
              </Button>
            </Link>
          </div>

          <div className="space-y-3">
            {featuredDeadlines.map((deadline, i) => (
              <Card
                key={deadline.id.toString()}
                className="p-4 border hover:shadow-card-sm transition-smooth"
                data-ocid={`dashboard.deadline.item.${i + 1}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-1.5 w-2 h-2 rounded-full shrink-0",
                      statusDotClass[deadline.status],
                    )}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <Badge
                        className={cn(
                          "text-[10px] font-semibold px-2 py-0 capitalize rounded-full",
                          statusBadge[deadline.status],
                        )}
                      >
                        {statusLabel[deadline.status]}
                      </Badge>
                    </div>
                    <p className="font-semibold text-foreground text-sm leading-snug truncate">
                      {deadline.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {getDueDateLabel(deadline.dueDate)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            {urgent.length === 0 && upcoming.length === 0 && (
              <div
                className="text-center py-8 text-muted-foreground text-sm"
                data-ocid="dashboard.deadlines.empty_state"
              >
                No upcoming deadlines 🎉
              </div>
            )}
          </div>
        </motion.section>
      </div>

      {/* ── Feature Quick-Access Grid ────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        data-ocid="dashboard.features.section"
      >
        <h2 className="text-display-md text-foreground mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <Link to={feature.href} key={feature.title}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.07, duration: 0.35 }}
              >
                <Card
                  className="p-5 border hover:shadow-card-sm hover:border-primary/30 transition-smooth cursor-pointer group h-full"
                  data-ocid={feature.ocid}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-smooth group-hover:scale-110",
                      feature.iconBg,
                    )}
                  >
                    <feature.icon className={cn("w-5 h-5", feature.accent)} />
                  </div>
                  <p className="font-display font-bold text-foreground text-sm">
                    {feature.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">
                    {feature.description}
                  </p>
                  <div
                    className={cn(
                      "flex items-center gap-1 mt-3 text-xs font-semibold",
                      feature.accent,
                    )}
                  >
                    Open{" "}
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* ── AI Form Pre-Filler Teaser ────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        data-ocid="dashboard.form_filler.section"
      >
        <Card className="border-l-4 border-l-primary bg-primary/5 p-6 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-primary shrink-0" />
              <h3 className="font-display font-bold text-foreground text-lg">
                AI Form Pre-Filler Preview
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              AI is pre-filling your details. Review and submit German forms
              effortlessly — no more repetitive typing.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 shrink-0">
            {[
              { label: "Full Name", value: user.fullName },
              { label: "City", value: user.city },
              { label: "Date of Birth", value: "15.05.1993" },
            ].map((field) => (
              <div key={field.label}>
                <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-wide font-semibold">
                  {field.label}
                </p>
                <div className="text-sm font-medium bg-card border border-border rounded-lg px-3 py-2 truncate">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <Link to="/forms" className="shrink-0">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 transition-smooth whitespace-nowrap"
              data-ocid="dashboard.form_filler.open_button"
            >
              <FileText className="w-4 h-4" />
              Open Form Filler
            </Button>
          </Link>
        </Card>
      </motion.section>
    </div>
  );
}
