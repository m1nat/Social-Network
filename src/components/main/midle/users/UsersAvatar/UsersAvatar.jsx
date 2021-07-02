import Avatars from './avatars/avatars'
import s from './UsersAvatar.module.scss';

const UsersAvatar = () => {
  return (
    <div className={s.userAvatar}>
      <Avatars />
      <Avatars />
      <Avatars />
      <Avatars />
      <Avatars />
    </div>
  )
};

export default UsersAvatar;