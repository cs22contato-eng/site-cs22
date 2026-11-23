import { useState } from 'react';
import { Camera } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Estúdio CS22 Marketing',
  loading = 'eager',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-[#202832] text-[#AAB4C0] p-6 ${className}`}
      >
        <div className="w-11 h-11 rounded-xl border border-[#C47A38]/40 bg-[#171B20]/70 flex items-center justify-center text-[#E58B45]">
          <Camera className="w-5 h-5" aria-hidden="true" />
        </div>
        <span className="text-sm font-medium text-[#F4F6F8] text-center">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
