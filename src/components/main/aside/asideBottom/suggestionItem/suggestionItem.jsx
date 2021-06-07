import s from "./suggestion_item.module.scss";

const SuggestionsItems = props => {
  return (
    <div className={s.suggestion_item}>
      <div className={s.suggestion_itemPhoto}>
      </div>
      <div className={s.Suggestion_itemInfo}>
        {props.name}
        <p className={s.position}>position: {props.position}</p>
      </div>
      <button className={s.add}></button>
    </div>
  );
};

export default SuggestionsItems;
