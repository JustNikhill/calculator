export default function AgentIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 600 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#grad1)" rx="8" />

      {/* Department nodes */}
      <g>
        {/* Engineering */}
        <circle cx="150" cy="100" r="40" fill="#0ea5e9" opacity="0.1" />
        <circle cx="150" cy="100" r="25" fill="#0ea5e9" />
        <text x="150" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">E</text>
        <text x="150" y="160" textAnchor="middle" fill="#1f2937" fontSize="11" fontWeight="500">Engineering</text>

        {/* Product */}
        <circle cx="300" cy="100" r="40" fill="#0284c7" opacity="0.1" />
        <circle cx="300" cy="100" r="25" fill="#0284c7" />
        <text x="300" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">P</text>
        <text x="300" y="160" textAnchor="middle" fill="#1f2937" fontSize="11" fontWeight="500">Product</text>

        {/* Sales */}
        <circle cx="450" cy="100" r="40" fill="#0369a1" opacity="0.1" />
        <circle cx="450" cy="100" r="25" fill="#0369a1" />
        <text x="450" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">S</text>
        <text x="450" y="160" textAnchor="middle" fill="#1f2937" fontSize="11" fontWeight="500">Sales</text>

        {/* Operations */}
        <circle cx="225" cy="250" r="40" fill="#075985" opacity="0.1" />
        <circle cx="225" cy="250" r="25" fill="#075985" />
        <text x="225" y="255" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">O</text>
        <text x="225" y="310" textAnchor="middle" fill="#1f2937" fontSize="11" fontWeight="500">Operations</text>

        {/* Leadership */}
        <circle cx="375" cy="250" r="40" fill="#0c4a6e" opacity="0.1" />
        <circle cx="375" cy="250" r="25" fill="#0c4a6e" />
        <text x="375" y="255" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">L</text>
        <text x="375" y="310" textAnchor="middle" fill="#1f2937" fontSize="11" fontWeight="500">Leadership</text>
      </g>

      {/* Connection lines */}
      <line x1="150" y1="100" x2="300" y2="100" stroke="#0ea5e9" strokeWidth="2" opacity="0.3" />
      <line x1="300" y1="100" x2="450" y2="100" stroke="#0284c7" strokeWidth="2" opacity="0.3" />
      <line x1="150" y1="100" x2="225" y2="250" stroke="#0ea5e9" strokeWidth="2" opacity="0.3" />
      <line x1="300" y1="100" x2="225" y2="250" stroke="#0284c7" strokeWidth="2" opacity="0.3" />
      <line x1="450" y1="100" x2="375" y2="250" stroke="#0369a1" strokeWidth="2" opacity="0.3" />
      <line x1="225" y1="250" x2="375" y2="250" stroke="#075985" strokeWidth="2" opacity="0.3" />
    </svg>
  )
}
