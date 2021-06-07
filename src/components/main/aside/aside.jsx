import s from './aside.module.scss';
import AsideTop from './asideTop/asideTop';
import AsideBottom from './asideBottom/asideBottom'

const Aside = props => {
    return(
        <div className={s.aside}>
            <AsideTop />
            <AsideBottom SuggestionUsers={props.state}/>
        </div>
    )
};

export default Aside;