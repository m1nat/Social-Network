import s from "./headerofmidle.module.scss";

const HeaderOfMidle = () => {
  return (
    <div className={s.headerOfMidle}>
      <div className={s.color}></div>
      <div className={s.view}>
        <div className={s.photo}></div>
        <div className={s.btnBlock}>
          <button>Show news</button>
          <button className={s.btnRed}>Add news</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderOfMidle;
