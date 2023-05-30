import React, { useState, useEffect } from "react";
import { UserProfile } from "../models/UserProfile";
import { getUsers } from "../service/ApiService";

export interface IUserProfilesContext {
  loading: boolean;
  searchedProfiles: UserProfile[];
  searchUserProfilesByName: (searchKey: any) => Promise<void>;
}

export const UserProfilesContext =
  React.createContext<IUserProfilesContext | null>(null);

export const useUserProfilesContext = (): IUserProfilesContext => {
  const [loading, setLoading] = useState(false);
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([]);
  const [searchedProfiles, setSearchedProfiles] = useState<UserProfile[]>([]);

  //using 'async' for the future if the search function need to be handled by api
  const searchUserProfilesByName = async (searchKey: string) => {
    console.log(searchKey);

    setSearchedProfiles(
      userProfiles.filter((profile) =>
        [profile.first_name, profile.last_name].join(" ").includes(searchKey)
      )
    );
  };

  useEffect(() => {
    setLoading(true);

    getUsers()
      .then((response) => {
        setUserProfiles(response.data);
        setSearchedProfiles(response.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    loading: loading,
    searchedProfiles: searchedProfiles,
    searchUserProfilesByName: searchUserProfilesByName,
  };
};
