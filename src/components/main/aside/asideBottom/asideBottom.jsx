import Suggestions from "./suggestions/suggestion";
import SuggestionsItems from "./suggestionItem/suggestionItem";
import s from "./asideBottom.module.scss";

const AsideBottom = props => {
  let suggestionItem = props.users.map(el => (
    <SuggestionsItems name={el.name} position={el.position} />
  ));
  return (
    <div className={s.asideBottom}>
      <Suggestions />
      {suggestionItem}
    </div>
  );
};

export default AsideBottom;
