import { PageLaout } from "../components/dump/page-layout/PageLayout";
import { UserProfileCollection } from "../components/smart/user-profile-collection/UserProfileCollection";
import {
  UserProfilesContext,
  useUserProfilesContext,
} from "../hooks/UserProfilesContext";

export const HomePage = () => {
  const userProfilesContext = useUserProfilesContext();

  return (
    <PageLaout>
      <UserProfilesContext.Provider value={userProfilesContext}>
        <UserProfileCollection />
      </UserProfilesContext.Provider>
    </PageLaout>
  );
};
