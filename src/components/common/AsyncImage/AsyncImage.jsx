import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const AsyncImage = ({ src, alt, className = "", onError, ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start loading the image when it enters the viewport
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
            img.onerror = () => {
              setHasError(true);
              if (onError) {
                onError();
              }
            };
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, onError]);

  if (hasError && onError) {
    return null;
  }

  // Transparent 1x1 pixel data URL to preserve layout
  const placeholderSrc =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";

  return (
    <div ref={imgRef} style={{ display: "inline-block", lineHeight: 0 }}>
      {isLoaded && imageSrc && !hasError ? (
        <motion.img
          src={imageSrc}
          alt={alt}
          className={className}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          {...props}
        />
      ) : (
        <img
          src={placeholderSrc}
          alt=""
          className={className}
          style={{ opacity: 0, pointerEvents: "none" }}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default AsyncImage;
