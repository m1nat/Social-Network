import UserName from './userName/username.jsx'
import s from './suggestionStatus.module.scss';

const SuggestionStatus = props => {
  
  let renderName = props.name.map( el => (
    <UserName name={ el.fullname } status={ el.status } job={ el.job }  country={ el.country } city={ el.city }/>
  ))


  return (
    <div className={s.suggestionStatus}>
        { renderName }
    </div>
  )
};

export default SuggestionStatus;
