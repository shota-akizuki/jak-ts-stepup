import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dd>名前</dd>
      <dt>{user.name}</dt>
      <dd>趣味</dd>
      <dt>{user.hobbies?.join(" / ")}</dt>
    </dl>
  );
};
