import s from './asideTopName.module.scss';

const AsideTopName = props => {
    return(
        <div className={s.asideTopName}>
            {props.name}
            <p className={s.status}>Status: {props.status}</p>
        </div>
    )
};

export default AsideTopName;