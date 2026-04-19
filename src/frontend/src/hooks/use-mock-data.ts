import type {
  BuddyMatch,
  BuddyProfile,
  Deadline,
  RightsQuestion,
  UserProfile,
} from "../types";
import { DeadlineStatus, Stage, VisaType } from "../types";

const mockBuddies: BuddyProfile[] = [
  {
    id: 1n,
    name: "Amara Okafor",
    city: "Berlin",
    bio: "Software engineer passionate about FinTech and community building. Happy to help newcomers navigate Berlin's tech scene.",
    countryOfOrigin: "Nigeria",
    professionalField: "Tech",
    languages: ["English", "Yoruba", "German (B2)"],
    isAvailable: true,
  },
  {
    id: 2n,
    name: "Priya Sharma",
    city: "Munich",
    bio: "Medical researcher at LMU. Knows the ropes of health insurance, university admin, and finding community in Munich.",
    countryOfOrigin: "India",
    professionalField: "Healthcare",
    languages: ["English", "Hindi", "German (C1)"],
    isAvailable: true,
  },
  {
    id: 3n,
    name: "Elif Yılmaz",
    city: "Berlin",
    bio: "UX designer with 5 years in Berlin. I love helping new arrivals find their footing — from visa paperwork to favorite Kiez cafés.",
    countryOfOrigin: "Turkey",
    professionalField: "Tech",
    languages: ["Turkish", "English", "German (C2)"],
    isAvailable: true,
  },
  {
    id: 4n,
    name: "Jessica Lee",
    city: "Frankfurt",
    bio: "Investment analyst at Deutsche Bank. Relocated from NYC and learned German bureaucracy the hard way — so you don't have to.",
    countryOfOrigin: "USA",
    professionalField: "Finance",
    languages: ["English", "Korean", "German (B1)"],
    isAvailable: true,
  },
  {
    id: 5n,
    name: "Li Wei",
    city: "Hamburg",
    bio: "PhD student in materials science. Can help with university enrollment, student visa extensions, and navigating Chinese expat communities.",
    countryOfOrigin: "China",
    professionalField: "Academia",
    languages: ["Mandarin", "English", "German (B2)"],
    isAvailable: false,
  },
  {
    id: 6n,
    name: "Carmen Ruiz",
    city: "Berlin",
    bio: "Architect working at a Berlin studio. Happy to share tips on housing, freelance permits, and the best Spanish community events.",
    countryOfOrigin: "Spain",
    professionalField: "Tech",
    languages: ["Spanish", "English", "German (C1)"],
    isAvailable: true,
  },
  {
    id: 7n,
    name: "Ana Beatriz Costa",
    city: "Munich",
    bio: "Data scientist at Siemens. Moved from São Paulo 3 years ago. Expert in Blue Card applications and navigating corporate HR in Germany.",
    countryOfOrigin: "Brazil",
    professionalField: "Tech",
    languages: ["Portuguese", "English", "German (B2)"],
    isAvailable: true,
  },
  {
    id: 8n,
    name: "Shirin Moradi",
    city: "Hamburg",
    bio: "Pharmacist and certified interpreter. I offer guidance on credential recognition, Approbation process, and Iranian community networks.",
    countryOfOrigin: "Iran",
    professionalField: "Healthcare",
    languages: ["Persian", "English", "German (C2)"],
    isAvailable: true,
  },
];

