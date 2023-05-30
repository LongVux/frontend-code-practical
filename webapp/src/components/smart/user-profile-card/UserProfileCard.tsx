import { useLayoutEffect, useState } from "react";
import { UserProfile, UserProfileCardInfo } from "../../../models/UserProfile";
import { getProfileImageByUrl } from "../../../service/ApiService";
import { Card } from "../../dump/card/Card";
import { Field } from "../../dump/field/Field";
import { IoMdBriefcase, IoMdCalendar } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FIELD_WIDTH = 20;

export interface UserProfileCardProps {
  userProfile: UserProfile;
}

export const UserProfileCard = (props: UserProfileCardProps) => {
  const navigate = useNavigate();

  const [userProfileCardInfo, setUserProfileCardInfo] =
    useState<UserProfileCardInfo>(UserProfileCardInfo.getDefault());

  useLayoutEffect(() => {
    setUserProfileCardInfo(
      UserProfileCardInfo.getCardInfoFromUserProfile(props.userProfile)
    );
  }, [props.userProfile]);

  return (
    <div onClick={() => navigate(`/${props.userProfile.id}`)}>
      <Card
        title={userProfileCardInfo.fullName}
        imageUrl={userProfileCardInfo.profile_picture_url}
        getImage={getProfileImageByUrl}
      >
        <Field
          icon={<IoMdBriefcase />}
          title={userProfileCardInfo.employmentInfo}
          remWidth={FIELD_WIDTH}
        />
        <Field
          icon={<MdEmail />}
          title={userProfileCardInfo.email}
          remWidth={FIELD_WIDTH}
        />
        <Field
          icon={<IoMdCalendar />}
          title={userProfileCardInfo.dateOfBirth}
          remWidth={FIELD_WIDTH}
        />
      </Card>
    </div>
  );
};
