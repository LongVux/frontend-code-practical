import "./Field.css";

export interface FieldProps {
  icon: React.ReactNode;
  title: string;
  remWidth: number;
}

export const Field = (props: FieldProps) => {
  return (
    <div className="field">
      {props.icon}

      <span className="field-title" style={{ width: `${props.remWidth}rem` }}>
        {props.title}
      </span>
    </div>
  );
};
