import s from './newFooter.module.scss';

const NewsFooter = () => {
    return(
        <div className={s.newsFooter}>
            <div className={s.line}></div>
            <div className={s.likes}>
                <div className= {s.img}>
                    <div className={s.likesImg}></div>
                    <div className={s.text}>Likes</div>
                    <div className={s.commentImg}></div>
                    <div className={s.text}>Comments</div>
                </div>
                <div className={s.viewImg}></div>
            </div>
        </div>
    )
};

export default NewsFooter;