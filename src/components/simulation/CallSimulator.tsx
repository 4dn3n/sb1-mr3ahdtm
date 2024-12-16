import { Phone, PhoneOff } from 'lucide-react';
import { Button } from '../ui/button';
import { useSimulation } from '../../hooks/useSimulation';
import { Conversation } from './Conversation';

const customerTypes = {
  interested: 'Client Intéressé',
  skeptical: 'Client Sceptique',
  undecided: 'Client Indécis',
  busy: 'Client Pressé'
};

export function CallSimulator() {
  const { isActive, startSimulation, endSimulation } = useSimulation();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Simulation d'Appel</h2>
        <p className="text-gray-600">
          Entraînez-vous avec des clients virtuels alimentés par l'IA
        </p>
      </div>

      {!isActive ? (
        <>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type de Client
            </label>
            <select
              onChange={(e) => !isActive && startSimulation(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {Object.entries(customerTypes).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <Button onClick={() => startSimulation('interested')} className="w-full">
            <Phone className="w-4 h-4 mr-2" />
            Démarrer l'Appel
          </Button>
        </>
      ) : (
        <div className="space-y-4">
          <Conversation
            customerType={customerTypes.interested}
            context="Vous êtes un commercial proposant des services informatiques"
            onEndCall={endSimulation}
          />
          <Button
            variant="outline"
            onClick={endSimulation}
            className="w-full bg-red-50 border-red-600 text-red-600 hover:bg-red-100"
          >
            <PhoneOff className="w-4 h-4 mr-2" />
            Terminer l'Appel
          </Button>
        </div>
      )}
    </div>
  );
}