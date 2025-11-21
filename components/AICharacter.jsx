'use client'

const AICharacter = ({ variant = 'default', className = '', animated = true }) => {
  const characters = {
    default: (
      <svg
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Robot Head */}
        <rect x="50" y="30" width="100" height="80" rx="10" fill="url(#gradient1)" />
        <rect x="50" y="30" width="100" height="80" rx="10" stroke="white" strokeWidth="3" />
        
        {/* Eyes */}
        <circle cx="75" cy="60" r="8" fill="#FF6B35" className={animated ? "animate-pulse" : ""} />
        <circle cx="125" cy="60" r="8" fill="#FF6B35" className={animated ? "animate-pulse" : ""} />
        <circle cx="75" cy="60" r="4" fill="white" />
        <circle cx="125" cy="60" r="4" fill="white" />
        
        {/* Antenna */}
        <line x1="100" y1="30" x2="100" y2="15" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="12" r="5" fill="#FF6B35" className={animated ? "animate-pulse-glow" : ""} />
        
        {/* Mouth */}
        <rect x="70" y="80" width="60" height="8" rx="4" fill="white" />
        
        {/* Body */}
        <rect x="60" y="110" width="80" height="70" rx="10" fill="url(#gradient2)" />
        <rect x="60" y="110" width="80" height="70" rx="10" stroke="white" strokeWidth="3" />
        
        {/* Chest Panel */}
        <rect x="75" y="125" width="50" height="30" rx="5" fill="rgba(255,255,255,0.2)" />
        <circle cx="90" cy="140" r="3" fill="#FF6B35" />
        <circle cx="110" cy="140" r="3" fill="#FF6B35" />
        
        {/* Arms */}
        <rect x="30" y="120" width="25" height="15" rx="5" fill="url(#gradient1)" />
        <rect x="30" y="120" width="25" height="15" rx="5" stroke="white" strokeWidth="2" />
        <rect x="145" y="120" width="25" height="15" rx="5" fill="url(#gradient1)" />
        <rect x="145" y="120" width="25" height="15" rx="5" stroke="white" strokeWidth="2" />
        
        {/* Legs */}
        <rect x="70" y="180" width="20" height="20" rx="5" fill="url(#gradient2)" />
        <rect x="70" y="180" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
        <rect x="110" y="180" width="20" height="20" rx="5" fill="url(#gradient2)" />
        <rect x="110" y="180" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#FF8C5A" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8C5A" />
            <stop offset="100%" stopColor="#FF6B35" />
          </linearGradient>
        </defs>
      </svg>
    ),
    assistant: (
      <svg
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <circle cx="100" cy="70" r="50" fill="url(#gradient3)" />
        <circle cx="100" cy="70" r="50" stroke="white" strokeWidth="3" />
        
        {/* Eyes */}
        <ellipse cx="85" cy="65" rx="8" ry="12" fill="#FF6B35" className={animated ? "animate-pulse" : ""} />
        <ellipse cx="115" cy="65" rx="8" ry="12" fill="#FF6B35" className={animated ? "animate-pulse" : ""} />
        <circle cx="85" cy="65" r="4" fill="white" />
        <circle cx="115" cy="65" r="4" fill="white" />
        
        {/* Smile */}
        <path d="M 75 85 Q 100 100 125 85" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
        
        {/* Body */}
        <rect x="60" y="120" width="80" height="60" rx="15" fill="url(#gradient4)" />
        <rect x="60" y="120" width="80" height="60" rx="15" stroke="white" strokeWidth="3" />
        
        {/* Chest Display */}
        <rect x="75" y="135" width="50" height="25" rx="5" fill="rgba(255,255,255,0.3)" />
        <circle cx="90" cy="147" r="2" fill="#FF6B35" />
        <circle cx="100" cy="147" r="2" fill="#FF6B35" />
        <circle cx="110" cy="147" r="2" fill="#FF6B35" />
        
        {/* Arms */}
        <circle cx="40" cy="140" r="15" fill="url(#gradient3)" />
        <circle cx="40" cy="140" r="15" stroke="white" strokeWidth="2" />
        <circle cx="160" cy="140" r="15" fill="url(#gradient3)" />
        <circle cx="160" cy="140" r="15" stroke="white" strokeWidth="2" />
        
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#FF8C5A" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8C5A" />
            <stop offset="100%" stopColor="#FF6B35" />
          </linearGradient>
        </defs>
      </svg>
    ),
    helper: (
      <svg
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <rect x="60" y="40" width="80" height="70" rx="15" fill="url(#gradient5)" />
        <rect x="60" y="40" width="80" height="70" rx="15" stroke="white" strokeWidth="3" />
        
        {/* Single Eye (Cyclops style) */}
        <circle cx="100" cy="70" r="12" fill="#FF6B35" className={animated ? "animate-pulse" : ""} />
        <circle cx="100" cy="70" r="6" fill="white" />
        
        {/* Antenna */}
        <line x1="100" y1="40" x2="100" y2="25" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="20" r="6" fill="#FF6B35" className={animated ? "animate-pulse-glow" : ""} />
        
        {/* Body */}
        <rect x="70" y="110" width="60" height="70" rx="15" fill="url(#gradient6)" />
        <rect x="70" y="110" width="60" height="70" rx="15" stroke="white" strokeWidth="3" />
        
        {/* Chest */}
        <rect x="80" y="125" width="40" height="30" rx="5" fill="rgba(255,255,255,0.2)" />
        <line x1="90" y1="140" x2="110" y2="140" stroke="#FF6B35" strokeWidth="2" />
        
        {/* Arms */}
        <rect x="40" y="120" width="20" height="20" rx="5" fill="url(#gradient5)" />
        <rect x="40" y="120" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
        <rect x="140" y="120" width="20" height="20" rx="5" fill="url(#gradient5)" />
        <rect x="140" y="120" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
        
        {/* Base */}
        <ellipse cx="100" cy="185" rx="50" ry="10" fill="url(#gradient6)" />
        
        <defs>
          <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#FF8C5A" />
          </linearGradient>
          <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8C5A" />
            <stop offset="100%" stopColor="#FF6B35" />
          </linearGradient>
        </defs>
      </svg>
    ),
  }

  return characters[variant] || characters.default
}

export default AICharacter

