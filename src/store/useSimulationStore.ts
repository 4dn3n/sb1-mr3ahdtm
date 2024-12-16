import { create } from 'zustand';
import type { SimulationSession } from '../types';

interface SimulationState {
  sessions: SimulationSession[];
  currentSession: SimulationSession | null;
  addSession: (session: SimulationSession) => void;
  setCurrentSession: (session: SimulationSession | null) => void;
}

export const useSimulationStore = create<SimulationState>((set) => ({
  sessions: [],
  currentSession: null,
  addSession: (session) =>
    set((state) => ({ sessions: [...state.sessions, session] })),
  setCurrentSession: (session) => set({ currentSession: session }),
}));