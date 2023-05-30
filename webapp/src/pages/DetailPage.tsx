import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../service/ApiService";
import { UserProfile } from "../models/UserProfile";
import { UserProfileCard } from "../components/smart/user-profile-card/UserProfileCard";
import { PageLaout } from "../components/dump/page-layout/PageLayout";
import { Button } from "../components/dump/button/Button";

export const DetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    getUserById(Number(params.id))
      .then((response) => {
        setUserProfile(response.data);
      })
      .catch((e) => {
        //handle error
        console.log(e);

        navigate(`error/404`, { replace: true });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageLaout>
      <div className="flex-column">
        <UserProfileCard userProfile={userProfile!} />
        <Button label="go back" onClick={() => navigate(-1)} />
      </div>
    </PageLaout>
  );
};
