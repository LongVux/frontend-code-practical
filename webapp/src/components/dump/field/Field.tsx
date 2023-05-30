import "./Field.css";

export interface FieldProps {
  icon: React.ReactNode;
  title: string;
  remWidth: number;
}

export const Field = (props: FieldProps) => {
  return (
    <div className="field" style={{ width: `${props.remWidth}rem` }}>
      {props.icon}

      <div className="field-title">
        <span>{props.title}</span>
      </div>
    </div>
  );
};
