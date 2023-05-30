import { ImageRetrivable, LazyImage } from "../lazy-image/LazyImage";
import "./Card.css";

export interface CardProps extends ImageRetrivable {
  title: string;
  imageUrl?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const Card = (props: CardProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-image-holder">
          {props.imageUrl && (
            <LazyImage
              src={props.imageUrl}
              alt={`${props} - representation`}
              getImage={props.getImage}
            />
          )}
        </div>

        <span>{props.title}</span>
      </div>

      {props.children && (
        <>
          <hr />
          <div className="card-content">{props.children}</div>
        </>
      )}
    </div>
  );
};
