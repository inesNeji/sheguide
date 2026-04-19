import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bot,
  CheckCircle2,
  ChevronRight,
  ClipboardCopy,
  Download,
  FileText,
  Sparkles,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useUserProfile } from "../hooks/use-mock-data";
import type { UserProfile } from "../types";
import { VisaType } from "../types";

// ─── German cities ───────────────────────────────────────────────────────────
const GERMAN_CITIES = [
  "Berlin",
  "Munich",
  "Hamburg",
  "Frankfurt",
  "Cologne",
  "Stuttgart",
  "Düsseldorf",
  "Leipzig",
  "Dortmund",
  "Essen",
  "Bremen",
  "Dresden",
  "Hannover",
  "Nuremberg",
  "Duisburg",
];

// ─── Available forms ─────────────────────────────────────────────────────────
type FormId = "anmeldung" | "gkv" | "elster" | "kita" | "kyc";

interface FormTemplate {
  id: FormId;
  label: string;
  shortName: string;
  description: string;
  authority: string;
}

const FORM_TEMPLATES: FormTemplate[] = [
  {
    id: "anmeldung",
    label: "Anmeldung",
    shortName: "City Registration",
    description: "Register your Berlin address at the Bürgeramt",
    authority: "Bürgeramt Berlin",
  },
  {
    id: "gkv",
    label: "GKV",
    shortName: "Gesetzliche Krankenversicherung",
    description: "Statutory health insurance enrollment",
    authority: "Techniker Krankenkasse",
  },
  {
    id: "elster",
    label: "ELSTER",
    shortName: "Tax Registration",
    description: "Register with the Finanzamt & receive tax ID",
    authority: "Finanzamt Berlin",
  },
  {
    id: "kita",
    label: "Kita",
    shortName: "Childcare Application",
    description: "Public childcare placement application",
    authority: "Jugendamt Berlin",
  },
  {
    id: "kyc",
    label: "KYC",
    shortName: "Know Your Customer",
    description: "Bank identity verification form",
    authority: "Deutsche Bank AG",
  },
];

// ─── Per-form field definitions ────────────────────────────────────────────
interface PrefilledField {
  label: string;
  germanLabel: string;
  value: string;
  autoFilled: boolean;
  section?: string;
}

