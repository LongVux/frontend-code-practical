import "./Button.css";
import { LoadingBlock } from "../loading-block/LoadingBlock";

export interface ButtonProps {
  label: string;
  onClick: () => any;
  loading?: boolean;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className="button"
      disabled={props.loading || props.disabled}
      onClick={props.onClick}
    >
      {props.loading && <LoadingBlock />} <span>{props.label}</span>
    </button>
  );
};
