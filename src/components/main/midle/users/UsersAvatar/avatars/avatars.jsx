import s from './avatars.module.scss';

const Avatars = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.avatars}></div>
      <div className={s.btn}>
        <button type={'submit'}>Add</button>
      </div>
    </div>
  )
};

export default Avatars;