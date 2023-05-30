import { useNavigate } from "react-router-dom";
import { Button } from "../components/dump/button/Button";
import { PageLaout } from "../components/dump/page-layout/PageLayout";

export const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <PageLaout>
      <div className="flex-column">
        <h1>Error 404</h1>
        <Button label="go back" onClick={() => navigate(-1)} />
      </div>
    </PageLaout>
  );
};
