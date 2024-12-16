import { useState, useCallback } from 'react';
import { useSimulationStore } from '../store/useSimulationStore';
import type { SimulationSession } from '../types';

export function useSimulation() {
  const [isActive, setIsActive] = useState(false);
  const { addSession, setCurrentSession } = useSimulationStore();

  const startSimulation = useCallback((customerType: string) => {
    setIsActive(true);
    const newSession: SimulationSession = {
      id: crypto.randomUUID(),
      date: new Date(),
      score: 0,
      customerType: customerType as SimulationSession['customerType'],
      duration: 0,
    };
    setCurrentSession(newSession);
  }, [setCurrentSession]);

  const endSimulation = useCallback(() => {
    setIsActive(false);
    setCurrentSession(null);
  }, [setCurrentSession]);

  return {
    isActive,
    startSimulation,
    endSimulation,
  };
}