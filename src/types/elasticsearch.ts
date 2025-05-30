export interface SearchResult {
  id: string;
  score: number;
  name: string;
  prefecture: string;
  city: string;
  ageRange: string;
  programs: string[];
  description: string;
  features: string[];
  createdAt: string;
  updatedAt: string;
  labels: {
    dayService: boolean;
    noExperience: boolean;
    socialInsurance: boolean;
    carCommute: boolean;
    bonus: boolean;
    transportation: boolean;
  };
}

export interface SearchQuery {
  q?: string;
  prefecture?: string;
  city?: string;
  ageRange?: string;
  program?: string;
  filters?: string[];
} 