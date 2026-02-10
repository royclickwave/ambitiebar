export interface Option {
  id: string;
  text: string;
  points: number;
}

export interface Question {
  id: number;
  text: string;
  subText?: string;
  tip?: string;
  options: Option[];
}

export interface UserAnswers {
  [questionId: number]: Option;
}

export interface UserDetails {
  name: string;
  email: string;
  company: string;
}

export enum AppView {
  LANDING = 'LANDING',
  QUIZ = 'QUIZ',
  EMAIL_CAPTURE = 'EMAIL_CAPTURE',
  REPORT = 'REPORT'
}

export interface ScoreBreakdown {
  total: number;
  structure: number; // Beloningsstructuur
  data: number;      // Data & Systemen
  transparency: number; // Transparantie & Communicatie
  compliance: number;   // Juridische Compliance
}