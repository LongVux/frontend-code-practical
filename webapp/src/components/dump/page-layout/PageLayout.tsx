import { AppString } from "../../../constant/AppString";
import "./PageLayout.css";

export interface PageLaoutProps {
  footer?: React.ReactNode | string;
  children: React.ReactNode;
}

export const PageLaout = (props: PageLaoutProps) => {
  return (
    <div className="page-layout">
      <main className="page-layout-main">{props.children}</main>
      <hr />
      <footer className="page-layout-footer">
        {props.footer ?? AppString.DEFAULT_FOOTER}
      </footer>
    </div>
  );
};
