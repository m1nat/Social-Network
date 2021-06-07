import s from './personality.module.scss';
import Avatar from './avatar/avatar';
import ButtonOfAccount from './buttonOfAccount/buttonOfAccount';

const Personality = () => {
    return(
        <div className={s.personality}>
            <Avatar />
            <ButtonOfAccount />
        </div>
    )
};

export default Personality;