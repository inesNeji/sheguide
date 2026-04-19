export enum DeadlineStatus {
  urgent = "urgent",
  upcoming = "upcoming",
  completed = "completed",
}

export enum Stage {
  arrival = "arrival",
  settling = "settling",
  professional = "professional",
}

export enum VisaType {
  blueCard = "blueCard",
  student = "student",
  generalResidence = "generalResidence",
}

export interface BuddyProfile {
  id: bigint;
  name: string;
  city: string;
  bio: string;
  countryOfOrigin: string;
  professionalField: string;
  languages: string[];
  isAvailable: boolean;
}

export interface BuddyMatch {
  profile: BuddyProfile;
  score: bigint;
}

export interface Deadline {
  id: bigint;
  title: string;
  description: string;
  dueDate: string;
  stage: Stage;
  status: DeadlineStatus;
  officialLink: string;
}

export interface UserProfile {
  fullName: string;
  nationality: string;
  city: string;
  profession: string;
  arrivalDate: string;
  visaType: VisaType;
  familySituation: string;
}

export interface FormField {
  key: string;
  value: string;
}

export interface RightsQuestion {
  id: bigint;
  question: string;
  options: string[];
}

export interface RightsResult {
  violationType: string;
  summary: string;
  legalBasis: string;
  contactInfo: string;
}
