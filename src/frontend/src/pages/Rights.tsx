import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Heart,
  RotateCcw,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";
import { useRightsQuestions } from "../hooks/use-mock-data";
import type { RightsResult } from "../types";

// --- AGG-specific questions ---
const AGG_QUESTIONS = [
  {
    id: 1n,
    question:
      "Were you treated differently because of your nationality or ethnic origin?",
    hint: "This includes hostile comments, being excluded from meetings, or different rules applied to you vs. German colleagues.",
    options: [
      "Yes, this clearly happened",
      "I think so, but I'm not sure",
      "No, this has not happened",
      "I'd prefer not to say",
    ],
  },
  {
    id: 2n,
    question:
      "Have you experienced wage discrimination compared to colleagues doing the same work?",
    hint: "For example, being paid less than a German colleague with similar experience, role, and qualifications.",
    options: [
      "Yes, this clearly happened",
      "I think so, but I'm not sure",
      "No, this has not happened",
      "I'd prefer not to say",
    ],
  },
  {
    id: 3n,
    question:
      "Were you denied a job, promotion, or opportunity due to pregnancy, gender, or family plans?",
    hint: "Including remarks about maternity leave, not being hired because you might get pregnant, or being passed over for a promotion.",
    options: [
      "Yes, this clearly happened",
      "I think so, but I'm not sure",
      "No, this has not happened",
      "I'd prefer not to say",
    ],
  },
  {
    id: 4n,
    question:
      "Have you been harassed, excluded, or made to feel unwelcome in a professional setting?",
    hint: "Including hostile comments, isolation, bullying, offensive jokes, or any form of sexual harassment at work.",
    options: [
      "Yes, this clearly happened",
      "I think so, but I'm not sure",
      "No, this has not happened",
      "I'd prefer not to say",
    ],
  },
];

// --- Legal aid organizations ---
const LEGAL_AID_ORGS = [
  {
    name: "Antidiskriminierungsstelle des Bundes",
    description:
      "Germany's Federal Anti-Discrimination Agency. Offers free counseling, mediation support, and legal information for discrimination cases of all kinds.",
    url: "https://www.antidiskriminierungsstelle.de",
    icon: "⚖️",
    tag: "Federal Agency",
  },
  {
    name: "BMFSFJ — Women's Helpline",
    description:
      "Free 24/7 helpline (08000 116 016) in multiple languages. For women in difficult, dangerous, or vulnerable situations — no case is too small.",
    url: "https://www.hilfetelefon.de",
    icon: "📞",
    tag: "24/7 Helpline",
  },
  {
    name: "Terre des Femmes",
    description:
      "Women's rights organization with a focus on migrant women. Provides legal advice, referral networks, and support for gender-based violence.",
    url: "https://www.frauenrechte.de",
    icon: "🌍",
    tag: "Women's Rights",
  },
  {
    name: "Make it in Germany — Work Rights",
    description:
      "Official government resource with clear guidance on employment rights, equal pay, and workplace protections for international skilled workers.",
    url: "https://www.make-it-in-germany.com/en/living-in-germany/rights",
    icon: "🇩🇪",
    tag: "Official Guide",
  },
];

