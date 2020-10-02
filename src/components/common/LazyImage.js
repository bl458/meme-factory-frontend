import React, { useEffect, useState } from "react";

const ALT =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

const LazyImage = ({ src, alt = ALT, blurPlaceholder }) => {
  const [imageSrc, setImageSrc] = useState(blurPlaceholder);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc === blurPlaceholder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // when image is visible in the viewport + rootMargin
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "75%",
          }
        );

        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      // on component unmount, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, imageSrc, setImageSrc, src, blurPlaceholder]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      style={{
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    />
  );
};

export default LazyImage;
