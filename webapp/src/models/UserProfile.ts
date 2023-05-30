import { AppString } from "../constant/AppString";

export interface UserEmployment {
  title?: string;
  key_skill?: string;
}

export interface UserAddress {
  city?: string;
  street_name?: string;
  street_address?: string;
  zip_code?: string;
  state?: string;
  country?: string;
  coordinates?: {
    lat?: number;
    lng?: number;
  };
}

export interface UserSubcription {
  plan?: string;
  status?: string;
  payment_method?: string;
  term?: string;
}

export class UserProfile {
  id!: number;
  uuid!: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  gender?: string;
  phone_number?: string;
  date_of_birth?: string;
  employment?: UserEmployment;
  address?: UserAddress;
  subscription?: UserSubcription;
  profile_picture_url?: string;
}

export class UserProfileCardInfo {
  uuid!: string;
  fullName!: string;
  employmentInfo!: string;
  email!: string;
  dateOfBirth!: string;
  profile_picture_url!: string;

  static getDefault(): UserProfileCardInfo {
    return {
      uuid: AppString.NA,
      fullName: AppString.NA,
      employmentInfo: AppString.NA,
      dateOfBirth: AppString.NA,
      email: AppString.NA,
      profile_picture_url: AppString.NA,
    };
  }

  static getCardInfoFromUserProfile(
    userProfile: UserProfile
  ): UserProfileCardInfo {
    return {
      uuid: userProfile?.uuid,
      fullName:
        [userProfile?.first_name, userProfile?.last_name]
          .filter((e) => Boolean(e))
          .join(" ")
          .trim() ?? AppString.NA,
      employmentInfo: userProfile?.employment?.title ?? AppString.NA,
      dateOfBirth: userProfile?.date_of_birth ?? AppString.NA,
      email: userProfile?.email ?? AppString.NA,
      profile_picture_url: userProfile?.profile_picture_url ?? AppString.NA,
    };
  }
}
