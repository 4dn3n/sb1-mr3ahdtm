export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface SimulationSession {
  id: string;
  date: Date;
  score: number;
  customerType: 'interested' | 'skeptical' | 'undecided' | 'busy';
  duration: number;
}

export interface ScoreMetrics {
  overall: number;
  objectionHandling: number;
  closingRate: number;
}