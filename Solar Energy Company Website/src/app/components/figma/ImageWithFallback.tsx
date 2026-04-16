import React, { useState } from 'react'

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [hasError, setHasError] = useState(false)

  const { src, alt, style, className, ...rest } = props

  if (hasError) {
    return (
      <div 
        className={`bg-gradient-to-br from-amber-600/40 to-orange-700/40 ${className || ''}`}
        style={style}
      >
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white/40 text-xs font-medium">{alt || 'Image'}</span>
        </div>
      </div>
    )
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={style} 
      {...rest} 
      onError={() => setHasError(true)}
    />
  )
}