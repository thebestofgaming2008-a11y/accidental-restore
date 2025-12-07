import { useState, useEffect } from 'react';

interface SmartImageProps {
  folderPath: string;
  alt: string;
  className?: string;
}

export function SmartImage({ folderPath, alt, className }: SmartImageProps) {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Try common filenames
    const tryFiles = async () => {
      const commonNames = ['1.jpg', '2.jpg', 'image.jpg', 'main.jpg', '1.png', '2.png', '1.jpeg', '2.jpeg', '1.webp'];
      
      for (const filename of commonNames) {
        const testPath = `${folderPath}/${filename}`;
        
        try {
          const response = await fetch(testPath, { method: 'HEAD' });
          if (response.ok) {
            setImageSrc(testPath);
            return;
          }
        } catch {
          continue;
        }
      }
      
      setImageError(true);
    };

    tryFiles();
  }, [folderPath]);

  if (imageError || !imageSrc) {
    return (
      <div className={`${className} bg-muted flex items-center justify-center`}>
        <svg className="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
    );
  }

  return <img src={imageSrc} alt={alt} className={className} />;
}
