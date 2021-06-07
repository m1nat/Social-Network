import s from './asideTopFollowers.module.scss';

const AsideTopFollowers = props => {
    return(
        <div className={s.asideTopFollowers}>
            <p className ={s.followersTitle}>Followers</p>
            <p className={s.followerSum}>{props.followers}</p>
        </div>
    )
};

export default AsideTopFollowers;