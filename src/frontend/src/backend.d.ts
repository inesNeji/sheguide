import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface RightsQuestion {
    id: bigint;
    question: string;
    options: Array<string>;
}
export interface RightsResult {
    contactInfo: string;
    summary: string;
    legalBasis: string;
    violationType: string;
}
export interface FormField {
    key: string;
    value: string;
}
export interface BuddyMatch {
    score: bigint;
    profile: BuddyProfile;
}
export interface Deadline {
    id: bigint;
    status: DeadlineStatus;
    title: string;
    officialLink: string;
    dueDate: string;
    description: string;
    stage: Stage;
}
export interface BuddyProfile {
    id: bigint;
    bio: string;
    city: string;
    name: string;
    languages: Array<string>;
    isAvailable: boolean;
    professionalField: string;
    countryOfOrigin: string;
}
export interface UserProfile {
    arrivalDate: string;
    city: string;
    profession: string;
    fullName: string;
    nationality: string;
    visaType: VisaType;
    familySituation: string;
}
export enum DeadlineStatus {
    upcoming = "upcoming",
    completed = "completed",
    urgent = "urgent"
}
export enum Stage {
    arrival = "arrival",
    professional = "professional",
    settling = "settling"
}
export enum VisaType {
    blueCard = "blueCard",
    student = "student",
    generalResidence = "generalResidence"
}
export interface backendInterface {
    getBuddies(): Promise<Array<BuddyProfile>>;
    getDeadlines(visaType: VisaType, arrivalDate: string): Promise<Array<Deadline>>;
    getPrefilledForm(formType: string): Promise<Array<FormField>>;
    getRightsQuestions(): Promise<Array<RightsQuestion>>;
    getRightsResult(answers: Array<[bigint, string]>): Promise<Array<RightsResult>>;
    getTopMatches(city: string, field: string, origin: string): Promise<Array<BuddyMatch>>;
    getUserProfile(): Promise<UserProfile | null>;
    saveUserProfile(profile: UserProfile): Promise<void>;
}
