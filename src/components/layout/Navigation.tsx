import { BarChart, BookOpen, Phone } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Phone className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              FormationVente IA
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <BookOpen className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <BarChart className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}