import { useContext } from "react";
import { UserProfilesContext } from "../../../hooks/UserProfilesContext";
import { SearchInput } from "../../dump/search-input/SearchInput";
import { UserProfileCard } from "../user-profile-card/UserProfileCard";
import "./UserProfileCollection.css";

export const UserProfileCollection = () => {
  const userProfilesContext = useContext(UserProfilesContext);

  const resultText =
    userProfilesContext?.searchedProfiles?.length === 0
      ? `No employee was found.`
      : userProfilesContext?.searchedProfiles?.length === 1
      ? `1 employee was found.`
      : `${userProfilesContext?.searchedProfiles?.length} employees were found.`;

  return (
    <div>
      <div className="user-profile-collection-header">
        <span>{resultText}</span>
        <SearchInput onSearch={userProfilesContext?.searchUserProfilesByName} />
      </div>

      <div className="user-profile-collection-container">
        {(userProfilesContext?.searchedProfiles || []).map((profile) => (
          <UserProfileCard userProfile={profile} key={profile.uuid} />
        ))}
      </div>
    </div>
  );
};
