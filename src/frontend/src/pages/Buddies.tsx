import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Briefcase, Globe, MapPin, Sparkles, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useBuddies } from "../hooks/use-mock-data";
import type { BuddyProfile } from "../types";

/* ─── helpers ─── */

const fieldColors: Record<string, string> = {
  Tech: "bg-primary/15 text-primary border-primary/30",
  Healthcare: "bg-emerald-500/15 text-emerald-700 border-emerald-400/30",
  Finance: "bg-destructive/15 text-destructive border-destructive/30",
  Academia: "bg-secondary/15 text-secondary border-secondary/30",
};

function scoreColor(score: number): string {
  if (score >= 80) return "text-emerald-600";
  if (score >= 60) return "text-amber-500";
  return "text-muted-foreground";
}

function scoreRingColor(score: number): string {
  if (score >= 80) return "text-primary";
  if (score >= 60) return "text-amber-500";
  return "text-muted-foreground";
}

function Initials({ name }: { name: string }) {
  const letters = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-primary-foreground text-sm shrink-0 bg-gradient-to-br from-primary to-accent">
      {letters}
    </div>
  );
}

function MatchBadge({
  score,
  size = "md",
}: {
  score: number;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? 48 : 56;
  const r = size === "sm" ? 20 : 24;
  const circumference = 2 * Math.PI * r;
  const dash = (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-0.5">
      <div
        className="relative flex items-center justify-center"
        style={{ width: dim, height: dim }}
      >
        <svg
          className="absolute inset-0 -rotate-90"
          viewBox={`0 0 ${dim} ${dim}`}
          role="img"
          aria-label={`${score}% match`}
        >
          <circle
            cx={dim / 2}
            cy={dim / 2}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-muted"
          />
          <circle
            cx={dim / 2}
            cy={dim / 2}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
            className={`${scoreRingColor(score)} animate-pulse`}
            style={{ animationDuration: "2.5s" }}
          />
        </svg>
        <span
          className={`font-bold ${size === "sm" ? "text-xs" : "text-sm"} ${scoreColor(score)}`}
        >
          {score}%
        </span>
      </div>
      <span className="text-xs text-muted-foreground leading-none">Match</span>
    </div>
  );
}

/* ─── Top Match card ─── */

function TopMatchCard({
  profile,
  score,
  index,
  sent,
  onSend,
}: {
  profile: BuddyProfile;
  score: number;
  index: number;
  sent: boolean;
  onSend: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      data-ocid={`buddies.top_match.item.${index + 1}`}
    >
      <Card className="p-5 border-l-4 border-l-primary hover:shadow-md transition-smooth relative overflow-hidden h-full flex flex-col">
        {/* match badge */}
        <div className="absolute top-4 right-4">
          <MatchBadge score={score} />
        </div>

        <div className="flex items-start gap-3 mb-3 pr-16">
          <Initials name={profile.name} />
          <div className="min-w-0">
            <p className="font-display font-bold text-foreground text-sm leading-tight">
              {profile.name}
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3 shrink-0" /> {profile.city}
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Globe className="w-3 h-3 shrink-0" /> {profile.countryOfOrigin}
            </p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-1">
          {profile.bio}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          <Badge
            className={`text-xs border ${fieldColors[profile.professionalField] ?? "bg-muted text-muted-foreground"}`}
          >
            <Briefcase className="w-2.5 h-2.5 mr-1" />
            {profile.professionalField}
          </Badge>
          {profile.languages.slice(0, 2).map((lang) => (
            <Badge key={lang} variant="outline" className="text-xs">
              {lang}
            </Badge>
          ))}
        </div>

        <Button
          className={`w-full transition-smooth ${sent ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
          onClick={onSend}
          disabled={sent}
          data-ocid={`buddies.top_match.send_button.${index + 1}`}
        >
          {sent ? "Request Sent ✓" : "Send Buddy Request"}
        </Button>
      </Card>
    </motion.div>
  );
}

/* ─── Buddy card ─── */

function BuddyCard({
  buddy,
  index,
  sent,
  onSend,
}: {
  buddy: BuddyProfile;
  index: number;
  sent: boolean;
  onSend: () => void;
}) {
  const score = 70 + ((buddy.id as unknown as number) % 28);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      data-ocid={`buddies.item.${index + 1}`}
    >
      <Card className="p-5 hover:shadow-md transition-smooth border h-full flex flex-col">
        {/* card header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-start gap-3 min-w-0">
            <Initials name={buddy.name} />
            <div className="min-w-0">
              <p className="font-display font-semibold text-foreground text-sm leading-tight">
                {buddy.name}
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5 flex-wrap">
                <MapPin className="w-3 h-3 shrink-0" />
                <span>{buddy.city}</span>
                <span className="text-border">·</span>
                <Globe className="w-3 h-3 shrink-0" />
                <span>{buddy.countryOfOrigin}</span>
              </p>
            </div>
          </div>
          <MatchBadge score={score} size="sm" />
        </div>

        {/* field badge */}
        <div className="mb-2">
          <Badge
            className={`text-xs border ${fieldColors[buddy.professionalField] ?? "bg-muted text-muted-foreground"}`}
          >
            <Briefcase className="w-2.5 h-2.5 mr-1" />
            {buddy.professionalField}
          </Badge>
        </div>

        {/* bio */}
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1">
          {buddy.bio}
        </p>

        {/* languages */}
        <div className="flex flex-wrap gap-1 mb-4">
          {buddy.languages.map((l) => (
            <Badge key={l} variant="outline" className="text-xs">
              {l}
            </Badge>
          ))}
        </div>

        {/* action */}
        <Button
          size="sm"
          className={`w-full transition-smooth ${
            sent
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : buddy.isAvailable
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
          disabled={!buddy.isAvailable || sent}
          onClick={onSend}
          data-ocid={`buddies.send_button.${index + 1}`}
        >
          {sent
            ? "Request Sent ✓"
            : buddy.isAvailable
              ? "Send Buddy Request"
              : "Unavailable"}
        </Button>
      </Card>
    </motion.div>
  );
}

/* ─── Main page ─── */

const CITIES = ["All", "Berlin", "Munich", "Hamburg", "Frankfurt"];
const FIELDS = ["All", "Tech", "Healthcare", "Academia", "Finance"];

export default function Buddies() {
  const { buddies, topMatches } = useBuddies();

  const [filterCity, setFilterCity] = useState("All");
  const [filterField, setFilterField] = useState("All");
  const [filterCountry, setFilterCountry] = useState("All");
  const [sentIds, setSentIds] = useState<Set<string>>(new Set());

  const uniqueCountries = [
    "All",
    ...Array.from(new Set(buddies.map((b) => b.countryOfOrigin))).sort(),
  ];

  const filtered = buddies.filter((b) => {
    if (filterCity !== "All" && b.city !== filterCity) return false;
    if (filterField !== "All" && b.professionalField !== filterField)
      return false;
    if (filterCountry !== "All" && b.countryOfOrigin !== filterCountry)
      return false;
    return true;
  });

  function handleSend(id: string, name: string) {
    setSentIds((prev) => new Set([...prev, id]));
    toast.success(`Buddy request sent to ${name}!`, {
      description: "They'll receive your request and can accept when ready.",
    });
  }

  return (
    <div className="min-h-screen bg-background" data-ocid="buddies.page">
      {/* Page header zone */}
      <div className="bg-card border-b px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 mt-1">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-display-lg text-foreground">
                She Buddy Peer Matching
              </h1>
              <p className="text-body-md text-muted-foreground mt-1 max-w-2xl">
                Get matched with women who've lived your journey in Germany. Our
                smart algorithm pairs you by city, field, and shared experiences
                — so your first steps feel less alone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-10">
        {/* ── Top Matches Banner ── */}
        <section data-ocid="buddies.top_matches.section">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h2 className="text-display-md text-foreground">
              Your Top Matches
            </h2>
            <Badge className="bg-amber-100 text-amber-700 border-amber-300 border text-xs ml-1">
              AI-powered
            </Badge>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-background border border-primary/15 p-6">
            <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wide font-semibold">
              Recommended based on your profile · Maria Silva · Berlin · Tech
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topMatches.map((match, i) => (
                <TopMatchCard
                  key={match.profile.id.toString()}
                  profile={match.profile}
                  score={Number(match.score)}
                  index={i}
                  sent={sentIds.has(`top-${match.profile.id.toString()}`)}
                  onSend={() =>
                    handleSend(
                      `top-${match.profile.id.toString()}`,
                      match.profile.name,
                    )
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Filter bar ── */}
        <section data-ocid="buddies.filters.section">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-display-md text-foreground">All Buddies</h2>
            <span className="text-sm text-muted-foreground">
              {filtered.length} match{filtered.length !== 1 ? "es" : ""}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 p-4 bg-muted/40 rounded-xl border mb-6">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide shrink-0">
                City
              </span>
              <Select value={filterCity} onValueChange={setFilterCity}>
                <SelectTrigger
                  className="w-36 h-8 text-sm bg-card"
                  data-ocid="buddies.filter_city.select"
                  aria-label="Filter by city"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CITIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide shrink-0">
                Field
              </span>
              <Select value={filterField} onValueChange={setFilterField}>
                <SelectTrigger
                  className="w-40 h-8 text-sm bg-card"
                  data-ocid="buddies.filter_field.select"
                  aria-label="Filter by professional field"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {FIELDS.map((f) => (
                    <SelectItem key={f} value={f}>
                      {f}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide shrink-0">
                Origin
              </span>
              <Select value={filterCountry} onValueChange={setFilterCountry}>
                <SelectTrigger
                  className="w-44 h-8 text-sm bg-card"
                  data-ocid="buddies.filter_country.select"
                  aria-label="Filter by country of origin"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {uniqueCountries.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {(filterCity !== "All" ||
              filterField !== "All" ||
              filterCountry !== "All") && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs text-muted-foreground hover:text-foreground"
                onClick={() => {
                  setFilterCity("All");
                  setFilterField("All");
                  setFilterCountry("All");
                }}
                data-ocid="buddies.clear_filters.button"
              >
                Clear filters
              </Button>
            )}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-muted/30 rounded-xl border"
              data-ocid="buddies.empty_state"
            >
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" />
              <p className="font-display font-semibold text-foreground">
                No buddies match your filters
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Try adjusting your search criteria above
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((buddy, i) => (
                <BuddyCard
                  key={buddy.id.toString()}
                  buddy={buddy}
                  index={i}
                  sent={sentIds.has(`all-${buddy.id.toString()}`)}
                  onSend={() =>
                    handleSend(`all-${buddy.id.toString()}`, buddy.name)
                  }
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
