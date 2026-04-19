import { c as createLucideIcon, j as jsxRuntimeExports, S as Sparkles, L as Link, U as Users, C as CalendarClock, a as cn, F as FileText, b as Scale } from "./index-DNNoM-aw.js";
import { B as Button, C as Card, a as Badge } from "./card-CVExSVy-.js";
import { u as useBuddies, a as useDeadlines, m as motion, b as useUserProfile, D as DeadlineStatus } from "./use-mock-data-CfaPjUjY.js";
import { B as Briefcase } from "./briefcase-CDEFedcT.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
];
const Plane = createLucideIcon("plane", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
const stages = [
  {
    label: "Arrival & Immigration",
    sublabel: "Visas, registration & first steps",
    icon: Plane,
    progress: 50,
    bg: "bg-[oklch(0.58_0.19_25)]",
    bar: "bg-white/60",
    barTrack: "bg-white/20"
  },
  {
    label: "Settling In",
    sublabel: "Housing, banking & daily life",
    icon: House,
    progress: 25,
    bg: "bg-[oklch(0.62_0.14_162)]",
    bar: "bg-white/60",
    barTrack: "bg-white/20"
  },
  {
    label: "Professional Integration",
    sublabel: "Career, credentials & networking",
    icon: Briefcase,
    progress: 10,
    bg: "bg-[oklch(0.65_0.08_185)]",
    bar: "bg-white/60",
    barTrack: "bg-white/20"
  }
];
const statusBadge = {
  [DeadlineStatus.urgent]: "bg-[oklch(0.58_0.19_25)]/15 text-[oklch(0.45_0.19_25)] border border-[oklch(0.58_0.19_25)]/30",
  [DeadlineStatus.upcoming]: "bg-[oklch(0.72_0.12_79)]/15 text-[oklch(0.52_0.14_76)] border border-[oklch(0.72_0.12_79)]/30",
  [DeadlineStatus.completed]: "bg-[oklch(0.62_0.14_162)]/15 text-[oklch(0.52_0.14_162)] border border-[oklch(0.62_0.14_162)]/30"
};
const statusDotClass = {
  [DeadlineStatus.urgent]: "bg-[oklch(0.58_0.19_25)]",
  [DeadlineStatus.upcoming]: "bg-[oklch(0.72_0.12_79)]",
  [DeadlineStatus.completed]: "bg-[oklch(0.62_0.14_162)]"
};
const statusLabel = {
  [DeadlineStatus.urgent]: "Urgent",
  [DeadlineStatus.upcoming]: "Soon",
  [DeadlineStatus.completed]: "Relaxed"
};
function getDueDateLabel(dueDate) {
  const diff = Math.ceil(
    (new Date(dueDate).getTime() - Date.now()) / (1e3 * 60 * 60 * 24)
  );
  if (diff < 0) return "Completed";
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  if (diff <= 7) return `in ${diff} days`;
  if (diff <= 14) return "in 2 weeks";
  if (diff <= 30) return "in 1 month";
  return `in ${Math.ceil(diff / 30)} months`;
}
const features = [
  {
    icon: Users,
    title: "She Buddy",
    description: "Find your peer mentor",
    href: "/buddies",
    accent: "text-[oklch(0.65_0.08_185)]",
    iconBg: "bg-[oklch(0.65_0.08_185)]/10",
    ocid: "dashboard.feature.buddies_card"
  },
  {
    icon: CalendarClock,
    title: "Deadline Tracker",
    description: "Stay on top of key dates",
    href: "/deadlines",
    accent: "text-[oklch(0.58_0.19_25)]",
    iconBg: "bg-[oklch(0.58_0.19_25)]/10",
    ocid: "dashboard.feature.deadlines_card"
  },
  {
    icon: FileText,
    title: "Form Pre-Filler",
    description: "Auto-complete German forms",
    href: "/forms",
    accent: "text-[oklch(0.62_0.14_162)]",
    iconBg: "bg-[oklch(0.62_0.14_162)]/10",
    ocid: "dashboard.feature.forms_card"
  },
  {
    icon: Scale,
    title: "Rights Tool",
    description: "Know your legal rights",
    href: "/rights",
    accent: "text-[oklch(0.52_0.14_76)]",
    iconBg: "bg-[oklch(0.52_0.14_76)]/10",
    ocid: "dashboard.feature.rights_card"
  }
];
function Dashboard() {
  const { topMatches } = useBuddies();
  const { urgent, upcoming } = useDeadlines();
  const user = useUserProfile();
  const featuredDeadlines = [...urgent, ...upcoming].slice(0, 3);
  const firstName = user.fullName.split(" ")[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "p-6 md:p-8 max-w-6xl mx-auto space-y-10",
      "data-ocid": "dashboard.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 14 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.45 },
            className: "relative rounded-2xl overflow-hidden bg-card border border-border p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6",
            "data-ocid": "dashboard.hero.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none",
                  "aria-hidden": "true",
                  style: {
                    background: "radial-gradient(ellipse 60% 80% at 95% 50%, oklch(0.65 0.08 185 / 0.10), transparent)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
                  "Your SheGuide"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display-lg text-foreground", children: [
                  "Willkommen, ",
                  firstName,
                  "! 👋"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-md text-muted-foreground mt-2 max-w-lg", children: "Your personalised guide to thriving in Germany — from first steps to career growth. We're with you every step of the way." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-3 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/buddies", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      className: "bg-primary text-primary-foreground hover:bg-primary/90 gap-2 transition-smooth",
                      "data-ocid": "dashboard.hero.find_buddy_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
                        "Find a She Buddy"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/deadlines", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      className: "gap-2 transition-smooth",
                      "data-ocid": "dashboard.hero.view_deadlines_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "w-4 h-4" }),
                        "View Deadlines"
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:flex-col gap-3 shrink-0", children: [
                { label: "Days in Germany", value: "49" },
                { label: "Pending Tasks", value: urgent.length.toString() },
                { label: "Buddy Matches", value: "8" }
              ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-muted/60 rounded-xl px-4 py-3 text-center min-w-[90px]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-display-md text-primary leading-none", children: stat.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-tight", children: stat.label })
                  ]
                },
                stat.label
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1, duration: 0.4 },
            "data-ocid": "dashboard.stages.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display-md text-foreground mb-4", children: "Your German Journey" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: stages.map((stage, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.15 + i * 0.08, duration: 0.4 },
                  "data-ocid": `dashboard.stage.item.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Card,
                    {
                      className: cn(
                        "relative overflow-hidden p-5 cursor-pointer hover:scale-[1.02] transition-smooth border-0",
                        stage.bg
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-white text-sm leading-tight", children: stage.label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 text-xs mt-0.5 leading-tight", children: stage.sublabel }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/90 text-xs font-semibold mt-2", children: [
                              stage.progress,
                              "% Complete"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(stage.icon, { className: "w-5 h-5 text-white" }) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: cn(
                              "mt-4 h-1.5 rounded-full overflow-hidden",
                              stage.barTrack
                            ),
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.div,
                              {
                                className: cn("h-full rounded-full", stage.bar),
                                initial: { width: 0 },
                                animate: { width: `${stage.progress}%` },
                                transition: {
                                  delay: 0.35 + i * 0.1,
                                  duration: 0.7,
                                  ease: "easeOut"
                                }
                              }
                            )
                          }
                        )
                      ]
                    }
                  )
                },
                stage.label
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.section,
            {
              className: "lg:col-span-3",
              initial: { opacity: 0, x: -8 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.2, duration: 0.4 },
              "data-ocid": "dashboard.buddies.section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display-md text-foreground", children: "She Buddy Peer Matching" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/buddies", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "text-primary gap-1 transition-smooth",
                      "data-ocid": "dashboard.buddies.see_all_link",
                      children: [
                        "See all ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth -mx-1 px-1", children: [
                  topMatches.map((match, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Card,
                    {
                      className: "snap-start shrink-0 w-56 p-4 border hover:shadow-card-sm transition-smooth flex flex-col gap-3",
                      "data-ocid": `dashboard.buddy.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative shrink-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center font-display font-bold text-primary text-sm", children: match.profile.name.split(" ").map((n) => n[0]).join("") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "svg",
                              {
                                className: "absolute -inset-1 w-14 h-14 -rotate-90",
                                viewBox: "0 0 56 56",
                                "aria-hidden": "true",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "circle",
                                    {
                                      cx: "28",
                                      cy: "28",
                                      r: "25",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2.5",
                                      className: "text-muted"
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "circle",
                                    {
                                      cx: "28",
                                      cy: "28",
                                      r: "25",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2.5",
                                      strokeDasharray: `${Number(match.score) / 100 * 157} 157`,
                                      strokeLinecap: "round",
                                      className: "text-primary"
                                    }
                                  )
                                ]
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm truncate", children: match.profile.name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-primary", children: [
                              match.score.toString(),
                              "% Match"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground truncate", children: [
                            "From ",
                            match.profile.countryOfOrigin,
                            ", ",
                            match.profile.city
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
                              "Interests:",
                              " "
                            ] }),
                            match.profile.professionalField,
                            ", languages & more"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            size: "sm",
                            variant: "outline",
                            className: "w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-xs",
                            "data-ocid": `dashboard.buddy.connect_button.${i + 1}`,
                            children: "Connect"
                          }
                        )
                      ]
                    },
                    match.profile.id.toString()
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Card,
                    {
                      className: "snap-start shrink-0 w-40 border-dashed border-2 flex flex-col items-center justify-center gap-2 p-4 cursor-pointer hover:bg-muted/30 transition-smooth",
                      "data-ocid": "dashboard.buddies.view_all_card",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-muted-foreground" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center font-medium", children: "View all 8 matches" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.section,
            {
              className: "lg:col-span-2",
              initial: { opacity: 0, x: 8 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.25, duration: 0.4 },
              "data-ocid": "dashboard.deadlines.section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "w-5 h-5 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display-md text-foreground", children: "Deadlines" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/deadlines", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "text-primary gap-1 transition-smooth",
                      "data-ocid": "dashboard.deadlines.see_all_link",
                      children: [
                        "See all ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  featuredDeadlines.map((deadline, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Card,
                    {
                      className: "p-4 border hover:shadow-card-sm transition-smooth",
                      "data-ocid": `dashboard.deadline.item.${i + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: cn(
                              "mt-1.5 w-2 h-2 rounded-full shrink-0",
                              statusDotClass[deadline.status]
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              className: cn(
                                "text-[10px] font-semibold px-2 py-0 capitalize rounded-full",
                                statusBadge[deadline.status]
                              ),
                              children: statusLabel[deadline.status]
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm leading-snug truncate", children: deadline.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: getDueDateLabel(deadline.dueDate) })
                        ] })
                      ] })
                    },
                    deadline.id.toString()
                  )),
                  urgent.length === 0 && upcoming.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "text-center py-8 text-muted-foreground text-sm",
                      "data-ocid": "dashboard.deadlines.empty_state",
                      children: "No upcoming deadlines 🎉"
                    }
                  )
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.35, duration: 0.4 },
            "data-ocid": "dashboard.features.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display-md text-foreground mb-4", children: "Quick Access" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: feature.href, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4 + i * 0.07, duration: 0.35 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Card,
                    {
                      className: "p-5 border hover:shadow-card-sm hover:border-primary/30 transition-smooth cursor-pointer group h-full",
                      "data-ocid": feature.ocid,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-smooth group-hover:scale-110",
                              feature.iconBg
                            ),
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: cn("w-5 h-5", feature.accent) })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-sm", children: feature.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-snug", children: feature.description }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: cn(
                              "flex items-center gap-1 mt-3 text-xs font-semibold",
                              feature.accent
                            ),
                            children: [
                              "Open",
                              " ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 transition-transform group-hover:translate-x-0.5" })
                            ]
                          }
                        )
                      ]
                    }
                  )
                }
              ) }, feature.title)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.section,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.45, duration: 0.4 },
            "data-ocid": "dashboard.form_filler.section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-l-4 border-l-primary bg-primary/5 p-6 flex flex-col md:flex-row md:items-center gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg", children: "AI Form Pre-Filler Preview" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "AI is pre-filling your details. Review and submit German forms effortlessly — no more repetitive typing." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 shrink-0", children: [
                { label: "Full Name", value: user.fullName },
                { label: "City", value: user.city },
                { label: "Date of Birth", value: "15.05.1993" }
              ].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1 uppercase tracking-wide font-semibold", children: field.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium bg-card border border-border rounded-lg px-3 py-2 truncate", children: field.value })
              ] }, field.label)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/forms", className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "bg-primary text-primary-foreground hover:bg-primary/90 gap-2 transition-smooth whitespace-nowrap",
                  "data-ocid": "dashboard.form_filler.open_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
                    "Open Form Filler"
                  ]
                }
              ) })
            ] })
          }
        )
      ]
    }
  );
}
export {
  Dashboard as default
};