function buildFormFields(
  formId: FormId,
  profile: UserProfile,
): PrefilledField[] {
  const visaLabel =
    profile.visaType === VisaType.blueCard
      ? "EU Blue Card (§ 18b AufenthG)"
      : profile.visaType === VisaType.student
        ? "Student Visa (§ 16b AufenthG)"
        : "General Residence Permit (§ 25 AufenthG)";

  const arrivalFormatted = profile.arrivalDate
    ? new Date(profile.arrivalDate).toLocaleDateString("de-DE")
    : "";

  switch (formId) {
    case "anmeldung":
      return [
        {
          label: "Full Name",
          germanLabel: "Vollständiger Name",
          value: profile.fullName,
          autoFilled: true,
          section: "Personal Details",
        },
        {
          label: "Nationality",
          germanLabel: "Staatsangehörigkeit",
          value: profile.nationality,
          autoFilled: true,
          section: "Personal Details",
        },
        {
          label: "Current City",
          germanLabel: "Wohnort",
          value: profile.city,
          autoFilled: true,
          section: "Address",
        },
        {
          label: "Arrival Date",
          germanLabel: "Einreisedatum",
          value: arrivalFormatted,
          autoFilled: true,
          section: "Address",
        },
        {
          label: "Street & House Number",
          germanLabel: "Straße und Hausnummer",
          value: "Musterstraße 12",
          autoFilled: false,
          section: "Address",
        },
        {
          label: "Postal Code",
          germanLabel: "Postleitzahl",
          value: "",
          autoFilled: false,
          section: "Address",
        },
        {
          label: "Marital Status",
          germanLabel: "Familienstand",
          value: profile.familySituation,
          autoFilled: true,
          section: "Family",
        },
      ];
    case "gkv":
      return [
        {
          label: "Full Name",
          germanLabel: "Name, Vorname",
          value: profile.fullName,
          autoFilled: true,
          section: "Insured Person",
        },
        {
          label: "Nationality",
          germanLabel: "Staatsangehörigkeit",
          value: profile.nationality,
          autoFilled: true,
          section: "Insured Person",
        },
        {
          label: "Occupation / Field",
          germanLabel: "Beruf / Berufsfeld",
          value: profile.profession,
          autoFilled: true,
          section: "Employment",
        },
        {
          label: "Residence City",
          germanLabel: "Wohnort",
          value: profile.city,
          autoFilled: true,
          section: "Address",
        },
        {
          label: "Visa Type",
          germanLabel: "Aufenthaltstitel",
          value: visaLabel,
          autoFilled: true,
          section: "Immigration",
        },
        {
          label: "Insurance Start Date",
          germanLabel: "Beginn der Mitgliedschaft",
          value: arrivalFormatted,
          autoFilled: true,
          section: "Insurance Details",
        },
        {
          label: "Family Situation",
          germanLabel: "Familienstand",
          value: profile.familySituation,
          autoFilled: true,
          section: "Insurance Details",
        },
        {
          label: "IBAN",
          germanLabel: "IBAN",
          value: "",
          autoFilled: false,
          section: "Payment",
        },
      ];
    case "elster":
      return [
        {
          label: "Full Name",
          germanLabel: "Name, Vorname",
          value: profile.fullName,
          autoFilled: true,
          section: "Taxpayer",
        },
        {
          label: "Nationality",
          germanLabel: "Staatsangehörigkeit",
          value: profile.nationality,
          autoFilled: true,
          section: "Taxpayer",
        },
        {
          label: "Occupation",
          germanLabel: "Beruf",
          value: profile.profession,
          autoFilled: true,
          section: "Taxpayer",
        },
        {
          label: "Residence City",
          germanLabel: "Wohnort",
          value: profile.city,
          autoFilled: true,
          section: "Address",
        },
        {
          label: "Marital Status",
          germanLabel: "Familienstand",
          value: profile.familySituation,
          autoFilled: true,
          section: "Tax Class",
        },
        {
          label: "Registration Date",
          germanLabel: "Datum der Erstregistrierung",
          value: arrivalFormatted,
          autoFilled: true,
          section: "Tax Class",
        },
        {
          label: "Tax ID (Steueridentifikationsnummer)",
          germanLabel: "Steuer-ID",
          value: "",
          autoFilled: false,
          section: "Tax Class",
        },
      ];
    case "kita":
      return [
        {
          label: "Child's Guardian Name",
          germanLabel: "Name der Erziehungsberechtigten",
          value: profile.fullName,
          autoFilled: true,
          section: "Guardian",
        },
        {
          label: "Nationality",
          germanLabel: "Staatsangehörigkeit",
          value: profile.nationality,
          autoFilled: true,
          section: "Guardian",
        },
        {
          label: "City",
          germanLabel: "Bezirk / Stadt",
          value: profile.city,
          autoFilled: true,
          section: "Location",
        },
        {
          label: "Family Situation",
          germanLabel: "Familienstand",
          value: profile.familySituation,
          autoFilled: true,
          section: "Family",
        },
        {
          label: "Occupation",
          germanLabel: "Beruf der Erziehungsberechtigten",
          value: profile.profession,
          autoFilled: true,
          section: "Employment",
        },
        {
          label: "Child's Name",
          germanLabel: "Name des Kindes",
          value: "",
          autoFilled: false,
          section: "Child",
        },
        {
          label: "Child's Date of Birth",
          germanLabel: "Geburtsdatum des Kindes",
          value: "",
          autoFilled: false,
          section: "Child",
        },
      ];
    case "kyc":
      return [
        {
          label: "Full Name",
          germanLabel: "Vollständiger Name",
          value: profile.fullName,
          autoFilled: true,
          section: "Identity",
        },
        {
          label: "Nationality",
          germanLabel: "Staatsangehörigkeit",
          value: profile.nationality,
          autoFilled: true,
          section: "Identity",
        },
        {
          label: "Occupation",
          germanLabel: "Beruf",
          value: profile.profession,
          autoFilled: true,
          section: "Employment",
        },
        {
          label: "Residence City",
          germanLabel: "Wohnort",
          value: profile.city,
          autoFilled: true,
          section: "Address",
        },
        {
          label: "Residence Since",
          germanLabel: "Wohnhaft seit",
          value: arrivalFormatted,
          autoFilled: true,
          section: "Address",
        },
        {
          label: "Visa / Residence Permit",
          germanLabel: "Aufenthaltstitel",
          value: visaLabel,
          autoFilled: true,
          section: "Identity",
        },
        {
          label: "Tax Identification Number",
          germanLabel: "Steueridentifikationsnummer",
          value: "",
          autoFilled: false,
          section: "Identity",
        },
        {
          label: "Passport Number",
          germanLabel: "Reisepassnummer",
          value: "",
          autoFilled: false,
          section: "Identity",
        },
      ];
  }
}

