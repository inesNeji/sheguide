import { c as createLucideIcon, j as jsxRuntimeExports, a as cn, r as reactExports, S as Sparkles, F as FileText, u as ue } from "./index-DNNoM-aw.js";
import { a as Badge, B as Button, C as Card, b as CardHeader, c as CardContent } from "./card-CVExSVy-.js";
import { P as Primitive, C as CircleCheck, a as ChevronRight } from "./index-BOfbUWa3.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Br3sJGUs.js";
import { m as motion, b as useUserProfile, V as VisaType } from "./use-mock-data-CfaPjUjY.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
];
const Bot = createLucideIcon("bot", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2", key: "4jdomd" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4", key: "3hqy98" }],
  ["path", { d: "M21 14H11", key: "1bme5i" }],
  ["path", { d: "m15 10-4 4 4 4", key: "5dvupr" }]
];
const ClipboardCopy = createLucideIcon("clipboard-copy", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
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
  "Duisburg"
];
const FORM_TEMPLATES = [
  {
    id: "anmeldung",
    label: "Anmeldung",
    shortName: "City Registration",
    description: "Register your Berlin address at the Bürgeramt",
    authority: "Bürgeramt Berlin"
  },
  {
    id: "gkv",
    label: "GKV",
    shortName: "Gesetzliche Krankenversicherung",
    description: "Statutory health insurance enrollment",
    authority: "Techniker Krankenkasse"
  },
  {
    id: "elster",
    label: "ELSTER",
    shortName: "Tax Registration",
    description: "Register with the Finanzamt & receive tax ID",
    authority: "Finanzamt Berlin"
  },
  {
    id: "kita",
    label: "Kita",
    shortName: "Childcare Application",
    description: "Public childcare placement application",
    authority: "Jugendamt Berlin"
  },
  {
    id: "kyc",
    label: "KYC",
    shortName: "Know Your Customer",
    description: "Bank identity verification form",
    authority: "Deutsche Bank AG"
  }
];
function buildFormFields(formId, profile) {
  const visaLabel = profile.visaType === VisaType.blueCard ? "EU Blue Card (§ 18b AufenthG)" : profile.visaType === VisaType.student ? "Student Visa (§ 16b AufenthG)" : "General Residence Permit (§ 25 AufenthG)";
  const arrivalFormatted = profile.arrivalDate ? new Date(profile.arrivalDate).toLocaleDateString("de-DE") : "";
  switch (formId) {
    case "anmeldung":
      return [
        {
          label: "Full Name",
          germanLabel: "Vollständiger Name",
          value: profile.fullName,
          autoFilled: true,
          section: "Personal Details"
        },
        {
          label: "Nationality",
          germanLabel: "Staatsangehörigkeit",
          value: profile.nationality,
          autoFilled: true,
          section: "Personal Details"
        },
        {
          label: "Current City",
          germanLabel: "Wohnort",
          value: profile.city,
          autoFilled: true,
          section: "Address"
        },
        {
          label: "Arrival Date",
          germanLabel: "Einreisedatum",
          value: arrivalFormatted,
          autoFilled: true,
          section: "Address"
        },
        {
          label: "Street & House Number",
          germanLabel: "Straße und Hausnummer",
          value: "Musterstraße 12",
          autoFilled: false,
          section: "Address"
        },
        {
          label: "Postal Code",
          germanLabel: "Postleitzahl",
          value: "",
          autoFilled: false,
          section: "Address"
        },
        {
          label: "Marital Status",
          germanLabel: "Familienstand",
          value: profile.familySituation,
          autoFilled: true,
          section: "Family"
        }
      ];
    case "gkv":
      return [
        {
          label: "Full Name",
          germanLabel: "Name, Vorname",
          value: profile.fullName,
          autoFilled: true,
          section: "Insured Person"
        },
        {
          label: "Nationality",
          germanLabel: "Staatsangehörigkeit",
          value: profile.nationality,
          autoFilled: true,
          section: "Insured Person"
        },
        {
          label: "Occupation / Field",
          germanLabel: "Beruf / Berufsfeld",
          value: profile.profession,
          autoFilled: true,
          section: "Employment"
        },
        {
          label: "Residence City",
          germanLabel: "Wohnort",
          value: profile.city,
          autoFilled: true,
          section: "Address"
        },
        {
          label: "Visa Type",
          germanLabel: "Aufenthaltstitel",
          value: visaLabel,
          autoFilled: true,
          section: "Immigration"
        },
        {
          label: "Insurance Start Date",
          germanLabel: "Beginn der Mitgliedschaft",
          value: arrivalFormatted,
          autoFilled: true,
          section: "Insurance Details"
        },
        {
          label: "Family Situation",
          germanLabel: "Familienstand",
          value: profile.familySituation,
          autoFilled: true,
          section: "Insurance Details"
        },
        {
          label: "IBAN",
          germanLabel: "IBAN",
          value: "",
          autoFilled: false,
          section: "Payment"
        }
      ];
    case "elster":
      return [
        {
          label: "Full Name",
          germanLabel: "Name, Vorname",
          value: profile.fullName,
          autoFilled: true,
          section: "Taxpayer"
        },
        {
          label: "Nationality",
          germanLabel: "Staatsangehörigkeit",
          value: profile.nationality,
          autoFilled: true,
          section: "Taxpayer"
        },
        {
          label: "Occupation",
          germanLabel: "Beruf",
          value: profile.profession,
          autoFilled: true,
          section: "Taxpayer"
        },
        {
          label: "Residence City",
          germanLabel: "Wohnort",
          value: profile.city,
          autoFilled: true,
          section: "Address"
        },
        {
          label: "Marital Status",
          germanLabel: "Familienstand",
          value: profile.familySituation,
          autoFilled: true,
          section: "Tax Class"
        },
        {
          label: "Registration Date",
          germanLabel: "Datum der Erstregistrierung",
          value: arrivalFormatted,
          autoFilled: true,
          section: "Tax Class"
        },
        {
          label: "Tax ID (Steueridentifikationsnummer)",
          germanLabel: "Steuer-ID",
          value: "",
          autoFilled: false,
          section: "Tax Class"
        }
      ];
    case "kita":
      return [
        {
          label: "Child's Guardian Name",
          germanLabel: "Name der Erziehungsberechtigten",
          value: profile.fullName,
          autoFilled: true,
          section: "Guardian"
        },
        {
          label: "Nationality",
          germanLabel: "Staatsangehörigkeit",
          value: profile.nationality,
          autoFilled: true,
          section: "Guardian"
        },
        {
          label: "City",
          germanLabel: "Bezirk / Stadt",
          value: profile.city,
          autoFilled: true,
          section: "Location"
        },
        {
          label: "Family Situation",
          germanLabel: "Familienstand",
          value: profile.familySituation,
          autoFilled: true,
          section: "Family"
        },
        {
          label: "Occupation",
          germanLabel: "Beruf der Erziehungsberechtigten",
          value: profile.profession,
          autoFilled: true,
          section: "Employment"
        },
        {
          label: "Child's Name",
          germanLabel: "Name des Kindes",
          value: "",
          autoFilled: false,
          section: "Child"
        },
        {
          label: "Child's Date of Birth",
          germanLabel: "Geburtsdatum des Kindes",
          value: "",
          autoFilled: false,
          section: "Child"
        }
      ];
    case "kyc":
      return [
        {
          label: "Full Name",
          germanLabel: "Vollständiger Name",
          value: profile.fullName,
          autoFilled: true,
          section: "Identity"
        },
        {
          label: "Nationality",
          germanLabel: "Staatsangehörigkeit",
          value: profile.nationality,
          autoFilled: true,
          section: "Identity"
        },
        {
          label: "Occupation",
          germanLabel: "Beruf",
          value: profile.profession,
          autoFilled: true,
          section: "Employment"
        },
        {
          label: "Residence City",
          germanLabel: "Wohnort",
          value: profile.city,
          autoFilled: true,
          section: "Address"
        },
        {
          label: "Residence Since",
          germanLabel: "Wohnhaft seit",
          value: arrivalFormatted,
          autoFilled: true,
          section: "Address"
        },
        {
          label: "Visa / Residence Permit",
          germanLabel: "Aufenthaltstitel",
          value: visaLabel,
          autoFilled: true,
          section: "Identity"
        },
        {
          label: "Tax Identification Number",
          germanLabel: "Steueridentifikationsnummer",
          value: "",
          autoFilled: false,
          section: "Identity"
        },
        {
          label: "Passport Number",
          germanLabel: "Reisepassnummer",
          value: "",
          autoFilled: false,
          section: "Identity"
        }
      ];
  }
}
function ProfileForm({ initial, onSave }) {
  const [profile, setProfile] = reactExports.useState({ ...initial });
  const [saved, setSaved] = reactExports.useState(false);
  function set(key, val) {
    setProfile((prev) => ({ ...prev, [key]: val }));
    setSaved(false);
  }
  function handleSave() {
    setSaved(true);
    ue.success("Profile saved! Proceeding to form selection.");
    setTimeout(() => onSave(profile), 600);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -16 },
      transition: { duration: 0.35 },
      "data-ocid": "forms.profile_form",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold", children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Your Profile" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6 ml-11", children: "Fill this once — we'll use it to pre-fill all your forms automatically." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "fullName", className: "text-sm font-semibold", children: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "fullName",
                value: profile.fullName,
                onChange: (e) => set("fullName", e.target.value),
                placeholder: "Maria Silva",
                "data-ocid": "forms.profile.fullname_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "nationality", className: "text-sm font-semibold", children: "Nationality" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "nationality",
                value: profile.nationality,
                onChange: (e) => set("nationality", e.target.value),
                placeholder: "Brazilian",
                "data-ocid": "forms.profile.nationality_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Visa Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: profile.visaType,
                onValueChange: (v) => set("visaType", v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "forms.profile.visa_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select visa type" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: VisaType.blueCard, children: "EU Blue Card" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: VisaType.student, children: "Student Visa" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: VisaType.generalResidence, children: "General Residence Permit" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "arrivalDate", className: "text-sm font-semibold", children: "Arrival Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "arrivalDate",
                type: "date",
                value: profile.arrivalDate,
                onChange: (e) => set("arrivalDate", e.target.value),
                "data-ocid": "forms.profile.arrival_date_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "City in Germany" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: profile.city, onValueChange: (v) => set("city", v), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "forms.profile.city_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select city" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: GERMAN_CITIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "profession", className: "text-sm font-semibold", children: "Profession / Field" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "profession",
                value: profile.profession,
                onChange: (e) => set("profession", e.target.value),
                placeholder: "Software Engineer",
                "data-ocid": "forms.profile.profession_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Family Situation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: profile.familySituation,
                onValueChange: (v) => set("familySituation", v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "forms.profile.family_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select situation" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Single", children: "Single" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Married", children: "Married" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Married with children", children: "Married with children" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Single parent", children: "Single parent" })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleSave,
            size: "lg",
            className: "w-full sm:w-auto font-semibold",
            disabled: saved,
            "data-ocid": "forms.profile.save_button",
            children: saved ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 mr-2" }),
              "Profile Saved"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Save Profile & Choose Form",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-2" })
            ] })
          }
        ) })
      ]
    }
  );
}
function groupBySection(fields) {
  return fields.reduce((acc, f) => {
    const sec = f.section ?? "General";
    if (!acc[sec]) acc[sec] = [];
    acc[sec].push(f);
    return acc;
  }, {});
}
function FormStep({ profile, onBack }) {
  const [selectedId, setSelectedId] = reactExports.useState("anmeldung");
  const selectedForm = FORM_TEMPLATES.find((f) => f.id === selectedId);
  const fields = buildFormFields(selectedId, profile);
  const grouped = groupBySection(fields);
  const autoFilledCount = fields.filter((f) => f.autoFilled).length;
  const totalCount = fields.length;
  function handleCopyAll() {
    const text = fields.map((f) => `${f.germanLabel}: ${f.value || "(empty)"}`).join("\n");
    navigator.clipboard.writeText(text);
    ue.success("All fields copied to clipboard!");
  }
  function handleDownload() {
    ue.success(`Mock PDF for ${selectedForm.label} prepared for download.`);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -16 },
      transition: { duration: 0.35 },
      "data-ocid": "forms.form_step",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold", children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Select a Form to Pre-fill" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6 ml-11", children: "Choose the form you need. We'll auto-populate it with your saved profile." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "lg:col-span-2 space-y-2",
              "data-ocid": "forms.selector.list",
              children: [
                FORM_TEMPLATES.map((tpl, i) => {
                  const active = tpl.id === selectedId;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.button,
                    {
                      initial: { opacity: 0, x: -8 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: i * 0.07 },
                      onClick: () => setSelectedId(tpl.id),
                      "data-ocid": `forms.selector.item.${i + 1}`,
                      className: [
                        "w-full text-left rounded-xl border p-4 transition-all duration-200",
                        active ? "border-primary bg-primary/8 shadow-sm" : "border-border bg-card hover:border-primary/40 hover:bg-muted/40"
                      ].join(" "),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm text-foreground", children: tpl.label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs text-muted-foreground", children: tpl.shortName })
                          ] }),
                          active && /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-primary shrink-0" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-1", children: tpl.description })
                      ]
                    },
                    tpl.id
                  );
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: onBack,
                    className: "w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center justify-center gap-1",
                    "data-ocid": "forms.back_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
                      " Edit profile"
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", "data-ocid": "forms.preview.panel", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border bg-card overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-primary/10 border-b border-primary/20 px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono mb-0.5", children: selectedForm.authority }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-foreground text-base leading-tight", children: [
                  selectedForm.label,
                  " — ",
                  selectedForm.shortName
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 flex flex-col items-end gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/20 text-primary border-primary/30 text-[10px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-2.5 h-2.5 mr-1" }),
                autoFilledCount,
                "/",
                totalCount,
                " auto-filled"
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-5 py-4 space-y-5 max-h-[480px] overflow-y-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground pb-1 border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-3 h-3 rounded-sm bg-primary/20 border border-primary/40" }),
                  "Auto-filled from profile"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-3 h-3 rounded-sm bg-muted border border-border" }),
                  "Needs manual input"
                ] })
              ] }),
              Object.entries(grouped).map(([section, sectionFields]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono mb-3 pb-1 border-b border-border/60", children: section }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: sectionFields.map((field, fi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": `forms.preview.field.${fi + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] font-semibold text-muted-foreground tracking-wide", children: field.germanLabel }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground/60", children: field.label })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            readOnly: true,
                            value: field.value,
                            placeholder: field.autoFilled ? void 0 : "— enter manually —",
                            className: [
                              "text-sm pr-8 h-9",
                              field.autoFilled && field.value ? "bg-primary/8 border-primary/40 text-foreground focus-visible:ring-primary/40 font-medium" : "bg-muted/40 border-input text-muted-foreground"
                            ].join(" ")
                          }
                        ),
                        field.autoFilled && field.value && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-primary",
                            title: "Auto-filled",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" })
                          }
                        )
                      ] })
                    ]
                  },
                  field.label
                )) })
              ] }, section))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-t border-border bg-muted/30 flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  onClick: handleDownload,
                  className: "flex-1 sm:flex-none font-semibold",
                  "data-ocid": "forms.download_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5 mr-1.5" }),
                    "Download PDF"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  onClick: handleCopyAll,
                  className: "flex-1 sm:flex-none",
                  "data-ocid": "forms.copy_all_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCopy, { className: "w-3.5 h-3.5 mr-1.5" }),
                    "Copy All Fields"
                  ]
                }
              )
            ] })
          ] }) })
        ] })
      ]
    }
  );
}
function Forms() {
  const initialProfile = useUserProfile();
  const [step, setStep] = reactExports.useState(1);
  const [savedProfile, setSavedProfile] = reactExports.useState(initialProfile);
  function handleSave(p) {
    setSavedProfile(p);
    setStep(2);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "forms.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border px-6 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        className: "flex items-start gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "AI Form Pre-Filler" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent/15 text-accent border-accent/30 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 mr-1" }),
                "Beta"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 max-w-xl", children: "Set up your profile once, and we'll automatically populate German bureaucratic forms — Anmeldung, GKV, ELSTER, Kita, KYC and more — saving you hours of manual entry." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-4 mt-4", children: [
              {
                icon: User,
                step: "1",
                label: "Save your profile"
              },
              {
                icon: FileText,
                step: "2",
                label: "Choose a form"
              },
              {
                icon: CircleCheck,
                step: "3",
                label: "Download or copy"
              }
            ].map(({ icon: Icon, step: s, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: [
                    "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold",
                    step === Number(s) ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  ].join(" "),
                  children: s
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3 h-3 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: step === Number(s) ? "text-foreground font-semibold" : "text-muted-foreground",
                  children: label
                }
              ),
              s !== "3" && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-muted-foreground/40" })
            ] }, s)) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6 py-8", children: step === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileForm, { initial: savedProfile, onSave: handleSave }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FormStep, { profile: savedProfile, onBack: () => setStep(1) }) })
  ] });
}
export {
  Forms as default
};
