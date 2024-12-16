import { Trophy } from 'lucide-react';

interface ScoreCardProps {
  score: number;
  title: string;
  description: string;
}

export function ScoreCard({ score, title, description }: ScoreCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <Trophy className="w-6 h-6 text-yellow-500" />
      </div>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-blue-600">{score}</span>
        <span className="text-sm text-gray-500 mb-1">/100</span>
      </div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}