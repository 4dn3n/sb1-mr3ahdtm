import React from 'react';
import { Navigation } from './components/layout/Navigation';
import { CallSimulator } from './components/simulation/CallSimulator';
import { ScoreCard } from './components/dashboard/ScoreCard';
import { RecentSessions } from './components/dashboard/RecentSessions';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ScoreCard
            score={85}
            title="Performance Globale"
            description="Votre performance moyenne sur toutes les simulations"
          />
          <ScoreCard
            score={92}
            title="Gestion des Objections"
            description="Votre capacité à gérer les objections client"
          />
          <ScoreCard
            score={78}
            title="Taux de Conversion"
            description="Taux de réussite pour la prise de rendez-vous"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CallSimulator />
          <RecentSessions />
        </div>
      </main>
    </div>
  );
}

export default App;