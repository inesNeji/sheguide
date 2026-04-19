import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";
import { useDeadlines } from "../hooks/use-mock-data";
import type { Deadline } from "../types";
import { DeadlineStatus, Stage, VisaType } from "../types";

// ─── helpers ───────────────────────────────────────────────────────────────────

function daysUntil(dateStr: string): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const due = new Date(dateStr);
  due.setHours(0, 0, 0, 0);
  return Math.round((due.getTime() - now.getTime()) / 86_400_000);
}

function formatDue(days: number): string {
  if (days < 0) return `${Math.abs(days)}d overdue`;
  if (days === 0) return "Due today";
  if (days === 1) return "Due tomorrow";
  if (days < 7) return `${days} days`;
  if (days < 14) return "1 week";
  if (days < 30) return `${Math.floor(days / 7)} weeks`;
  return `${Math.ceil(days / 30)} month${Math.ceil(days / 30) > 1 ? "s" : ""}`;
}

// ─── config ────────────────────────────────────────────────────────────────────

const VISA_TABS: { label: string; value: VisaType }[] = [
  { label: "Student Visa", value: VisaType.student },
  { label: "Blue Card", value: VisaType.blueCard },
  { label: "General Residence", value: VisaType.generalResidence },
];

const FILTER_CHIPS: { label: string; value: DeadlineStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Urgent", value: DeadlineStatus.urgent },
  { label: "Upcoming", value: DeadlineStatus.upcoming },
  { label: "Completed", value: DeadlineStatus.completed },
];

const STAGE_CONFIG: Record<
  Stage,
  {
    label: string;
    color: string;
    dot: string;
    bg: string;
    border: string;
    rail: string;
  }
> = {
  [Stage.arrival]: {
    label: "Arrival & Immigration",
    color: "text-[oklch(0.52_0.19_25)]",
    dot: "bg-[oklch(0.62_0.19_25)]",
    bg: "bg-[oklch(0.97_0.03_25)]",
    border: "border-l-[oklch(0.62_0.19_25)]",
    rail: "bg-[oklch(0.85_0.06_25)]",
  },
  [Stage.settling]: {
    label: "Settling In",
    color: "text-[oklch(0.48_0.16_145)]",
    dot: "bg-[oklch(0.55_0.17_145)]",
    bg: "bg-[oklch(0.97_0.03_145)]",
    border: "border-l-[oklch(0.55_0.17_145)]",
    rail: "bg-[oklch(0.85_0.06_145)]",
  },
  [Stage.professional]: {
    label: "Professional Integration",
    color: "text-[oklch(0.48_0.14_185)]",
    dot: "bg-[oklch(0.55_0.14_185)]",
    bg: "bg-[oklch(0.97_0.03_185)]",
    border: "border-l-[oklch(0.55_0.14_185)]",
    rail: "bg-[oklch(0.85_0.06_185)]",
  },
};

const STATUS_CONFIG: Record<
  DeadlineStatus,
  {
    label: string;
    badge: string;
    dot: string;
    nodeDot: string;
    countBadge: string;
  }
> = {
  [DeadlineStatus.urgent]: {
    label: "Urgent",
    badge:
      "bg-[oklch(0.95_0.04_25)] text-[oklch(0.52_0.19_25)] border border-[oklch(0.88_0.08_25)]",
    dot: "bg-[oklch(0.62_0.19_25)]",
    nodeDot: "bg-[oklch(0.62_0.19_25)]",
    countBadge: "bg-[oklch(0.62_0.19_25)] text-white",
  },
  [DeadlineStatus.upcoming]: {
    label: "Upcoming",
    badge:
      "bg-[oklch(0.96_0.05_79)] text-[oklch(0.52_0.17_79)] border border-[oklch(0.88_0.09_79)]",
    dot: "bg-[oklch(0.72_0.17_79)]",
    nodeDot: "bg-[oklch(0.72_0.17_79)]",
    countBadge: "bg-[oklch(0.72_0.17_79)] text-white",
  },
  [DeadlineStatus.completed]: {
    label: "Completed",
    badge:
      "bg-[oklch(0.95_0.05_145)] text-[oklch(0.48_0.16_145)] border border-[oklch(0.86_0.08_145)]",
    dot: "bg-[oklch(0.55_0.17_145)]",
    nodeDot: "bg-[oklch(0.55_0.17_145)]",
    countBadge: "bg-[oklch(0.55_0.17_145)] text-white",
  },
};

