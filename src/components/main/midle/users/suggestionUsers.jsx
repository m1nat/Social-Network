import UsersAvatar from './UsersAvatar/UsersAvatar';
import SuggestionStatusContainer from './suggestionStatus/suggestionStatusContainer';
import s from './suggestionUsers.module.scss';

const SuggestionUsers = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.suggestonUsers}>
        <UsersAvatar />
        <SuggestionStatusContainer />
      </div>
      <div className={s.showMore}>
        Show more
      </div>
    </div>
  )
};

export default SuggestionUsers;