// --- Build results from answers ---
function buildResults(answers: Record<number, string>): RightsResult[] {
  const results: RightsResult[] = [];
  const isAffirmative = (ans: string | undefined) =>
    ans === "Yes, this clearly happened" ||
    ans === "I think so, but I'm not sure";

  if (isAffirmative(answers[0])) {
    results.push({
      violationType: "Ethnic & National Origin Discrimination",
      summary:
        "You may have experienced discrimination based on your ethnic or national origin. The AGG protects all employees from unequal treatment in hiring, promotion, pay, and working conditions based on ethnicity or nationality. You have the right to file a formal complaint.",
      legalBasis:
        "AGG § 1, § 3, § 7 — Prohibition of unequal treatment based on ethnic origin",
      contactInfo:
        "Contact the Antidiskriminierungsstelle des Bundes for a free consultation. You have 2 months from the incident to claim compensation.",
    });
  }

  if (isAffirmative(answers[1])) {
    results.push({
      violationType: "Wage Discrimination",
      summary:
        "If you are paid less than comparable colleagues for equal work without objective justification, this may violate both the AGG and the Entgelttransparenzgesetz. You have the right to request anonymized pay comparisons from your employer.",
      legalBasis:
        "AGG § 8, § 10 — Equal pay provisions; EntgTranspG § 10 — Right to pay transparency",
      contactInfo:
        "The Federal Anti-Discrimination Agency can advise you on formally requesting pay transparency and next steps if your employer refuses.",
    });
  }

  if (isAffirmative(answers[2])) {
    results.push({
      violationType: "Gender & Pregnancy Discrimination",
      summary:
        "Discrimination related to pregnancy, parental leave, or gender is strictly prohibited in Germany. Employers may not reject candidates or deny promotions due to pregnancy. Dismissal during maternity protection is forbidden by law.",
      legalBasis:
        "AGG § 1, § 3 — Prohibition of gender discrimination; MuSchG § 17 — Dismissal ban during pregnancy and maternity leave",
      contactInfo:
        "BMFSFJ Women's Helpline: 08000 116 016 (free, 24/7, multilingual). Also contact the Antidiskriminierungsstelle for formal complaint guidance.",
    });
  }

  if (isAffirmative(answers[3])) {
    results.push({
      violationType: "Workplace Harassment & Hostile Environment",
      summary:
        "Harassment — including hostile comments, exclusion, bullying, or sexual harassment — constitutes discrimination under the AGG. Your employer has a legal duty to protect you and must take immediate action when notified. You can also report directly to the ADS.",
      legalBasis:
        "AGG § 13 — Right to lodge complaints; AGG § 12 — Employer's duty of protection and preventive measures",
      contactInfo:
        "Reach out to Terre des Femmes or the ADS for confidential counseling. Document all incidents with dates, witnesses, and context.",
    });
  }

  if (results.length === 0) {
    results.push({
      violationType: "Your Rights at a Glance",
      summary:
        "Based on your answers, no specific AGG violations were flagged — but every woman in Germany deserves to know her rights. German law provides strong protections against discrimination, harassment, and unequal pay in the workplace.",
      legalBasis:
        "AGG — Allgemeines Gleichbehandlungsgesetz (General Equal Treatment Act, 2006)",
      contactInfo:
        "The Antidiskriminierungsstelle des Bundes offers free, confidential advice to anyone who wants to learn more about their rights — even if you haven't experienced discrimination.",
    });
  }

  return results;
}