// ─── DeadlineCard ──────────────────────────────────────────────────────────────

function DeadlineCard({
  deadline,
  index,
}: { deadline: Deadline; index: number }) {
  const days = daysUntil(deadline.dueDate);
  const stage = STAGE_CONFIG[deadline.stage];
  const status = STATUS_CONFIG[deadline.status];
  const isCompleted = deadline.status === DeadlineStatus.completed;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      data-ocid={`deadline.item.${index + 1}`}
      className={cn(
        "relative bg-card rounded-xl border border-border border-l-4 shadow-subtle p-4",
        "hover:shadow-md transition-smooth",
        stage.border,
        isCompleted && "opacity-70",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full",
                status.badge,
              )}
              data-ocid={`deadline.status_badge.${index + 1}`}
            >
              <span className={cn("w-1.5 h-1.5 rounded-full", status.dot)} />
              {status.label}
            </span>
            <span
              className={cn(
                "text-xs px-2 py-0.5 rounded-full font-medium",
                stage.bg,
                stage.color,
              )}
            >
              {stage.label}
            </span>
          </div>
          <h3
            className={cn(
              "font-display font-bold text-foreground leading-snug",
              isCompleted && "line-through text-muted-foreground",
            )}
          >
            {deadline.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {deadline.description}
          </p>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
            <span className="text-xs text-muted-foreground">
              Due:{" "}
              {new Date(deadline.dueDate).toLocaleDateString("en-DE", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
            {!isCompleted && (
              <a
                href={deadline.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[oklch(0.55_0.14_185)] hover:underline flex items-center gap-1 transition-smooth"
                data-ocid={`deadline.official_link.${index + 1}`}
              >
                Official info ↗
              </a>
            )}
          </div>
        </div>

        {/* Countdown bubble */}
        <div
          className={cn(
            "flex-shrink-0 flex flex-col items-center justify-center rounded-xl p-2 min-w-[60px] text-center",
            isCompleted
              ? "bg-[oklch(0.95_0.05_145)] text-[oklch(0.48_0.16_145)]"
              : days <= 7
                ? "bg-[oklch(0.95_0.04_25)] text-[oklch(0.52_0.19_25)]"
                : "bg-[oklch(0.96_0.05_79)] text-[oklch(0.52_0.17_79)]",
          )}
          data-ocid={`deadline.countdown.${index + 1}`}
        >
          {isCompleted ? (
            <>
              <svg
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                role="img"
                aria-label="Completed"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-semibold mt-0.5">Done</span>
            </>
          ) : (
            <>
              <span className="text-xl font-bold leading-none">
                {days < 0 ? "!" : days <= 99 ? days : "99+"}
              </span>
              <span className="text-[10px] font-medium mt-0.5 leading-tight">
                {days < 0
                  ? "overdue"
                  : days === 0
                    ? "today"
                    : days === 1
                      ? "day"
                      : "days"}
              </span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── TimelineSection ───────────────────────────────────────────────────────────

function TimelineSection({
  stage,
  deadlines,
  startIndex,
}: {
  stage: Stage;
  deadlines: Deadline[];
  startIndex: number;
}) {
  const cfg = STAGE_CONFIG[stage];
  if (deadlines.length === 0) return null;

  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <div className={cn("w-3 h-3 rounded-full flex-shrink-0", cfg.dot)} />
        <h2
          className={cn(
            "text-xs font-bold uppercase tracking-widest",
            cfg.color,
          )}
        >
          {cfg.label}
        </h2>
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground font-medium">
          {deadlines.length} task{deadlines.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="relative pl-6">
        <div
          className={cn(
            "absolute left-1.5 top-0 bottom-0 w-0.5 rounded-full",
            cfg.rail,
          )}
        />
        <div className="space-y-3">
          {deadlines.map((d, i) => (
            <div key={String(d.id)} className="relative">
              <div
                className={cn(
                  "absolute -left-[18px] top-5 w-2.5 h-2.5 rounded-full border-2 border-card z-10",
                  STATUS_CONFIG[d.status].nodeDot,
                )}
              />
              <DeadlineCard deadline={d} index={startIndex + i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── ProgressSummary ───────────────────────────────────────────────────────────

function ProgressSummary({ deadlines }: { deadlines: Deadline[] }) {
  const total = deadlines.length;
  const done = deadlines.filter(
    (d) => d.status === DeadlineStatus.completed,
  ).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const nextUrgent = deadlines
    .filter((d) => d.status === DeadlineStatus.urgent)
    .sort(
      (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
    )[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-card border border-border rounded-2xl p-5 shadow-subtle"
      data-ocid="deadlines.progress_summary"
    >
      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
        Your Progress
      </h3>

      <div className="flex items-end gap-2 mb-3">
        <span className="text-3xl font-bold font-display text-foreground">
          {done}
        </span>
        <span className="text-lg text-muted-foreground font-medium mb-0.5">
          / {total}
        </span>
        <span className="text-xs text-muted-foreground mb-1 ml-1">
          tasks done
        </span>
      </div>

      <div className="h-2 bg-muted rounded-full overflow-hidden mb-1">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="h-full rounded-full bg-[oklch(0.55_0.17_145)]"
        />
      </div>
      <p className="text-xs text-muted-foreground mb-4">{pct}% complete</p>

      {nextUrgent && (
        <div
          className="rounded-xl bg-[oklch(0.95_0.04_25)] border border-[oklch(0.88_0.08_25)] p-3 mb-4"
          data-ocid="deadlines.next_urgent"
        >
          <p className="text-xs font-bold text-[oklch(0.52_0.19_25)] uppercase tracking-wide mb-1">
            🚨 Next Urgent
          </p>
          <p className="text-sm font-semibold text-foreground">
            {nextUrgent.title}
          </p>
          <p className="text-xs text-[oklch(0.52_0.19_25)] mt-0.5 font-medium">
            {formatDue(daysUntil(nextUrgent.dueDate))}
          </p>
        </div>
      )}

      <div className="space-y-2">
        {(Object.keys(STAGE_CONFIG) as Stage[]).map((key) => {
          const cfg = STAGE_CONFIG[key];
          const count = deadlines.filter((d) => d.stage === key).length;
          const doneCount = deadlines.filter(
            (d) => d.stage === key && d.status === DeadlineStatus.completed,
          ).length;
          return (
            <div key={key} className="flex items-center gap-2 text-xs">
              <div
                className={cn("w-2 h-2 rounded-full flex-shrink-0", cfg.dot)}
              />
              <span className="text-muted-foreground flex-1 truncate min-w-0">
                {cfg.label}
              </span>
              <span className="font-semibold text-foreground">
                {doneCount}/{count}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export default function Deadlines() {
  const [visaType, setVisaType] = useState<VisaType>(VisaType.blueCard);
  const [filter, setFilter] = useState<DeadlineStatus | "all">("all");
  const { deadlines } = useDeadlines(visaType);

  const filtered =
    filter === "all" ? deadlines : deadlines.filter((d) => d.status === filter);

  const arrivalList = filtered.filter((d) => d.stage === Stage.arrival);
  const settlingList = filtered.filter((d) => d.stage === Stage.settling);
  const professionalList = filtered.filter(
    (d) => d.stage === Stage.professional,
  );

  const filterCounts: Record<DeadlineStatus | "all", number> = {
    all: deadlines.length,
    [DeadlineStatus.urgent]: deadlines.filter(
      (d) => d.status === DeadlineStatus.urgent,
    ).length,
    [DeadlineStatus.upcoming]: deadlines.filter(
      (d) => d.status === DeadlineStatus.upcoming,
    ).length,
    [DeadlineStatus.completed]: deadlines.filter(
      (d) => d.status === DeadlineStatus.completed,
    ).length,
  };

  return (
    <div className="min-h-screen bg-background" data-ocid="deadlines.page">
      {/* Header band */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl" aria-hidden>
                📅
              </span>
              <h1 className="text-display-md text-foreground">
                Smart Deadline Tracker
              </h1>
            </div>
            <p className="text-body-sm text-muted-foreground max-w-xl mt-1">
              Every deadline here is legally binding or time-sensitive on your
              German journey. Missing them can delay your visa, registration, or
              employment rights. Select your visa type to see your personalised
              checklist.
            </p>
          </motion.div>

          {/* Visa type tabs */}
          <div
            className="flex gap-1 mt-5 bg-muted rounded-xl p-1 w-fit"
            data-ocid="deadlines.visa_tabs"
          >
            {VISA_TABS.map((tab) => (
              <button
                type="button"
                key={tab.value}
                onClick={() => setVisaType(tab.value)}
                data-ocid={`deadlines.visa_tab.${tab.value}`}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-sm font-semibold transition-smooth",
                  visaType === tab.value
                    ? "bg-card text-foreground shadow-subtle"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Timeline column */}
          <div className="flex-1 min-w-0">
            {/* Filter chips */}
            <div
              className="flex flex-wrap gap-2 mb-6"
              data-ocid="deadlines.filter_chips"
            >
              {FILTER_CHIPS.map((chip) => {
                const isActive = filter === chip.value;
                const count = filterCounts[chip.value];
                return (
                  <button
                    type="button"
                    key={chip.value}
                    onClick={() => setFilter(chip.value)}
                    data-ocid={`deadlines.filter.${chip.value}`}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-smooth",
                      isActive
                        ? "bg-foreground text-background border-foreground"
                        : "bg-card text-foreground border-border hover:border-foreground/30",
                    )}
                  >
                    {chip.label}
                    <span
                      className={cn(
                        "text-xs px-1.5 py-0.5 rounded-full font-semibold",
                        isActive
                          ? "bg-background/20 text-background"
                          : chip.value === "all"
                            ? "bg-muted text-muted-foreground"
                            : STATUS_CONFIG[chip.value as DeadlineStatus]
                                .countBadge,
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Timeline */}
            {filtered.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center py-20 text-center"
                data-ocid="deadlines.empty_state"
              >
                <span className="text-5xl mb-4" aria-hidden>
                  🎉
                </span>
                <p className="text-display-md text-foreground mb-2">
                  All clear!
                </p>
                <p className="text-body-sm text-muted-foreground">
                  No deadlines match the current filter.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <TimelineSection
                  stage={Stage.arrival}
                  deadlines={arrivalList}
                  startIndex={0}
                />
                <TimelineSection
                  stage={Stage.settling}
                  deadlines={settlingList}
                  startIndex={arrivalList.length}
                />
                <TimelineSection
                  stage={Stage.professional}
                  deadlines={professionalList}
                  startIndex={arrivalList.length + settlingList.length}
                />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-4">
            <ProgressSummary deadlines={deadlines} />

            {/* Status guide */}
            <div className="bg-card border border-border rounded-2xl p-4 shadow-subtle">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Status Guide
              </h3>
              <div className="space-y-3">
                {(
                  [
                    DeadlineStatus.urgent,
                    DeadlineStatus.upcoming,
                    DeadlineStatus.completed,
                  ] as DeadlineStatus[]
                ).map((s) => {
                  const cfg = STATUS_CONFIG[s];
                  return (
                    <div key={s} className="flex items-start gap-2.5">
                      <div
                        className={cn(
                          "w-2.5 h-2.5 rounded-full mt-0.5 flex-shrink-0",
                          cfg.dot,
                        )}
                      />
                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          {cfg.label}
                        </p>
                        <p className="text-xs text-muted-foreground leading-snug">
                          {s === DeadlineStatus.urgent &&
                            "Act immediately — within 7 days"}
                          {s === DeadlineStatus.upcoming &&
                            "Plan ahead — within 4 weeks"}
                          {s === DeadlineStatus.completed &&
                            "Successfully completed ✓"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stage color guide */}
            <div className="bg-card border border-border rounded-2xl p-4 shadow-subtle">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Journey Stages
              </h3>
              <div className="space-y-2">
                {(Object.keys(STAGE_CONFIG) as Stage[]).map((key) => {
                  const cfg = STAGE_CONFIG[key];
                  return (
                    <div key={key} className="flex items-center gap-2">
                      <div
                        className={cn(
                          "w-1 h-6 rounded-full flex-shrink-0",
                          cfg.dot,
                        )}
                      />
                      <span className={cn("text-xs font-medium", cfg.color)}>
                        {cfg.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
