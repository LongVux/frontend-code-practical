import { useEffect, useRef, useState } from "react";

export interface LazyImageProps {
  src: string;
  alt: string;
}

export const LazyImage = (props: LazyImageProps) => {
  const pictureRef = useRef<HTMLImageElement>(null);
  const [pictureData, setPictureData] = useState<string>();
  const [loading, setLoading] = useState(false);

  // An observer to call for the pictureData when needed
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Loop through the entries
      entries.forEach((entry) => {
        // Check if the picture element is intersecting
        if (entry.isIntersecting) {
          setLoading(true);

          // Fetch the picture data from the API
          fetch(props.src)
            .then((response) => response.blob())
            .then((data) => {
              // Set the picture data to a URL object
              setPictureData(URL.createObjectURL(data));
            })
            .catch((error) => {
              // Handle errors
              console.error(error);
            })
            .finally(() => setLoading(false));

          // Unobserve the picture element
          observer.unobserve(pictureRef.current! as Element);
        }
      });
    });

    // Attach the observer to the picture element
    observer.observe(pictureRef.current! as Element);

    // Return a cleanup function to detach the observer
    return () => observer.disconnect();
  }, [props.src]);

  return (
    <div className="image-container">
      {/* Render a placeholder while loading */}
      {loading && <div className="placeholder">Loading...</div>}

      {/* Render the picture element with a ref */}
      <img ref={pictureRef} src={pictureData} alt={props.alt} />
    </div>
  );
};
