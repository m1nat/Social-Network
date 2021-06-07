import s from "./newsMidle.module.scss";

const NewsMidle = () => {
  return (
    <div className={s.newsMidle}>
      <div className={s.postHeader}>
        <div className={s.left}>
          <div className={s.pic}>
            <div className={s.pic1}></div>
            <div className={s.tex1}></div>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.pic2}></div>
          <div className={s.bookmark}></div>
        </div>
      </div>
    </div>
  );
};

export default NewsMidle;
