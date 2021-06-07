import s from './sphere.module.scss';

const Sphere = props => {
    return(
        <div className={s.sphere}>
            <button className={s.btn}>{props.name}</button>
        </div>
    )
};

export default Sphere;