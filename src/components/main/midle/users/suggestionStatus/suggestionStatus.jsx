import SuggestionStatusItemConstaner from './suggestionStatusItem/suggestionStatusItem';
import s from './suggestionStatus.module.scss';

const SuggestionStatus = () => {
  return (
    <div className={s.suggestionStatus}>
      <SuggestionStatusItemConstaner />
      <SuggestionStatusItemConstaner />
      <SuggestionStatusItemConstaner />
      <SuggestionStatusItemConstaner />
      <SuggestionStatusItemConstaner /> 
    </div>
  )
};

export default SuggestionStatus;