const mockDeadlines: Deadline[] = [
  {
    id: 1n,
    title: "Anmeldung (City Registration)",
    description:
      "Register your address at the local Bürgeramt within 2 weeks of moving in. Required for almost everything else.",
    dueDate: "2026-04-25",
    stage: Stage.arrival,
    status: DeadlineStatus.urgent,
    officialLink: "https://service.berlin.de/dienstleistung/120686/",
  },
  {
    id: 2n,
    title: "Fiktionsbescheinigung Application",
    description:
      "Apply for a temporary residence permit while your main visa application is being processed.",
    dueDate: "2026-04-28",
    stage: Stage.arrival,
    status: DeadlineStatus.urgent,
    officialLink: "https://www.bamf.de/",
  },
  {
    id: 3n,
    title: "GKV Health Insurance Enrollment",
    description:
      "Enroll in a statutory health insurance (Gesetzliche Krankenversicherung) within 3 months of arrival.",
    dueDate: "2026-05-15",
    stage: Stage.settling,
    status: DeadlineStatus.upcoming,
    officialLink: "https://www.gkv-spitzenverband.de/",
  },
  {
    id: 4n,
    title: "Blue Card Application",
    description:
      "Submit your EU Blue Card application at the Ausländerbehörde with your employment contract and qualification certificates.",
    dueDate: "2026-05-30",
    stage: Stage.arrival,
    status: DeadlineStatus.upcoming,
    officialLink:
      "https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card",
  },
  {
    id: 5n,
    title: "ELSTER Tax Registration",
    description:
      "Register with the German tax office (Finanzamt) to receive your tax ID and set up your ELSTER online account.",
    dueDate: "2026-06-10",
    stage: Stage.professional,
    status: DeadlineStatus.upcoming,
    officialLink: "https://www.elster.de/",
  },
  {
    id: 6n,
    title: "Bank Account Opening",
    description:
      "Open a German bank account (Girokonto) — required for salary payments, rent, and direct debits.",
    dueDate: "2026-03-10",
    stage: Stage.settling,
    status: DeadlineStatus.completed,
    officialLink: "https://www.bundesbank.de/",
  },
  {
    id: 7n,
    title: "German Language Course (B1)",
    description:
      "Enroll in an integration course at a certified language school. Required for permanent residence applications.",
    dueDate: "2026-03-20",
    stage: Stage.settling,
    status: DeadlineStatus.completed,
    officialLink: "https://www.goethe.de/",
  },
  {
    id: 8n,
    title: "Professional Credential Recognition",
    description:
      "Submit your foreign qualification documents to the relevant German recognition body (anabin database).",
    dueDate: "2026-03-05",
    stage: Stage.professional,
    status: DeadlineStatus.completed,
    officialLink: "https://www.anerkennung-in-deutschland.de/",
  },
];

const mockRightsQuestions: RightsQuestion[] = [
  {
    id: 1n,
    question: "What type of workplace situation are you experiencing?",
    options: [
      "Unfair treatment or harassment",
      "Discrimination based on origin or religion",
      "Unequal pay for equal work",
      "Forced unpaid overtime",
    ],
  },
  {
    id: 2n,
    question: "How long has this situation been going on?",
    options: [
      "It just happened once",
      "Several times over the past few weeks",
      "Ongoing for months",
      "I'm not sure",
    ],
  },
  {
    id: 3n,
    question: "Have you reported this to anyone at your company?",
    options: [
      "Yes, to my direct manager",
      "Yes, to HR or a works council",
      "No, I was afraid of retaliation",
      "No, I didn't know how",
    ],
  },
  {
    id: 4n,
    question: "What outcome are you hoping for?",
    options: [
      "Understand my legal rights",
      "File a formal complaint",
      "Get legal representation",
      "Find a new job safely",
    ],
  },
];

const mockUserProfile: UserProfile = {
  fullName: "Maria Silva",
  nationality: "Brazilian",
  city: "Berlin",
  profession: "Software Engineer",
  arrivalDate: "2026-03-01",
  visaType: VisaType.blueCard,
  familySituation: "Single",
};

export function useBuddies(): {
  buddies: BuddyProfile[];
  topMatches: BuddyMatch[];
} {
  const topMatches: BuddyMatch[] = mockBuddies
    .slice(0, 3)
    .map((profile, i) => ({
      profile,
      score: BigInt(95 - i * 3),
    }));
  return { buddies: mockBuddies, topMatches };
}

export function useDeadlines(_visaType?: VisaType): {
  deadlines: Deadline[];
  urgent: Deadline[];
  upcoming: Deadline[];
  completed: Deadline[];
} {
  const urgent = mockDeadlines.filter(
    (d) => d.status === DeadlineStatus.urgent,
  );
  const upcoming = mockDeadlines.filter(
    (d) => d.status === DeadlineStatus.upcoming,
  );
  const completed = mockDeadlines.filter(
    (d) => d.status === DeadlineStatus.completed,
  );
  return { deadlines: mockDeadlines, urgent, upcoming, completed };
}

export function useUserProfile(): UserProfile {
  return mockUserProfile;
}

export function useRightsQuestions(): RightsQuestion[] {
  return mockRightsQuestions;
}
