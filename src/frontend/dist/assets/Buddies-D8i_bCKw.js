import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, U as Users, S as Sparkles, u as ue } from "./index-DNNoM-aw.js";
import { a as Badge, B as Button, C as Card } from "./card-CVExSVy-.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Br3sJGUs.js";
import { u as useBuddies, m as motion } from "./use-mock-data-CfaPjUjY.js";
import { B as Briefcase } from "./briefcase-CDEFedcT.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$1);
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
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
const fieldColors = {
  Tech: "bg-primary/15 text-primary border-primary/30",
  Healthcare: "bg-emerald-500/15 text-emerald-700 border-emerald-400/30",
  Finance: "bg-destructive/15 text-destructive border-destructive/30",
  Academia: "bg-secondary/15 text-secondary border-secondary/30"
};
function scoreColor(score) {
  if (score >= 80) return "text-emerald-600";
  if (score >= 60) return "text-amber-500";
  return "text-muted-foreground";
}
function scoreRingColor(score) {
  if (score >= 80) return "text-primary";
  if (score >= 60) return "text-amber-500";
  return "text-muted-foreground";
}
function Initials({ name }) {
  const letters = name.split(" ").slice(0, 2).map((n) => n[0]).join("");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-primary-foreground text-sm shrink-0 bg-gradient-to-br from-primary to-accent", children: letters });
}
function MatchBadge({
  score,
  size = "md"
}) {
  const dim = size === "sm" ? 48 : 56;
  const r = size === "sm" ? 20 : 24;
  const circumference = 2 * Math.PI * r;
  const dash = score / 100 * circumference;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative flex items-center justify-center",
        style: { width: dim, height: dim },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "absolute inset-0 -rotate-90",
              viewBox: `0 0 ${dim} ${dim}`,
              role: "img",
              "aria-label": `${score}% match`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: dim / 2,
                    cy: dim / 2,
                    r,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "3",
                    className: "text-muted"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: dim / 2,
                    cy: dim / 2,
                    r,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeDasharray: `${dash} ${circumference}`,
                    className: `${scoreRingColor(score)} animate-pulse`,
                    style: { animationDuration: "2.5s" }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `font-bold ${size === "sm" ? "text-xs" : "text-sm"} ${scoreColor(score)}`,
              children: [
                score,
                "%"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground leading-none", children: "Match" })
  ] });
}
function TopMatchCard({
  profile,
  score,
  index,
  sent,
  onSend
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 14 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.1 },
      "data-ocid": `buddies.top_match.item.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border-l-4 border-l-primary hover:shadow-md transition-smooth relative overflow-hidden h-full flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MatchBadge, { score }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3 pr-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Initials, { name: profile.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-sm leading-tight", children: profile.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1 mt-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 shrink-0" }),
              " ",
              profile.city
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3 shrink-0" }),
              " ",
              profile.countryOfOrigin
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3 line-clamp-2 flex-1", children: profile.bio }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              className: `text-xs border ${fieldColors[profile.professionalField] ?? "bg-muted text-muted-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-2.5 h-2.5 mr-1" }),
                profile.professionalField
              ]
            }
          ),
          profile.languages.slice(0, 2).map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: lang }, lang))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: `w-full transition-smooth ${sent ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-primary text-primary-foreground hover:bg-primary/90"}`,
            onClick: onSend,
            disabled: sent,
            "data-ocid": `buddies.top_match.send_button.${index + 1}`,
            children: sent ? "Request Sent ✓" : "Send Buddy Request"
          }
        )
      ] })
    }
  );
}
function BuddyCard({
  buddy,
  index,
  sent,
  onSend
}) {
  const score = 70 + buddy.id % 28;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.97 },
      animate: { opacity: 1, scale: 1 },
      transition: { delay: index * 0.05 },
      "data-ocid": `buddies.item.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 hover:shadow-md transition-smooth border h-full flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Initials, { name: buddy.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm leading-tight", children: buddy.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1 mt-0.5 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: buddy.city }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: buddy.countryOfOrigin })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MatchBadge, { score, size: "sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            className: `text-xs border ${fieldColors[buddy.professionalField] ?? "bg-muted text-muted-foreground"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-2.5 h-2.5 mr-1" }),
              buddy.professionalField
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 mb-3 flex-1", children: buddy.bio }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-4", children: buddy.languages.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: l }, l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: `w-full transition-smooth ${sent ? "bg-emerald-600 text-white hover:bg-emerald-700" : buddy.isAvailable ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-muted text-muted-foreground cursor-not-allowed"}`,
            disabled: !buddy.isAvailable || sent,
            onClick: onSend,
            "data-ocid": `buddies.send_button.${index + 1}`,
            children: sent ? "Request Sent ✓" : buddy.isAvailable ? "Send Buddy Request" : "Unavailable"
          }
        )
      ] })
    }
  );
}
const CITIES = ["All", "Berlin", "Munich", "Hamburg", "Frankfurt"];
const FIELDS = ["All", "Tech", "Healthcare", "Academia", "Finance"];
function Buddies() {
  const { buddies, topMatches } = useBuddies();
  const [filterCity, setFilterCity] = reactExports.useState("All");
  const [filterField, setFilterField] = reactExports.useState("All");
  const [filterCountry, setFilterCountry] = reactExports.useState("All");
  const [sentIds, setSentIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const uniqueCountries = [
    "All",
    ...Array.from(new Set(buddies.map((b) => b.countryOfOrigin))).sort()
  ];
  const filtered = buddies.filter((b) => {
    if (filterCity !== "All" && b.city !== filterCity) return false;
    if (filterField !== "All" && b.professionalField !== filterField)
      return false;
    if (filterCountry !== "All" && b.countryOfOrigin !== filterCountry)
      return false;
    return true;
  });
  function handleSend(id, name) {
    setSentIds((prev) => /* @__PURE__ */ new Set([...prev, id]));
    ue.success(`Buddy request sent to ${name}!`, {
      description: "They'll receive your request and can accept when ready."
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "buddies.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b px-6 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        className: "flex items-start gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display-lg text-foreground", children: "She Buddy Peer Matching" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-md text-muted-foreground mt-1 max-w-2xl", children: "Get matched with women who've lived your journey in Germany. Our smart algorithm pairs you by city, field, and shared experiences — so your first steps feel less alone." })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-8 space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "buddies.top_matches.section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-amber-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display-md text-foreground", children: "Your Top Matches" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-100 text-amber-700 border-amber-300 border text-xs ml-1", children: "AI-powered" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-background border border-primary/15 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4 uppercase tracking-wide font-semibold", children: "Recommended based on your profile · Maria Silva · Berlin · Tech" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: topMatches.map((match, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TopMatchCard,
            {
              profile: match.profile,
              score: Number(match.score),
              index: i,
              sent: sentIds.has(`top-${match.profile.id.toString()}`),
              onSend: () => handleSend(
                `top-${match.profile.id.toString()}`,
                match.profile.name
              )
            },
            match.profile.id.toString()
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "buddies.filters.section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display-md text-foreground", children: "All Buddies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
            filtered.length,
            " match",
            filtered.length !== 1 ? "es" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 p-4 bg-muted/40 rounded-xl border mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide shrink-0", children: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterCity, onValueChange: setFilterCity, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "w-36 h-8 text-sm bg-card",
                  "data-ocid": "buddies.filter_city.select",
                  "aria-label": "Filter by city",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CITIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide shrink-0", children: "Field" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterField, onValueChange: setFilterField, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "w-40 h-8 text-sm bg-card",
                  "data-ocid": "buddies.filter_field.select",
                  "aria-label": "Filter by professional field",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: FIELDS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: f, children: f }, f)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide shrink-0", children: "Origin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterCountry, onValueChange: setFilterCountry, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "w-44 h-8 text-sm bg-card",
                  "data-ocid": "buddies.filter_country.select",
                  "aria-label": "Filter by country of origin",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: uniqueCountries.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
            ] })
          ] }),
          (filterCity !== "All" || filterField !== "All" || filterCountry !== "All") && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-8 text-xs text-muted-foreground hover:text-foreground",
              onClick: () => {
                setFilterCity("All");
                setFilterField("All");
                setFilterCountry("All");
              },
              "data-ocid": "buddies.clear_filters.button",
              children: "Clear filters"
            }
          )
        ] }),
        filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "text-center py-16 bg-muted/30 rounded-xl border",
            "data-ocid": "buddies.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: "No buddies match your filters" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Try adjusting your search criteria above" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: filtered.map((buddy, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          BuddyCard,
          {
            buddy,
            index: i,
            sent: sentIds.has(`all-${buddy.id.toString()}`),
            onSend: () => handleSend(`all-${buddy.id.toString()}`, buddy.name)
          },
          buddy.id.toString()
        )) })
      ] })
    ] })
  ] });
}
export {
  Buddies as default
};
