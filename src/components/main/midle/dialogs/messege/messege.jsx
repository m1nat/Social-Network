import s from './messege.module.scss';

const Messege = props => {
    return (
        <div className={s.messege}>
            {props.name}
        </div>
    )
}

export default Messege;