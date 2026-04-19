# Design Brief: SheGuide

## Foundation
**Purpose**: Integration super-app for international women navigating life stages in Germany. **Tone**: warm, inclusive, empowering. **Aesthetic**: editorial + modern tech with human touch. **Visual Intensity**: showcase-to-productivity blend — rich cards with high information density.

## Palette
| Token | Light OKLCH | Dark OKLCH | Semantic |
|-------|-----------|-----------|----------|
| Primary | 0.65 0.08 185 | 0.72 0.08 185 | Teal; core actions, She Buddy matching |
| Secondary | 0.7 0.06 140 | 0.75 0.06 140 | Green accent; success, affirmative states |
| Accent | 0.7 0.065 135 | 0.75 0.065 135 | Emerald; highlights, journey badges |
| Destructive | 0.58 0.19 25 | 0.68 0.18 22 | Coral red; urgent deadlines, alerts |
| Background | 0.98 0.02 102 | 0.13 0.02 255 | Warm sand (light); deep indigo (dark) |
| Foreground | 0.2 0.04 255 | 0.94 0.02 102 | Dark blue-grey (light); light sand (dark) |
| Muted | 0.92 0.02 102 | 0.2 0.02 255 | Light grey (light); dark grey (dark) |

## Typography
| Role | Font | Size/Weight | Markup |
|------|------|------------|--------|
| Display (headlines) | General Sans | 24–48px, 700 | `.text-display-*` |
| Body (content, ui) | DM Sans | 16–18px, 400 | `.text-body-*` |
| Mono (code, meta) | System mono | 12–14px, 400 | `<code>` |

## Structural Zones
| Zone | Treatment | Elevation |
|------|-----------|-----------|
| Header | White/dark bg, teal bottom border, sticky | Primary ring |
| Journey Stage Cards | Card bg, colored left border (coral/emerald/teal), `shadow-card-md` | Elevated |
| Content Grid | Alternating bg-background / bg-muted/30 sections | Stacked |
| Footer | Muted bg, border-t border-border | Recessed |
| She Buddy Profiles | Card bg, teal ring-4 match score badge, `shadow-card-sm` | Floating |

## Spacing & Rhythm
- Base unit: 4px. Grid: 4 (tight), 8 (snug), 12 (standard), 16 (relaxed), 24 (expansive), 32 (hero).
- Mobile: 16px gutters. Tablet: 24px. Desktop: 32px.
- Card padding: 20px (sm), 24px (md). Card gap: 16px.
- Type scale: 12/16/18/24/32/40/48px with 1.5–1.7 line-height.

## Elevation & Depth
- Base cards: 2px offset, 8–16px blur, 8% alpha teal.
- Hover cards: 4px offset, 16px blur, 12% alpha teal.
- Popovers/modals: 12px offset, 32px blur, 10% alpha dark.
- No harsh shadows; all shadows desaturated teal-tinted for cohesion.

## Component Patterns
- **Buttons**: primary (teal bg, white text), secondary (muted bg, dark text), icon-only (teal ring on hover).
- **Form inputs**: muted bg, dark border, teal ring on focus, placeholder muted-foreground.
- **Cards**: rounded 12–16px, border-border or transparent, consistent 20–24px padding.
- **Badges**: match scores (teal ring, white/dark bg, 12px radius), journey stage (colored left border 4px).
- **Timeline**: vertical stack, colored dots (urgent=red, soon=yellow, relaxed=green), connecting line muted-border.

## Motion Choreography
- **Entrance**: fade-in 0.3s ease-out (default), slide-up 0.3s ease-out (cards).
- **Interaction**: transition-smooth 0.3s cubic-bezier (all interactive elements).
- **Match score ring**: pulse-ring 2s infinite (subtle breathing on She Buddy profile).
- **Transitions**: staggered 50–100ms per card for list rhythm.

## Signature Detail
**Journey Stage Color Stripe**: Left border 4px on all stage cards — Arrival (coral #F07A6B), Settling In (emerald #3DBE68), Professional (teal #1EAAA8). Creates visual taxonomy at a glance. Reinforced in navigation and progress indicators.

## Constraints
- No generic gradients; color used structurally (borders, fills, rings).
- No bounce or excessive animation; movement is purposeful and brief.
- Text hierarchy enforced via font, weight, and color — not size alone.
- Dark mode is intentional inversion of light, not afterthought; teal accent strengthens in dark mode (0.72 L vs 0.65 L light).
