import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface ImageSliderProps {
  images: string[];
  autoPlayInterval?: number;
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  autoPlayInterval = 3500,
  className
}) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Clear timeout on unmount or when dependencies change
  const clearAutoPlay = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    if (!isPaused && images.length > 1) {
      clearAutoPlay();
      timeoutRef.current = setTimeout(nextSlide, autoPlayInterval);
    }
    return clearAutoPlay;
  }, [currentIndex, isPaused, nextSlide, autoPlayInterval, images.length, clearAutoPlay]);

  if (!images || images.length === 0) return null;

  return (
    <div className={cn("w-full flex flex-col items-center group/slider", className)}>
      <div 
        className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl border border-border/50 bg-muted/20 transition-all duration-300"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slider Track */}
        <div 
          className="flex transition-transform duration-700 ease-in-out will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.4/1] lg:aspect-[3/1] flex items-center justify-center overflow-hidden">
              <img 
                src={image} 
                alt={`${t('common.slide')} ${index + 1}`} 
                className="w-full h-full object-cover select-none"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Only show on hover or for multi-image sliders */}
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => {
                e.preventDefault();
                prevSlide();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 text-foreground p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover/slider:opacity-100 focus:opacity-100 z-10 shadow-lg border border-border/50 hidden sm:flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95"
              aria-label={t('common.previous_slide')}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                nextSlide();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 text-foreground p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover/slider:opacity-100 focus:opacity-100 z-10 shadow-lg border border-border/50 hidden sm:flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95"
              aria-label={t('common.next_slide')}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots */}
      {images.length > 1 && (
        <div className="flex justify-center items-center gap-3 mt-8 pb-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-500 cursor-pointer",
                currentIndex === index 
                  ? "bg-primary w-10 shadow-md ring-2 ring-primary/20" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5"
              )}
              aria-label={`${t('common.go_to_slide')} ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;