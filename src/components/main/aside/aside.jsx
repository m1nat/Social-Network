import s from './aside.module.scss';
import AsideTop from './asideTop/asideTop';
import AsideBottomContainer from './asideBottom/asideBottom'

const Aside = props => {
  return (
    <div className={s.aside}>
      <AsideTop />
      <AsideBottomContainer users={props.users} />
    </div>
  )
};

export default Aside;