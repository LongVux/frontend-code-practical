import "./LoadingBlock.css";

export interface LoadingBlockProps {
  remSize?: number;
}

export const LoadingBlock = (props: LoadingBlockProps) => {
  const remSize = `${props.remSize || 0.5}rem`;

  return (
    <div
      className="loader"
      style={{
        width: remSize,
        height: remSize,
      }}
    ></div>
  );
};