// --- Progress bar ---
function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round(((current + 1) / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between text-body-sm text-muted-foreground mb-2">
        <span>
          Question {current + 1} of {total}
        </span>
        <span>{pct}% complete</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Quiz progress"
        tabIndex={-1}
        className="h-2 bg-muted rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// --- Question step ---
function QuestionStep({
  question,
  hint,
  options,
  stepIndex,
  totalSteps,
  selected,
  onSelect,
  onNext,
  onBack,
}: {
  question: string;
  hint: string;
  options: string[];
  stepIndex: number;
  totalSteps: number;
  selected: string | null;
  onSelect: (opt: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const isLast = stepIndex === totalSteps - 1;

  return (
    <motion.div
      key={stepIndex}
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card
        className="border border-border shadow-subtle"
        data-ocid="rights.quiz.card"
      >
        <CardContent className="p-8 space-y-6">
          <ProgressBar current={stepIndex} total={totalSteps} />

          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold font-display">
                {stepIndex + 1}
              </span>
              <h2 className="text-display-md text-foreground pt-1 leading-snug">
                {question}
              </h2>
            </div>
            <p className="text-body-sm text-muted-foreground pl-12">{hint}</p>
          </div>

          <div
            className="space-y-3 pl-12"
            role="radiogroup"
            aria-label={question}
            data-ocid="rights.options.list"
          >
            {options.map((opt, idx) => {
              const isSelected = selected === opt;
              const inputId = `rights-q-${stepIndex}-option-${idx}`;
              return (
                <label
                  key={opt}
                  htmlFor={inputId}
                  className={[
                    "w-full text-left px-4 py-3 rounded-xl border transition-smooth flex items-center gap-3 group cursor-pointer focus-within:ring-2 focus-within:ring-ring",
                    isSelected
                      ? "border-primary bg-primary/8 text-foreground"
                      : "border-border bg-card hover:border-primary/40 hover:bg-muted/40 text-foreground",
                  ].join(" ")}
                  data-ocid={`rights.option.${idx + 1}`}
                >
                  <input
                    type="radio"
                    id={inputId}
                    name={`question-${stepIndex}`}
                    value={opt}
                    checked={isSelected}
                    onChange={() => onSelect(opt)}
                    className="sr-only"
                  />
                  <span
                    className={[
                      "w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-smooth",
                      isSelected
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/40 group-hover:border-primary/60",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </span>
                  <span className="text-body-md">{opt}</span>
                </label>
              );
            })}
          </div>

          <div className="pl-12 flex items-center gap-3 pt-2">
            <Button
              variant="outline"
              onClick={onBack}
              disabled={stepIndex === 0}
              data-ocid="rights.back_button"
              className="gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
            <Button
              onClick={onNext}
              disabled={!selected}
              data-ocid="rights.next_button"
              className="gap-1.5"
            >
              {isLast ? "See My Results" : "Next Question"}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// --- Results section ---
function ResultsSection({
  answers,
  onStartOver,
}: {
  answers: Record<number, string>;
  onStartOver: () => void;
}) {
  const results = buildResults(answers);
  const hasViolations = results.some(
    (r) => r.violationType !== "Your Rights at a Glance",
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="space-y-8"
    >
      {/* Summary header */}
      <Card className="border border-border shadow-subtle overflow-hidden">
        <div
          className={`px-8 py-6 ${hasViolations ? "bg-primary/6" : "bg-muted/40"}`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                hasViolations
                  ? "bg-primary/15 text-primary"
                  : "bg-muted/80 text-muted-foreground"
              }`}
            >
              {hasViolations ? (
                <AlertCircle className="w-6 h-6" />
              ) : (
                <CheckCircle2 className="w-6 h-6" />
              )}
            </div>
            <div>
              <h2
                className="text-display-md text-foreground"
                data-ocid="rights.results_section"
              >
                {hasViolations
                  ? "Potential Rights Violations Identified"
                  : "Your Rights Are Protected"}
              </h2>
              <p className="text-body-md text-muted-foreground mt-1 max-w-xl">
                {hasViolations
                  ? "Based on your answers, you may have experienced one or more violations under German law. You are not alone — confidential help is available to you."
                  : "No specific violations were flagged. The resources below will help you stay informed about your rights in Germany."}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Violation detail cards */}
      <div className="space-y-4" data-ocid="rights.violations_list">
        {results.map((result, idx) => (
          <motion.div
            key={result.violationType}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.38 }}
          >
            <Card
              className="border border-border shadow-subtle"
              data-ocid={`rights.violation.${idx + 1}`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <h3 className="text-display-md text-foreground">
                    {result.violationType}
                  </h3>
                  <Badge variant="secondary" className="text-xs flex-shrink-0">
                    AGG Protected
                  </Badge>
                </div>

                <p className="text-body-md text-foreground/80 leading-relaxed">
                  {result.summary}
                </p>

                <div className="rounded-lg bg-muted/60 px-4 py-3 space-y-1.5">
                  <div className="flex items-center gap-2 text-body-sm font-semibold text-primary">
                    <BookOpen className="w-4 h-4" />
                    Legal Basis
                  </div>
                  <p className="text-body-sm text-muted-foreground">
                    {result.legalBasis}
                  </p>
                </div>

                <div className="rounded-lg bg-primary/5 border border-primary/15 px-4 py-3 space-y-1.5">
                  <div className="flex items-center gap-2 text-body-sm font-semibold text-primary">
                    <ShieldCheck className="w-4 h-4" />
                    What You Can Do
                  </div>
                  <p className="text-body-sm text-foreground/80">
                    {result.contactInfo}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Legal aid organizations */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-primary" />
          <h3 className="text-display-md text-foreground">
            Free Legal Support in Germany
          </h3>
        </div>
        <p className="text-body-md text-muted-foreground">
          These organizations offer free, confidential advice. You don't need to
          have a clear case to reach out — they are here to listen and guide you
          without judgment.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          data-ocid="rights.legal_aid_list"
        >
          {LEGAL_AID_ORGS.map((org, idx) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + idx * 0.08, duration: 0.35 }}
            >
              <Card
                className="border border-border shadow-subtle h-full transition-smooth hover:border-primary/30 hover:shadow-md"
                data-ocid={`rights.legal_aid.${idx + 1}`}
              >
                <CardContent className="p-5 space-y-3 flex flex-col h-full">
                  <div className="flex items-start gap-2.5">
                    <span className="text-2xl leading-none mt-0.5">
                      {org.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground leading-snug">
                        {org.name}
                      </p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {org.tag}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-body-sm text-muted-foreground flex-1 leading-relaxed">
                    {org.description}
                  </p>
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`rights.legal_aid_link.${idx + 1}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-smooth"
                  >
                    Visit website
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <Separator />
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
        <Button
          variant="outline"
          onClick={onStartOver}
          data-ocid="rights.start_over_button"
          className="gap-2 w-full sm:w-auto"
        >
          <RotateCcw className="w-4 h-4" />
          Start Over
        </Button>
        <Button
          data-ocid="rights.connect_advisor_button"
          className="gap-2 w-full sm:w-auto"
          onClick={() =>
            window.open(
              "https://www.antidiskriminierungsstelle.de/DE/Beratung/beratung_node.html",
              "_blank",
            )
          }
        >
          <UserCheck className="w-4 h-4" />
          Connect with an Advisor
        </Button>
        <p className="text-body-sm text-muted-foreground sm:ml-auto">
          All conversations are confidential.
        </p>
      </div>
    </motion.div>
  );
}

// --- Main page ---
export default function Rights() {
  const mockQuestions = useRightsQuestions();
  void mockQuestions; // available via hook; AGG_QUESTIONS used for richer content

  const questions = AGG_QUESTIONS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const selectedAnswer = answers[currentIndex] ?? null;

  const handleSelect = useCallback(
    (opt: string) => setAnswers((prev) => ({ ...prev, [currentIndex]: opt })),
    [currentIndex],
  );

  const handleNext = useCallback(() => {
    if (!selectedAnswer) return;
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowResults(true);
    }
  }, [selectedAnswer, currentIndex, questions.length]);

  const handleBack = useCallback(() => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }, [currentIndex]);

  const handleStartOver = useCallback(() => {
    setAnswers({});
    setCurrentIndex(0);
    setShowResults(false);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="bg-card border-b border-border shadow-subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/12 flex items-center justify-center flex-shrink-0">
              <Scale className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h1
                  className="text-display-lg text-foreground"
                  data-ocid="rights.page"
                >
                  Rights Awareness Tool
                </h1>
                <Badge variant="secondary" className="text-xs">
                  Free &amp; Confidential
                </Badge>
              </div>
              <p className="text-body-md text-muted-foreground max-w-xl">
                You deserve to be treated fairly at work. This tool helps you
                understand whether your experience may involve a rights
                violation under German law (AGG — Allgemeines
                Gleichbehandlungsgesetz), and what support is available to you.
              </p>
            </div>
          </div>

          {/* Empathy note */}
          <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-primary/5 border border-primary/15 px-4 py-3">
            <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-body-sm text-foreground/80">
              <strong>You are not alone.</strong> Many women face discrimination
              silently because they don't know their rights or fear
              consequences. This is a safe space — your answers are never stored
              or shared.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <QuestionStep
              key={currentIndex}
              question={questions[currentIndex].question}
              hint={questions[currentIndex].hint}
              options={questions[currentIndex].options}
              stepIndex={currentIndex}
              totalSteps={questions.length}
              selected={selectedAnswer}
              onSelect={handleSelect}
              onNext={handleNext}
              onBack={handleBack}
            />
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              <ResultsSection answers={answers} onStartOver={handleStartOver} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