// ─── Step 1: Profile Setup Form ───────────────────────────────────────────
interface ProfileFormProps {
  initial: UserProfile;
  onSave: (p: UserProfile) => void;
}

function ProfileForm({ initial, onSave }: ProfileFormProps) {
  const [profile, setProfile] = useState<UserProfile>({ ...initial });
  const [saved, setSaved] = useState(false);

  function set<K extends keyof UserProfile>(key: K, val: UserProfile[K]) {
    setProfile((prev) => ({ ...prev, [key]: val }));
    setSaved(false);
  }

  function handleSave() {
    setSaved(true);
    toast.success("Profile saved! Proceeding to form selection.");
    setTimeout(() => onSave(profile), 600);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      data-ocid="forms.profile_form"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
          1
        </div>
        <h2 className="text-xl font-display font-bold text-foreground">
          Your Profile
        </h2>
      </div>
      <p className="text-sm text-muted-foreground mb-6 ml-11">
        Fill this once — we'll use it to pre-fill all your forms automatically.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <Label htmlFor="fullName" className="text-sm font-semibold">
            Full Name
          </Label>
          <Input
            id="fullName"
            value={profile.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            placeholder="Maria Silva"
            data-ocid="forms.profile.fullname_input"
          />
        </div>

        {/* Nationality */}
        <div className="space-y-1.5">
          <Label htmlFor="nationality" className="text-sm font-semibold">
            Nationality
          </Label>
          <Input
            id="nationality"
            value={profile.nationality}
            onChange={(e) => set("nationality", e.target.value)}
            placeholder="Brazilian"
            data-ocid="forms.profile.nationality_input"
          />
        </div>

        {/* Visa Type */}
        <div className="space-y-1.5">
          <Label className="text-sm font-semibold">Visa Type</Label>
          <Select
            value={profile.visaType}
            onValueChange={(v) => set("visaType", v as VisaType)}
          >
            <SelectTrigger data-ocid="forms.profile.visa_select">
              <SelectValue placeholder="Select visa type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={VisaType.blueCard}>EU Blue Card</SelectItem>
              <SelectItem value={VisaType.student}>Student Visa</SelectItem>
              <SelectItem value={VisaType.generalResidence}>
                General Residence Permit
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Arrival Date */}
        <div className="space-y-1.5">
          <Label htmlFor="arrivalDate" className="text-sm font-semibold">
            Arrival Date
          </Label>
          <Input
            id="arrivalDate"
            type="date"
            value={profile.arrivalDate}
            onChange={(e) => set("arrivalDate", e.target.value)}
            data-ocid="forms.profile.arrival_date_input"
          />
        </div>

        {/* City */}
        <div className="space-y-1.5">
          <Label className="text-sm font-semibold">City in Germany</Label>
          <Select value={profile.city} onValueChange={(v) => set("city", v)}>
            <SelectTrigger data-ocid="forms.profile.city_select">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              {GERMAN_CITIES.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Profession */}
        <div className="space-y-1.5">
          <Label htmlFor="profession" className="text-sm font-semibold">
            Profession / Field
          </Label>
          <Input
            id="profession"
            value={profile.profession}
            onChange={(e) => set("profession", e.target.value)}
            placeholder="Software Engineer"
            data-ocid="forms.profile.profession_input"
          />
        </div>

        {/* Family Situation */}
        <div className="space-y-1.5 md:col-span-2">
          <Label className="text-sm font-semibold">Family Situation</Label>
          <Select
            value={profile.familySituation}
            onValueChange={(v) => set("familySituation", v)}
          >
            <SelectTrigger data-ocid="forms.profile.family_select">
              <SelectValue placeholder="Select situation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Single">Single</SelectItem>
              <SelectItem value="Married">Married</SelectItem>
              <SelectItem value="Married with children">
                Married with children
              </SelectItem>
              <SelectItem value="Single parent">Single parent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-7">
        <Button
          onClick={handleSave}
          size="lg"
          className="w-full sm:w-auto font-semibold"
          disabled={saved}
          data-ocid="forms.profile.save_button"
        >
          {saved ? (
            <>
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Profile Saved
            </>
          ) : (
            <>
              Save Profile & Choose Form
              <ChevronRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}

// ─── Section grouper helper ───────────────────────────────────────────────
function groupBySection(
  fields: PrefilledField[],
): Record<string, PrefilledField[]> {
  return fields.reduce<Record<string, PrefilledField[]>>((acc, f) => {
    const sec = f.section ?? "General";
    if (!acc[sec]) acc[sec] = [];
    acc[sec].push(f);
    return acc;
  }, {});
}

// ─── Step 2: Form Selector + Preview ─────────────────────────────────────
interface FormStepProps {
  profile: UserProfile;
  onBack: () => void;
}

function FormStep({ profile, onBack }: FormStepProps) {
  const [selectedId, setSelectedId] = useState<FormId>("anmeldung");
  const selectedForm = FORM_TEMPLATES.find((f) => f.id === selectedId)!;
  const fields = buildFormFields(selectedId, profile);
  const grouped = groupBySection(fields);
  const autoFilledCount = fields.filter((f) => f.autoFilled).length;
  const totalCount = fields.length;

  function handleCopyAll() {
    const text = fields
      .map((f) => `${f.germanLabel}: ${f.value || "(empty)"}`)
      .join("\n");
    navigator.clipboard.writeText(text);
    toast.success("All fields copied to clipboard!");
  }

  function handleDownload() {
    toast.success(`Mock PDF for ${selectedForm.label} prepared for download.`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      data-ocid="forms.form_step"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
          2
        </div>
        <h2 className="text-xl font-display font-bold text-foreground">
          Select a Form to Pre-fill
        </h2>
      </div>
      <p className="text-sm text-muted-foreground mb-6 ml-11">
        Choose the form you need. We'll auto-populate it with your saved
        profile.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: form selector list */}
        <div
          className="lg:col-span-2 space-y-2"
          data-ocid="forms.selector.list"
        >
          {FORM_TEMPLATES.map((tpl, i) => {
            const active = tpl.id === selectedId;
            return (
              <motion.button
                key={tpl.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setSelectedId(tpl.id)}
                data-ocid={`forms.selector.item.${i + 1}`}
                className={[
                  "w-full text-left rounded-xl border p-4 transition-all duration-200",
                  active
                    ? "border-primary bg-primary/8 shadow-sm"
                    : "border-border bg-card hover:border-primary/40 hover:bg-muted/40",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display font-bold text-sm text-foreground">
                      {tpl.label}
                    </span>
                    <span className="ml-2 text-xs text-muted-foreground">
                      {tpl.shortName}
                    </span>
                  </div>
                  {active && (
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                  {tpl.description}
                </p>
              </motion.button>
            );
          })}

          <button
            type="button"
            onClick={onBack}
            className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center justify-center gap-1"
            data-ocid="forms.back_button"
          >
            <User className="w-3 h-3" /> Edit profile
          </button>
        </div>

        {/* Right: form preview panel */}
        <div className="lg:col-span-3" data-ocid="forms.preview.panel">
          <Card className="border bg-card overflow-hidden">
            {/* Form header mimicking German Formular style */}
            <CardHeader className="bg-primary/10 border-b border-primary/20 px-5 py-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono mb-0.5">
                    {selectedForm.authority}
                  </p>
                  <h3 className="font-display font-bold text-foreground text-base leading-tight">
                    {selectedForm.label} — {selectedForm.shortName}
                  </h3>
                </div>
                <div className="shrink-0 flex flex-col items-end gap-1">
                  <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px]">
                    <Sparkles className="w-2.5 h-2.5 mr-1" />
                    {autoFilledCount}/{totalCount} auto-filled
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-5 py-4 space-y-5 max-h-[480px] overflow-y-auto">
              {/* Legend */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground pb-1 border-b border-border">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-sm bg-primary/20 border border-primary/40" />
                  Auto-filled from profile
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-sm bg-muted border border-border" />
                  Needs manual input
                </span>
              </div>

              {/* Grouped sections */}
              {Object.entries(grouped).map(([section, sectionFields]) => (
                <div key={section}>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono mb-3 pb-1 border-b border-border/60">
                    {section}
                  </p>
                  <div className="space-y-3">
                    {sectionFields.map((field, fi) => (
                      <div
                        key={field.label}
                        data-ocid={`forms.preview.field.${fi + 1}`}
                      >
                        <div className="flex items-baseline justify-between mb-1">
                          <Label className="text-[11px] font-semibold text-muted-foreground tracking-wide">
                            {field.germanLabel}
                          </Label>
                          <span className="text-[9px] text-muted-foreground/60">
                            {field.label}
                          </span>
                        </div>
                        <div className="relative">
                          <Input
                            readOnly
                            value={field.value}
                            placeholder={
                              field.autoFilled
                                ? undefined
                                : "— enter manually —"
                            }
                            className={[
                              "text-sm pr-8 h-9",
                              field.autoFilled && field.value
                                ? "bg-primary/8 border-primary/40 text-foreground focus-visible:ring-primary/40 font-medium"
                                : "bg-muted/40 border-input text-muted-foreground",
                            ].join(" ")}
                          />
                          {field.autoFilled && field.value && (
                            <span
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-primary"
                              title="Auto-filled"
                            >
                              <Sparkles className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>

            {/* Action bar */}
            <div className="px-5 py-4 border-t border-border bg-muted/30 flex flex-wrap gap-2">
              <Button
                size="sm"
                onClick={handleDownload}
                className="flex-1 sm:flex-none font-semibold"
                data-ocid="forms.download_button"
              >
                <Download className="w-3.5 h-3.5 mr-1.5" />
                Download PDF
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleCopyAll}
                className="flex-1 sm:flex-none"
                data-ocid="forms.copy_all_button"
              >
                <ClipboardCopy className="w-3.5 h-3.5 mr-1.5" />
                Copy All Fields
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page component ────────────────────────────────────────────────────────
export default function Forms() {
  const initialProfile = useUserProfile();
  const [step, setStep] = useState<1 | 2>(1);
  const [savedProfile, setSavedProfile] = useState<UserProfile>(initialProfile);

  function handleSave(p: UserProfile) {
    setSavedProfile(p);
    setStep(2);
  }

  return (
    <div className="min-h-screen bg-background" data-ocid="forms.page">
      {/* ── Hero header ── */}
      <div className="bg-card border-b border-border px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-display font-bold text-foreground">
                  AI Form Pre-Filler
                </h1>
                <Badge className="bg-accent/15 text-accent border-accent/30 text-xs">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Beta
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                Set up your profile once, and we'll automatically populate
                German bureaucratic forms — Anmeldung, GKV, ELSTER, Kita, KYC
                and more — saving you hours of manual entry.
              </p>

              {/* How it works strip */}
              <div className="flex flex-wrap items-center gap-4 mt-4">
                {[
                  {
                    icon: User,
                    step: "1",
                    label: "Save your profile",
                  },
                  {
                    icon: FileText,
                    step: "2",
                    label: "Choose a form",
                  },
                  {
                    icon: CheckCircle2,
                    step: "3",
                    label: "Download or copy",
                  },
                ].map(({ icon: Icon, step: s, label }) => (
                  <div key={s} className="flex items-center gap-2 text-xs">
                    <div
                      className={[
                        "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold",
                        step === Number(s)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground",
                      ].join(" ")}
                    >
                      {s}
                    </div>
                    <Icon className="w-3 h-3 text-muted-foreground" />
                    <span
                      className={
                        step === Number(s)
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground"
                      }
                    >
                      {label}
                    </span>
                    {s !== "3" && (
                      <ChevronRight className="w-3 h-3 text-muted-foreground/40" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {step === 1 ? (
          <ProfileForm initial={savedProfile} onSave={handleSave} />
        ) : (
          <FormStep profile={savedProfile} onBack={() => setStep(1)} />
        )}
      </div>
    </div>
  );
}
