import s from './news.module.scss';
import HeaderNews from './headernews/headerNews';
import NewsFooter from './newsFooter/newsFooter';
import NewsMidle from './newsMidle/newsMidle';
import NewsText from './newsText/newsText';

const News = () => {
    return(
        <div className={s.news}>
            <HeaderNews />
            <NewsMidle />
            <NewsText />
            <NewsFooter />
        </div>
    )
};

export default News;