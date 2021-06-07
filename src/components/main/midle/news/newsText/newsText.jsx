import Sphere from './sphere/sphere';
import s from "./newsText.module.scss";

const NewsText = () => {
  return (
    <div className={s.newsText}>
      <div className={s.titleoftext}>
        <div className={s.titleoftextSphere}>
          Engineer in mechanical engineering
        </div>
        <div className={s.titleoftextButton}>
          <button className={s.btn}>Full time</button>
          <p className={s.pt}>30$/hr</p>
        </div>
      </div>
      <div className={s.mainText}>
        <p className={s.mainTextmidle}>
          <span>Lorem</span> ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          esse itaque nostrum molestiae et reprehenderit, magni similique ullam
          pariatur vel quia dolorum eos harum hic quos distinctio ipsa inventore
          blanditiis? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Cum eligendi nobis itaque maxime reiciendis, odit ratione praesentium
          exercitationem, facilis eos magnam corrupti magni quidem ex voluptate
          natus accusamus.
        </p>
        <p className={s.showMore}>View more...</p>
      </div>
      <div className={s.addition}>
          <Sphere name='PHP'/>
          <Sphere name='JavaScript'/>
          <Sphere name='.NET'/>
          <Sphere name='DevOps'/>
          <Sphere name='Java'/>
          <Sphere name='Python'/>
      </div>
    </div>
  );
};

export default NewsText;
