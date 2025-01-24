export interface Question {
  front: string;
  back: string;
  pronunciation?: string;
  options?: string[];
}

export interface RegionQuestions {
  [key: string]: {
    beginner: Question[];
    intermediate: Question[];
    advanced: Question[];
  }
}