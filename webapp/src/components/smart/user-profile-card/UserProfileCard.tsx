import { getProfileImageByUrl } from "../../../service/ApiService";
import { Card } from "../../dump/card/Card";
import { Field } from "../../dump/field/Field";
import { IoMdBriefcase } from "react-icons/io";

export interface UserProfileCardProps {}

export const UserProfileCard = (props: UserProfileCardProps) => {
  return (
    <>
      <Card
        title="Shannon McGlynn"
        imageUrl="/images/profiles/molestiasvelitneque.png"
        getImage={getProfileImageByUrl}
      >
        <Field
          icon={<IoMdBriefcase />}
          title="blablablablablablablablablablablablablablablabla"
          remWidth={13}
        />
      </Card>
    </>
  );
};
