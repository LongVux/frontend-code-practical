import { useEffect, useRef, useState } from "react";
import { AxiosResponse } from "axios";

export interface ImageRetrivable {
  getImage?: (
    url: string,
    controller?: AbortController
  ) => Promise<AxiosResponse<any, any>>;
}
export interface LazyImageProps extends ImageRetrivable {
  src: string;
  alt: string;
}

export const LazyImage = (props: LazyImageProps) => {
  const pictureRef = useRef<HTMLImageElement>(null);
  const [pictureData, setPictureData] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // An observer to call for the pictureData when needed
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoading(true);

          props.getImage &&
            props
              .getImage(props.src)
              .then((response) =>
                setPictureData(URL.createObjectURL(response.data))
              )
              .catch((error) => {
                // Handle errors
                console.error(error);
              })
              .finally(() => setLoading(false));

          observer.unobserve(pictureRef.current! as Element);
        }
      });
    });

    observer.observe(pictureRef.current! as Element);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.src]);

  return (
    <div className="image-container">
      {loading && <div className="placeholder">Loading...</div>}

      <img ref={pictureRef} src={pictureData} alt={props.alt} />
    </div>
  );
};
