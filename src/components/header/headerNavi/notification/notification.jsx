import s from './notification.module.scss';

const Notification = () => {
    return(
        <div className={s.notification}>
            <p className={s.notificationText}>Notification</p>
        </div>
    )
};

export default Notification;