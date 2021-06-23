import s from './aside.module.scss';
import AsideTop from './asideTop/asideTop';
import {AsideBottomContainer} from './asideBottom/asideBottomContainer'

const Aside = () => {
  return (
    <div className={s.aside}>
      <AsideTop />
      <AsideBottomContainer />
    </div>
  )
};

export default Aside;