export default function AgentConnection({ from, to, className = "" }) {
  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg">
          <span className="text-white font-semibold text-sm">{from}</span>
        </div>
        <span className="text-xs text-gray-600 mt-2 font-medium">{from}</span>
      </div>
      <svg width="60" height="20" viewBox="0 0 60 20" className="text-primary-400">
        <path
          d="M 0 10 L 60 10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4"
        />
        <path
          d="M 50 5 L 60 10 L 50 15"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg">
          <span className="text-white font-semibold text-sm">{to}</span>
        </div>
        <span className="text-xs text-gray-600 mt-2 font-medium">{to}</span>
      </div>
    </div>
  )
}
