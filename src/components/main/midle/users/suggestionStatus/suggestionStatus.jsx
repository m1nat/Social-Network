import SuggestionStatusItem from './suggestionStatusItem/suggestionStatusItem';
import s from './suggestionStatus.module.scss';

const SuggestionStatus = () => {
  return (
    <div className={s.suggestionStatus}>
      <SuggestionStatusItem />
      <SuggestionStatusItem />
      <SuggestionStatusItem />
      <SuggestionStatusItem />
      <SuggestionStatusItem />
    </div>
  )
};

export default SuggestionStatus;
