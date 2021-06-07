import s from './asideTopFollowing.module.scss';

const AsideTopFollowing = props => {
    return(
        <div className={s.asideTopFollowing}>
            <p className={s.followingTitle}>Following:</p>
            <p className={s.followingText}> {props.following}</p>
        </div>
    )
};

export default AsideTopFollowing;