export function RecentSessions() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Sessions</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((session) => (
          <div
            key={session}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <h3 className="font-medium text-gray-900">Training Session #{session}</h3>
              <p className="text-sm text-gray-500">Completed 2 hours ago</p>
            </div>
            <span className="text-blue-600 font-medium">View Report →</span>
          </div>
        ))}
      </div>
    </div>
  );
}