import AsideTopFont from './asideTopFont/asideTopFont';
import AsideTopAvatar from './asideTopAvatar/asideTopAvatar';
import AsideTopName from './asideTopName/asideTopName';
import AsideTopFollowing from './asideTopFollowing/asideTopFollowing';
import AsideTopFollowers from './asideTopFollowers/asideTopFollowers';
import AsideTopViewProfile from './asideTopViewProfile/asideTopViewProfile';

import s from './asideTop.module.scss';


const AsideTop = () => {
    return(
        <div className={s.asideTop}>
            <AsideTopFont />
            <AsideTopAvatar />
            <AsideTopName name='Vitaliy Sinkevich' status='In vocation'/>
            <AsideTopFollowing following='154'/>
            <AsideTopFollowers  followers='217'/>
            <AsideTopViewProfile />
        </div>
    )
};

export default AsideTop;