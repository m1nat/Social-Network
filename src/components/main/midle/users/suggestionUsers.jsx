import UsersAvatar from './UsersAvatar/UsersAvatar'
import SuggestionStatus from './suggestionStatus/suggestionStatus'
import s from './suggestionUsers.module.scss'

const SuggestionUsers = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.suggestonUsers}>
        <UsersAvatar />
        <SuggestionStatus />
      </div>
      <div className={s.showMore}>
        Show more
      </div>
    </div>
  )
};

export default SuggestionUsers;