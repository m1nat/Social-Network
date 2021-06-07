import s from './header.module.scss';

const HeaderNews = props => {
    return(
        <div className={s.headerNews}>
            <div className={s.avatarNews}>
                <div className={s.photo}></div>
                <div className={s.info}>
                    <div className={s.text1}>Vitaliy Sinkevich</div>
                    <div className={s.oclock}>
                        <div className={s.clock}></div>
                        <div className={s.text2}>4h ago</div>
                    </div>
                </div>
            </div>
            <div className={s.icons}>
                <button></button>
            </div>
        </div>
    )
};

export default HeaderNews;